(function(window,document,$,undefined){
    $(function(){
	
	$(function(){
	    position_elements();		
	});	
	
	var element = {
	    canvas : document.getElementById("container_canvas"),
	    overlay : document.getElementById("overlayed"),
	    pronite : document.getElementById("pronite_container"),
	    contacts : document.getElementById("contact_container"),
	    events : document.getElementById("events_container"),
	    casette : document.getElementById("casette_container"),
	    workshop : document.getElementById("workshop_container"),
	    sponsor : document.getElementById("sponsor_container"),
	    games : document.getElementById("games_container"),
	    player : document.getElementById("player"),
	    informals : document.getElementById("informals_container"),
	    overlay_container : document.getElementById("overlay_container"),
	    prev : document.getElementById("header").querySelector("li"),
	    events_child : [],
	    event_content : document.getElementById("content"),
	    color : ["#e3e530","#d4d627","#e5cd2f","#d7bd12","#dbde18",,"#d4d627","#e5cd2f","#e3e530","#d7bd12","#dbde18","#d7bd12","#dbde18"],
	    popupSrc : "",
	    time : "day",
	    content : "",
	    randnums : [0,1,2,3,4,5,6,7,8,9,10],
	    workshop_child : [document.getElementById("element_workshop"),document.getElementById("element_workshop_1"),document.getElementById("element_workshop_2"),document.getElementById("element_workshop_3"),document.getElementById("element_workshop_4")],
	    house_child : [],
            events_prop : {
                width : [2,5,10,13,12,9,5],
		height : [6,6,5,5,2,3,3],
		left : [24,20,16,11,11,11,11],
		bottom : [20,20,22,23,28,30,32]
	    },
            workshop_prop : {
	        width : [14,7,8,18,15],
		height : [5,2,3,7,8],
		left : [75,77,73,80,85],
		bottom : [25.5,25,23,26,30]
	    },
            house_prop : {
	        width : [28,10,30,11,11,5,5,8,3,7,3],
		height : [51,9,52,43,32,21,16,15,2,11,4],
		left : [0,27,72,64,55,50,45,38,36,12,73],
		bottom : [3,9,2,2,2,10,11,11,25,3,31]
	    }		
	};
	/*
	  element["overlay_container"].style.opacity = 1;
	  element["overlay_container"].style.display = "block";	
	*/
	
	var position_elements = function(){
	    var w = window.innerWidth;	
	    
	    element["canvas"].style.height = window.innerHeight+'px';	
	    
	    element["overlay"].style.width = ((50/100)*w)+'px';
	    element["overlay"].style.height = ((40/100)*w)+'px';
	    element["overlay"].style.left = ((25/100)*w)+'px';
	    element["overlay"].style.bottom = ((0/100)*w)+'px';				
	    
	    element["pronite"].style.width = ((8/100)*w)+'px';
	    element["pronite"].style.height = ((23/100)*w)+'px';
	    element["pronite"].style.left = ((28/100)*w)+'px';
	    element["pronite"].style.bottom = ((23/100)*w)+'px';
	    
	    //if(e.type === "resize"){
	    element["player"].style.width = ((77/100)*w)+'px';
	    element["player"].style.height = ((46/100)*w)+'px';
	    element["player"].style.left = ((10/100)*w)+'px';
	    element["player"].style.bottom = ((3/100)*w)+'px';			
	    //}
	    element["contacts"].style.width = ((7/100)*w)+'px';
	    element["contacts"].style.height = ((12/100)*w)+'px';
	    element["contacts"].style.left = ((65/100)*w)+'px';
	    element["contacts"].style.bottom = ((15/100)*w)+'px';	
	    
	    element["casette"].style.width = ((7/100)*w)+'px';
	    element["casette"].style.height = ((3/100)*w)+'px';
	    element["casette"].style.left = ((31/100)*w)+'px';
	    element["casette"].style.bottom = ((18/100)*w)+'px';	
	    
	    element["sponsor"].style.width = ((30/100)*w)+'px';
	    element["sponsor"].style.height = ((25/100)*w)+'px';
	    element["sponsor"].style.left = ((86/100)*w)+'px';
	    element["sponsor"].style.bottom = ((2/100)*w)+'px';				
	    
	    element["games"].style.width = ((4.3/100)*w)+'px';
	    element["games"].style.height = ((4/100)*w)+'px';
	    element["games"].style.left = ((27/100)*w)+'px';
	    element["games"].style.bottom = ((18/100)*w)+'px';	
	    
	    element["informals"].style.width = ((10/100)*w)+'px';
	    element["informals"].style.height = ((5/100)*w)+'px';
	    element["informals"].style.left = ((40/100)*w)+'px';
	    element["informals"].style.bottom = ((28/100)*w)+'px';			
	    
	    element["workshop"].style.width = ((24/100)*w)+'px';
	    element["workshop"].style.height = ((13/100)*w)+'px';
	    element["workshop"].style.left = ((75/100)*w)+'px';
	    element["workshop"].style.bottom = ((23/100)*w)+'px';
	    
	    element["events"].style.width = ((18/100)*w)+'px';
	    element["events"].style.height = ((14/100)*w)+'px';
	    element["events"].style.left = ((8/100)*w)+'px';
	    element["events"].style.bottom = ((20/100)*w)+'px';			
	    
	    for(var i=0;i<5;i++){
		element["workshop_child"][i].style.width = ((element["workshop_prop"]["width"][i]/100)*w)+'px';
		element["workshop_child"][i].style.height = ((element["workshop_prop"]["height"][i]/100)*w)+'px';
		element["workshop_child"][i].style.left = ((element["workshop_prop"]["left"][i]/100)*w)+'px';
		element["workshop_child"][i].style.bottom = ((element["workshop_prop"]["bottom"][i]/100)*w)+'px';	
	    }	
	    
	    for(var i=0;i<7;i++){
		element["events_child"][i].style.width = ((element["events_prop"]["width"][i]/100)*w)+'px';
		element["events_child"][i].style.height = ((element["events_prop"]["height"][i]/100)*w)+'px';
		element["events_child"][i].style.left = ((element["events_prop"]["left"][i]/100)*w)+'px';
		element["events_child"][i].style.bottom = ((element["events_prop"]["bottom"][i]/100)*w)+'px';					
	    }	
	    
	    for(var i=0;i<11;i++){
		element["house_child"][i].style.width = ((element["house_prop"]["width"][i]/100)*w)+'px';
		element["house_child"][i].style.height = ((element["house_prop"]["height"][i]/100)*w)+'px';
		element["house_child"][i].style.left = ((element["house_prop"]["left"][i]/100)*w)+'px';
		element["house_child"][i].style.bottom = ((element["house_prop"]["bottom"][i]/100)*w)+'px';				
	    }				
	    
	    //	$("#blur").hoverizr({effect:"blur",container:"container_image

	    //var img = new Image();
	    //var imageSrc = "images/street.png";
	    //img.onload = 
	    $("#container_image").load(function(){
		$("#brochure").animate({'top' : '90%'},1000);
		document.getElementById("initial_container").style.display = "none";
		/*
		  element["overlay_container"].style.opacity = 0.5;			
		  element["overlay_container"].style.display = "none";							
		*/
	    });	    
	    //img.src = imageSrc;			
	};			
	
	$.fn.clouds = function(settings) {
	    settings = $.extend({
		clouds: [],
		folder: '/',
		speed: 1,
		opacityStep: 0.02,
		fader: true
	    }, settings);
	    return this.each(function(n, item) {
		var self = $(item);
		$.each(settings.clouds, function(c, cloud) {
		    var cImg = new Image();
		    $(cImg).load(function() {
			var cDiv = $('<div class="cloud"></div>');
			cDiv.css({
			    bottom: cloud.y+"px",
			    left: cloud.x+"px",
			    width: cImg.width+"px",
			    height: cImg.height+"px",
			    backgroundImage: 'url('+this.src+')',
			    zIndex: 4	
			});
			self.append(cDiv);
			var o = settings.opacityStep;
			cloud.currentO = Math.random();
			cDiv.css({opacity: cloud.currentO});
			if(cloud.nature !== "flight"){
			    window.setInterval(function() {
				if (settings.fader) {
				    if (cloud.currentO > 1.0) o = -settings.opacityStep;
				    if (cloud.currentO < 0.3) o = +settings.opacityStep;
				    cloud.currentO += o;
				    cDiv.css({opacity: cloud.currentO});
				}
				var currentLeft = parseInt(cDiv.css("left"));
				cDiv.css({left: (currentLeft - cloud.speedX)+'px'});
				if (cDiv.offset().left > $("#cloud-holder").width() - self.offset().left) {
				    var s = -cImg.width;
				    cDiv.css({left: s+"px"});
				}
			    }, settings.speed);
			}
			else{
			    window.setInterval(function() {
				cDiv.css({
				    'opacity' : 1	
				});	
				var currentLeft = parseInt(cDiv.css("left"));
				cDiv.css({left: (currentLeft + cloud.speedX)+'px'});
				if (cDiv.offset().left < 0 ) {
				    var s = $("#cloud-holder").width();
				    cDiv.css({left: s+"px"});
				}
			    }, settings.speed);								
			}	
		    });
		    cImg.src = settings.folder + cloud.src;
		});
	    });
	}; 		
	
	
	Array.prototype.shuffle = function() {
	    var len = this.length;
	    var i = len;
	    while (i--) {
		var p = parseInt(Math.random()*len);
		var t = this[i];
		this[i] = this[p];
		this[p] = t;
	    }
        };	
	
	for(var i=0;i<7;i++){
	    element["events_child"][i] = document.getElementById("element_events_"+(i+1));
	}	
	
	for(var i=0;i<11;i++){
	    element["house_child"][i] = document.getElementById("house_"+(i+1));
	}
	
	var timeout;
	
	var debounce = function(callback,time){
	    var args = Array.prototype.slice.call(arguments,0),later,self = this;
	    
	    later = function(){
		args[0].apply();
	    };
	    
	    if(typeof(args[0]) !== "undefined" && typeof(args[1]) !== "undefined" ){

		clearTimeout(timeout);
		timeout = setTimeout(callback,time);
	    }else {
		
    		clearTimeout(timeout);				
	    }	
	};	
	
	var callback = function(x){
	    
	    
	    if(x==="sunset")  {
		var set = setInterval(function(){
		    var sunTop = parseInt($("#sun").css("bottom")),
		    moonTop = parseInt($("#moon").css("bottom")),
		    moonleft = parseInt($("#moon").css("left")),
		    sunleft = parseInt($("#sun").css("left")),						
		    currentO = 1,
		    current1 = 0;
		    if(sunTop <300 && moonTop >550){
			clearInterval(set);
			setTimeout(function(){callback("sunrise")},18000);
		    }
		    $("#sun").css({bottom: (sunTop - 2.5)+'px',left: (sunleft+2.5)+'px'});
		    $("#moon").css({bottom: (moonTop + 3.5)+'px',left: (moonleft+1.5)+'px'});								
		},100);
		element["time"] = "day";	
		$("#container_canvas").animate({'backgroundColor':'#02021d'}, 18000);				  
		setTimeout(function(){lighting();},6000);
            }else if(x==="sunrise"){
		var rise = setInterval(function(){
		    var sunTop = parseInt($("#sun").css("bottom")),
		    moonTop = parseInt($("#moon").css("bottom")),
		    moonleft = parseInt($("#moon").css("left")),
		    sunleft = parseInt($("#sun").css("left"));
		    
		    if(sunTop >528 && moonTop <100){
			clearInterval(rise);
			setTimeout(function(){callback("sunset")},18000);
			//callback("sunset");
		    }
		    $("#sun").css({bottom: (sunTop + 3.5)+'px',left: (sunleft-1.5)+'px'});
		    $("#moon").css({bottom: (moonTop - 2.5)+'px',left: (moonleft-2.0)+'px'});		 						   
		},100);	
		element["time"] = "night";						
		$("#container_canvas").animate({'backgroundColor':'#ddf'}, 18000);	
		setTimeout(function(){lighting();},6000);			
            }
	    
	    
	    //$("#theme_play").css('opacity','1');		
	};
	
	setTimeout(function(){callback("sunset");},5000);
	
	function addEvent(element,event,handler,x){
	    var phase = x || "true"; 
	    element.addEventListener(event,handler,phase);	
	}	
	
	var popup = function(x){
	    console.log(x);
	    element["overlay"].style.height = $(x).height()+"px";
	    element["overlay"].style.width = $(x).width()+"px";
	    element["overlay"].style.bottom =  parseInt($(x).css("bottom"))+"px";
	    element["overlay"].style.left = parseInt($(x).css("left"))+"px";			
            element["overlay"].style.display = "block";						
	    var nheight = 80;
	    var nwidth = 50;
	    var bottom = 0;
	    var left = 25;
	    
	    element["overlay_container"].style.display = "block";
	    
	    $("#overlayed").stop().animate({
	        'height' : nheight+'%',
	        'width' : nwidth+'%',
	        'left' : left+'%',
	        'bottom' : bottom+'%',
		'opacity' : 1}, 250);				
	    
	};	
	
	/*
	  $("#casette_container").click(function() {   
	  var oheight = $(this).height();
	  var owidth = $(this).width();
	  var nheight = (oheight + (oheight * 14));
	  var nwidth = (owidth + (owidth * 10));
	  var bottom = 6;
	  var left = 10;
	  
	  $(".player").css('z-index', '10').stop().animate({
	  'height' : nheight+'px',
	  'width' : nwidth+'px',
	  'left' : left+'%',
	  'bottom' : bottom+'%',
	  'opacity' : 1}, 190,callback);
	  });
	*/
	
	$("#contact_container").mouseenter(function(e){
	    //debounce(function(){$("#element_contact").animate({'backgroundColor' : '#faf686'},2000);}, 100);  
	});
	$("#pronite_container").mouseenter(function(e){
	    //debounce(function(){$("#element_pronite").animate({'backgroundColor' : '#b20404'},2000);}, 100);
	});
	$("#games_container").mouseenter(function(e){
	    //debounce(function(){$("#element_games").animate({'backgroundColor' : '#eb59d5'},2000);}, 100);
	});
	$("#events_container").mouseenter(function(e){});
	$("#workshop_container").mouseenter(function(e){});
	$("#informals_container").mouseenter(function(e){});
	
	$("#contact_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;
	    popup(that);
	    element["content"] = document.getElementById("contacts");		
	    element["content"].style.display = "block";
	});
	$("#pronite_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;		   
	    popup(that);
	    element["content"] = document.getElementById("nothing");		
	    element["content"].style.display = "block";		
	});
	$("#games_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;		   
	    popup(that);
	    element["content"] = document.getElementById("nothing");		
	    element["content"].style.display = "block";		
	});
	$("#events_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;
	    popup(that);
	    element["content"] = document.getElementById("workshops");		
	    element["content"].style.display = "block";		
	});
	$("#workshop_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this; 		   
	    popup(that);
	    element["overlay"].style.backgroundColor = "#000";
	    element["content"] = document.getElementById("events")
	    element["content"].style.display = "block";		
	});
	$("#informals_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;		   
	    popup(that);
	    element["content"] = document.getElementById("informals")
	    element["content"].style.display = "block";		
	});
	
	$("#sponsor_cover_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;		   
	    popup(that);
	    element["content"] = document.getElementById("sponsors")
	    element["content"].style.display = "block";		
	});
	
	$("#overlay_container").click(function(){
	    var nheight = $(element["popupSrc"]).height();
	    var nwidth = $(element["popupSrc"]).width();
	    var bottom = parseInt($(element["popupSrc"]).css("bottom"));
	    var left = parseInt($(element["popupSrc"]).css("left"));
	    
	    if($(element["popupSrc"]).children())
		debounce(function(){$(element["popupSrc"]).children().animate({'backgroundColor' : '#ffffff'},500);});
	    
	    element["content"].style.display = "none";
	    
	    $("#overlayed").stop().animate({
	        'height' : nheight+'px',
	        'width' : nwidth+'px',
	        'left' : left+'px',
	        'bottom' : bottom+'px',
		'opacity' : 0}, 500,function(){element["overlay_container"].style.display = "none";element["overlay"].style.display = "none";
					       if($(element["popupSrc"]).attr("id") === "workshop_container"){
            					   element["overlay"].style.backgroundColor = "#fff";				   
					       }
					      });	
	    
	});
	
	$("#header").click(function(ev){
	    var curr = ev.target;	
	    ev.preventDefault();	
	    element["event_content"].querySelector("."+element["prev"].childNodes[0].innerHTML).classList.add("nothing");        
	    element["prev"].classList.remove("selected");
	    curr.parentNode.classList.add("selected");
	    element["event_content"].querySelector("."+curr.innerHTML).classList.remove("nothing");
	    element["prev"] = curr.parentNode;		
	});
	
	
	function flicker(h,y){
	    var freq = randhouse(11),a = {sum :0,off : 0,on :0};
	    //console.log(y);
            if(element["time"]==="day"){
		//console.log("hello");
		for (var i=1;i<=freq;i++){
		    a.sum+=i;
		    if(a.sum>i){
			a.off = 100*i;
			a.on = 50*a.sum
		    }else{
			a.off = 100*i;
			a.on = 250*a.sum;
		    }   
		    setTimeout(function(){ 
			h.style.backgroundColor = "#ffffff";					   		   
		    },a.off);	
		    
		    setTimeout(function(){
			h.style.backgroundColor = element["color"][y];
		    },a.on);			   
		} 
		
	    } 
	    else if(element["time"] === "night"){
                h.style.backgroundColor = "#ffffff";					   		   
	    }		  
	    return;
	}	
	
	function randhouse(x){
	    return Math.floor((Math.random()*x)+1);		   	
	};
	
	var lighting = function(){
	    var house = 0;
            element["randnums"].shuffle();
            if(element["randnums"].length > 0){
		flicker(element["house_child"][element["randnums"][house]],house);			
		element["randnums"].splice(house,1);				
		setTimeout(function(){lighting();},1500);
	    }
	    else{
		element["randnums"] = [0,1,2,3,4,5,6,7,8,9,10];
		return;
	    }	
	}	
	
	$("#events_container").mouseenter(function(e){
	    e.stopPropagation();
            for(var i=0;i<7;i++)
		element["events_child"][i].style.backgroundColor = "green";		
	}).mouseleave(function(e){
	    e.stopPropagation();
            for(var i=0;i<7;i++)
		element["events_child"][i].style.backgroundColor = "#ffffff";				
	});
	
	$("#workshop_container").mouseenter(function(e){
	    e.stopPropagation();
            for(var i=0;i<5;i++)
		element["workshop_child"][i].style.backgroundColor = "blue";			
	}).mouseleave(function(e){
	    e.stopPropagation();
            for(var i=0;i<5;i++)
		element["workshop_child"][i].style.backgroundColor = "#ffffff";				
	});	
	/*
	  $("#brochure").mouseenter(function(e){
	  e.stopPropagation();
	  var that = this;
	  debounce(function(){
	  element["overlay_container"].style.display = "block";			
	  $(that).animate({'top' : '5%'},1000);},300);	
	  }).mouseleave(function(e){
	  e.stopPropagation();
	  var that = this;
	  debounce(function(){
	  element["overlay_container"].style.display = "none";			
	  $(that).animate({'top' : '80%'},1000);},500);	
	  });
	*/
	
	$("#cloud-holder").clouds({
	    clouds: [
		{src:'cloud_1.png',x:120,y:600,speedX:-1},
		{src:'cloud_2.png',x:650,y:500,speedX:-2},
		{src:'flight1.gif',x:1050,y:553,speedX:-2.5,nature: "flight"},
		{src:'cloud_4.png',x:230,y:626,speedX:-1},
		{src:'cloud_5.png',x:840,y:650,speedX:-2.5},
		{src:'cloud_6.png',x:520,y:634,speedX:-1.5},
		{src:'cloud_7.png',x:360,y:628,speedX:-1}
	    ],
	    folder: 'images/',
	    speed: 100
        }); 	

	var sponsor_change = function(index) {
	    index = index || 0;
	    var callback = function() {
		$( $("#sponsor_container img")[index] ).fadeOut(500);
		index = (index >= $("#sponsor_container img").length - 1) ? 0 : index + 1;
		$( $("#sponsor_container img")[index] ).fadeIn(1000);
		sponsor_change(index);
	    };
	    setTimeout(callback,3000);
	};
	
	sponsor_change();
	
	function create_event_element(o,x,y){
	    if(y !== 1){
		var s = " nothing";
	    }	
	    var mDiv = $('<div class="'+x+ s+'"></div>');
	    for(var i=0,max=o.length;i<max;i++){
		var cDiv = $('<div class="event_sub_title">'+o[i]["title"]+'</div>'),
		dDiv = $('<p class="event_sub_description">'+o[i]["description"]+'</p>');
		cDiv.append(dDiv);
		mDiv.append(cDiv);	
	    }
	    return mDiv;		 		
	}	
	
	var create_event_content = (function(){
	    var obj = Event();
	    for(var key in obj){
		if(obj[key].constructor.name === "Array"){			
                    var container = create_event_element(obj[key],key);
		    $("#content").append(container);
		}
		else if(obj[key].constructor.name === "Object"){
		    var mDiv = $('<div class="'+key+'"></div>'),
		    obj_sub = obj[key];  
		    for(var sub_key in obj_sub){  
			var container1 = create_event_element(obj_sub[sub_key],sub_key,1); 
			mDiv.append(container1);
		    }  
		    $("#content").append(mDiv);
		}			 	
	    }
	})();
	
	var oneDay = 24*60*60*1000;
	var secondDate = new Date();
	var firstDate = new Date(2012,08,27,17,00,00);
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

	document.getElementById("time").innerHTML = diffDays;
	
	window.onresize = $.debounce(50,position_elements);			
	
    });
})(this, this.document, jQuery);
