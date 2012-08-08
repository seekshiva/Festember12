$(document).ready(function() {
    var startX,startY,current_page = "intro";
    
    
    $(document).one('mouseover', function(e) {
	startX = e.pageX;
	startY = e.pageY;
    });
    $(document).bind('mousemove', function(e) {
	$("#logo-head-bg").css(
	    {"background-position-x": ((5000 - e.pageX + startX)/3) - 30 }
	);
	$("#logo-under-head-bg").css(
	    {"background-position-y": ((5000 - e.pageY + startY)/10) + 35 }
	);
    });
    
    $(".navigation a").click(function() {
	var t_margin_l = $("#intro").css("margin-left");
	t_margin_l = t_margin_l.substr(0,t_margin_l - 2);

	var direction,thisid = this.id;
	thisid = thisid.substr(0,thisid.length-5);
	
	switch(thisid) {
	case "intro":
	    if(Modernizr.history) {
		history.pushState(null,null,"/12/");
		document.title = "Festember";
		updateAnalytics();
	    }
	    direction = -1;
	    $("#intro_link").fadeOut();
	    $("#contacts_link").fadeIn();
	    $("#sponsors_r_lk").fadeIn();
	    $("#sponsors_l_lk").fadeOut();
	    if($("body").scrollTop() > 650)
		$("body").animate({scrollTop: 450});
	    break;
	case "contacts":
	    if(Modernizr.history) {
		history.pushState(null,null,"/12/contacts/");
		document.title = "Festember - Contacts";
		updateAnalytics();
	    }
	    direction = 1;
	    $("#intro_link").fadeIn();
	    $("#contacts_link").fadeOut();
	    $("#sponsors_r_lk").fadeOut();
	    $("#sponsors_l_lk").fadeIn();
	    if($("body").scrollTop() < 250)
		$("body").animate({scrollTop: 250});
	    break;
	case "sponsors":
	    if(Modernizr.history) {
		history.pushState(null, null, "/12/sponsors/");
		document.title = "Festember - Sponsors";
		updateAnalytics();
	    }
	    if(this.id == "sponsors_r_lk")
		direction = -1;
	    else
		direction = 1;
	    $("#intro_link").fadeIn();
	    $("#contacts_link").fadeIn();
	    $("#sponsors_r_lk").fadeOut();
	    $("#sponsors_l_lk").fadeOut();
	    if($("body").scrollTop() < 250)
		$("body").animate({scrollTop: 250});
	    break;
	}
	
	(function(next,dir) {
	    if(current_page == next)
		return;
	    
	    $("#" + current_page).animate({
		"opacity": .2,
		"margin-left" : (t_margin_l - 100) * 2 * direction
	    },200, function() {
		$(this).css({opacity: 0});
	    }).hide(0);
	    
	    setTimeout(function() {
		$("#" + next).css({
		    "display": "block",
		    "opacity": .4,
		    "margin-left": (600 * direction) + "px"
		}).animate({
		"margin-left": 0,
		"opacity": 1
	    },400);
	    },300);
	    current_page = next;
	})(thisid,direction);
    });

    $("#theme_play").click(function() {
	document.getElementById('theme_music').play();
	$("#theme_play").fadeOut(.8);
	$("#theme_pause").fadeIn();
    });
    
    $("#theme_pause").click(function() {
	document.getElementById('theme_music').pause();
	$("#theme_play").fadeIn();
	$("#theme_pause").fadeOut(.1);
    });
    
    $("body").animate({scrollTop: 150});

    $(document).scroll(function(){
	var y = $("body").scrollTop();
	if (320 < y ) {
	    $(".navigation").css({
		position: "fixed",
		"margin-top": 0,
	    });
	    $("#sponsor_animate").css({
		position: "fixed",
		"margin-top": "180px",
	    });
	}
	else {
	    $(".navigation").css({
		position: "absolute",
		"margin-top": "340px",
		top: "0px"
	    });
	    $("#sponsor_animate").css({
		position: "absolute",
		"margin-top": "560px",
		top: "0px"
	    });
	}
    });

    var sponsors_animate_index = 0;
    var sponsor_update = function() {
	$("#sponsor_animate img").each(function(index) {
	    $(this).fadeOut(1000);
	});
	$( $("#sponsor_animate img")[sponsors_animate_index] ).fadeIn(2000);
	    /*fadeOut(function() {
	    $( $("#sponsor_animate img")[sponsors_animate_index] ).fadeIn();
	    //console.log("fading in " + sponsors_animate_index);
	    });*/
	//console.log("show");
	
	sponsors_animate_index++;
	if( $("#sponsor_animate img").length == sponsors_animate_index)
	    sponsors_animate_index = 0; 
    };
    sponsor_update();
    setInterval(sponsor_update,5000);


});



