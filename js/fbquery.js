// Init the SDK upon load
window.fbAsyncInit = function() {
    FB.init({
        appId      : '114659931896670', // App ID
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    }); 

    var s;
    
    // listen for and handle auth.statusChange events
    FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function(me){
		
		s = response.authResponse.accessToken;
		/*        
			  v = "SELECT url FROM profile_pic WHERE id = me()" ;
			  
			  $.ajax({
			  url : "https://graph.facebook.com/fql",
			  type : "GET",
			  data : {
                          access_token : s,
                          q : v
                          },
			  success : function(d){
                          console.log(d);
			  }
			  
			  });
		*/  
		console.log(s);   
		$.ajax({
                    url : "module/login.php",
                    type : "POST",
                    data : {
                        action : "loginrequest",
                        q : s
                    },
                    dataType : "html",
                    success : function(d){
			if(d === "" || d.split(",")[0] === ""){
                            create_register(d);
			}else{
			    $("#register_form").append(d);
			    $("#initialForm").submit(function(e){
				e.preventDefault();
				create_register("");
				submit($(this));
			    });
			    $(".btn").click(function(){
				console.log();
				if($(this).val() == 0)
				    $('#online_event_box').css({display : 'none'});
				else
				    $('#online_event_box').css({display : 'block'});
			    });
			}
                    }
		    
		});
		//	   			   console.log(me);
		document.getElementById('auth-displayname').innerHTML = me.name;	
            });						
            document.getElementById('auth-loggedout').style.display = 'none';
            document.getElementById('auth-loggedin').style.display = 'block';
        } else {
            // user has not auth'd your app, or is not logged into Facebook
            document.getElementById('auth-loggedout').style.display = 'block';
            document.getElementById('auth-loggedin').style.display = 'none';
        }
    });


    function create_register(q){
	var elem = document.getElementsByClassName("event_sub_title");
	var query = q.split(",");
	for(var i=0;i<elem.length;i++){
	    var  checkid = $(elem[i]).attr("id");
            var found = 0;
	    for(var j =0;j<query.length;j++){
		if(checkid === query[j]){
		    found = 1;
		    // query.splice(j,1);
		    break;
		}
	    }
            
	    if(found === 0){
		var mDiv = $('<div class="event_sub_register" id="register_'+checkid+'"><b>Register</b></div>');
		$(elem[i]).parent().append(mDiv);
	    }
	}
	setTimeout(event_handle_register(),2000);
    }


    function event_handle_register(){
	//        console.log($(".event_sub_register"));
	$(".event_sub_register").one("click",function(){
            var elem = $(this).attr("id").substring(9);
            var that = $(this);
            $.ajax({
                url : "module/updater.php",
                type : "POST",
                data : {
                    action : "updaterequest",
                    v : elem
                },
                success : function(d){
                    console.log(d);
                    that.css({display : 'none'});
                }
            });
	});
    }

    // respond to clicks on the login and logout links
    document.getElementById('auth-loginlink').addEventListener('click', function(){
        FB.login();
    });

    document.getElementById('auth-logoutlink').addEventListener('click', function(){
        window.location.href = "module/logout.php"
    }); 

} 
