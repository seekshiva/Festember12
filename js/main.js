(function(window,document,$,undefined){
    $(function(){
	
	$(function(){
	    position_elements();		
	});	
	
	var element = {
	    canvas : document.getElementById("container_canvas"),
	    overlay : document.getElementById("overlayed"),
	    pronite : document.getElementById("pronite_container"),
	    fsr : document.getElementById("fsr_container"),		
	    gallery : document.getElementById("gallery_container"),				
	    contacts : document.getElementById("contact_container"),
	    events : document.getElementById("events_container"),
	    casette : document.getElementById("casette_container"),
	    workshop : document.getElementById("workshop_container"),
	    sponsor : document.getElementById("sponsor_container"),
	    games : document.getElementById("games_container"),
	    player : document.getElementById("player"),
	    informals : document.getElementById("informals_container"),
	    updates : document.getElementById("updates"),
	    overlay_container : document.getElementById("overlay_container"),
	    event_title : "",
	    currupdate : "",
	    prevupdate :  $(".updates:first") ,
	    close : document.getElementById("overlay_close"),
	    events_child : [],
	    event_content : document.getElementById("content"),
	    color : ["#e3e530","#d4d627","#e5cd2f","#d7bd12","#dbde18",,"#d4d627","#e5cd2f","#e3e530","#d7bd12","#dbde18","#d7bd12","#dbde18"],
	    popupSrc : "",
	    time : "day",
	    content : "",
	    randnums : [0,1,2,3,4,5,6,7,8,9,10],
		sponsor_skew_img : [1,2,3,4,5,6,7,8,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
        sponsor_img : [1,3,2,4,5,37,6,48,30,38,40,7,8,33,34,35,36,45,42,10,50,11,51,39,43,12,41,16,52,15,13,47,31,28,17,18,19,20,25,21,22,23,24,26,27,28,29,32],
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
	

	$(element["overlay_container"]).css({
            'opacity' : '0',		
	    'z-index' : '1500',
            'display' : 'block'			
	});	
	
	$(".updates:not(:first)").css({"display":"none"});
	
	
	var position_elements = function(){
	    var w = window.innerWidth,
	    h = window.innerHeight;
	    
	    element["canvas"].style.height = window.innerHeight+'px';	
	    
	    $(element["overlay"]).css({
		width: ((50/100)*w)+'px',
		height: ((95/100)*h)+'px',
		left: ((25/100)*w)+'px',
		bottom: ((0/100)*w)+'px'
	    });
		
	    $(element["updates"]).css({
		width: (w)+'px',
		height: ((2/100)*w)+'px',
		left: (0)+'px',
		bottom: ((41/100)*w)+'px'
	    });		
            
	    $(element["pronite"]).css({
		width: ((8/100)*w)+'px',
		height: ((22.6/100)*w)+'px',
		left: ((28/100)*w)+'px',
		bottom: ((23/100)*w)+'px'
	    });
		
	    $(element["fsr"]).css({
		width: ((12/100)*w)+'px',
		height: ((9.5/100)*w)+'px',
		left: ((53/100)*w)+'px',
		bottom: ((25/100)*w)+'px'
	    });	
/*	
	    $(element["gallery"]).css({
		width: ((4/100)*w)+'px',
		height: ((14.5/100)*w)+'px',
		left: ((65/100)*w)+'px',
		bottom: ((30/100)*w)+'px'
	    });			
*/	    
	    //if(e.type === "resize"){
	    $(element["player"]).css({
		width: ((77/100)*w)+'px',
		height: ((46/100)*w)+'px',
		left: ((10/100)*w)+'px',
		bottom: ((3/100)*w)+'px'
	    });
	    //}
	    
	    $(element["contacts"]).css({
		width: ((7/100)*w)+'px',
		height: ((12/100)*w)+'px',
		left: ((65/100)*w)+'px',
		bottom: ((15/100)*w)+'px'
	    });
	    
	    $(element["casette"]).css({
		width: ((7/100)*w)+'px',
		height: ((3/100)*w)+'px',
		left: ((31/100)*w)+'px',
		bottom: ((18/100)*w)+'px'
	    });
	    
	    $(element["sponsor"]).css({
		width: ((30/100)*w)+'px',
		height: ((25/100)*w)+'px',
		left: ((86/100)*w)+'px',
		bottom: ((2/100)*w)+'px'
	    });
	    
	    $(element["games"]).css({
		width: ((4.3/100)*w)+'px',
		height: ((4/100)*w)+'px',
		left: ((27/100)*w)+'px',
		bottom: ((18/100)*w)+'px'
	    });
	    
	    $(element["informals"]).add($("#informals_cover_container")).css({
		width: ((10/100)*w)+'px',
		height: ((5/100)*w)+'px',
		left: ((40/100)*w)+'px',
		bottom: ((28/100)*w)+'px'
	    });
	    
	    $(element["workshop"]).css({
		width: ((24/100)*w)+'px',
		height: ((13/100)*w)+'px',
		left: ((75/100)*w)+'px',
		bottom: ((23/100)*w)+'px'
	    });
	    
	    $(element["events"]).css({
		width: ((18/100)*w)+'px',
		height: ((14/100)*w)+'px',
		left: ((8/100)*w)+'px',
		bottom: ((20/100)*w)+'px'
	    });
	    
	    for(var i=0;i<5;i++){
		$(element["workshop_child"][i]).css({
		    width : ((element["workshop_prop"]["width"][i]/100)*w)+'px',
		    height : ((element["workshop_prop"]["height"][i]/100)*w)+'px',
		    left : ((element["workshop_prop"]["left"][i]/100)*w)+'px',
		    bottom : ((element["workshop_prop"]["bottom"][i]/100)*w)+'px'
		});
	    }	
	    
	    for(var i=0;i<7;i++){
		$(element["events_child"][i]).css({
		    width: ((element["events_prop"]["width"][i]/100)*w)+'px',
		    height: ((element["events_prop"]["height"][i]/100)*w)+'px',
		    left: ((element["events_prop"]["left"][i]/100)*w)+'px',
		    bottom: ((element["events_prop"]["bottom"][i]/100)*w)+'px'
		});
	    }	
	    
	    for(var i=0;i<11;i++){
		$(element["house_child"][i]).css({
		    width: ((element["house_prop"]["width"][i]/100)*w)+'px',
		    height: ((element["house_prop"]["height"][i]/100)*w)+'px',
		    left: ((element["house_prop"]["left"][i]/100)*w)+'px',
		    bottom: ((element["house_prop"]["bottom"][i]/100)*w)+'px'
		});
	    }				
	    
	    //	$("#blur").hoverizr({effect:"blur",container:"container_image

	    //var img = new Image();
	    //var imageSrc = "images/street.png";
	    //img.onload = 
	    $("#container_image").load(function(){
		$("#brochure").animate({'top' : '90%'},1000,function(){$("#link").hide();});
		document.getElementById("initial_container").style.display = "none";
    		setTimeout(function(){callback("sunset");},5000);		
		$(element["overlay_container"]).css({
		    'opacity' : '0.5',		
		    'z-index' : '300',
		    'display' : 'none'			
		});	
		  var spsk = $("#sponsor_container img"),
		      sp = $(".sponsor_c img");
		   for(var i=0;i<spsk.length;i++){
			   $(sp[i]).attr("src" ,"images/sponsors/q"+element["sponsor_img"][i]+".png");
			   $(spsk[i]).attr("src" ,"images/sponsors_skewed/q"+element["sponsor_skew_img"][i]+".png");
			}
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
				$(".updates").css({marginLeft: (currentLeft + cloud.speedX)+'px'});
				if (cDiv.offset().left < 0 && (currentLeft+$(element["prevupdate"]).children("span").width()) < 200){
				    element["currupdate"] = $(element["prevupdate"]).next();
				    $(element["prevupdate"]).css({"display" :"none"});
				    if($(element["prevupdate"]).attr("id") === "last"){
					element["currupdate"] = $(".updates:first");
				    }				
				    $(element["currupdate"]).css({"display" : "block"});
				    element["prevupdate"] = element["currupdate"];
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
			document.getElementById("image").src = "./images/giantwheel2.png";	
			setTimeout(function(){callback("sunrise")},18000);
		    }
		    $("#sun").css({bottom: (sunTop - 2.5)+'px',left: (sunleft+2.5)+'px'});
		    $("#moon").css({bottom: (moonTop + 3.5)+'px',left: (moonleft+1.5)+'px'});			
		},100);
		element["time"] = "day";	
		$("#container_canvas").animate({'backgroundColor':'#010115'}, 18000);				  
		setTimeout(function(){lighting();},6000);
            }else if(x==="sunrise"){
		var rise = setInterval(function(){
		    var sunTop = parseInt($("#sun").css("bottom")),
		    moonTop = parseInt($("#moon").css("bottom")),
		    moonleft = parseInt($("#moon").css("left")),
		    sunleft = parseInt($("#sun").css("left"));
		    
		    if(sunTop >528 && moonTop <100){
			clearInterval(rise);
			document.getElementById("image").src = "./images/giantwheel1.png";					
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
	
	
	function addEvent(element,event,handler,x){
	    var phase = x || "true"; 
	    element.addEventListener(event,handler,phase);	
	}	
	
	var popup = function(x){
	    //console.log(x);
	    $("#overlayed").css({
		height : $(x).height()+"px",
		width : $(x).width()+"px",
		bottom : parseInt($(x).css("bottom"))+"px",
		left : parseInt($(x).css("left"))+"px",
		display: "block"
	    });
	    var nheight = 95;
	    var nwidth = 50;
	    var bottom = 0;
	    var left = 25;
	    
	    $("#overlay_container").fadeIn(200);
	    
	    $("#overlayed").stop().animate({
	        'height' : nheight+'%',
	        'width' : nwidth+'%',
	        'left' : left+'%',
	        'bottom' : bottom+'%',
		'opacity' : 1
	    }, 250, function() {
		$(element["close"]).css({
		    display : "block"
		});
	    });
	    
	};	
	
	
	$("#casette_container").click(function() {   
	    var oheight = $(this).height();
	    var owidth = $(this).width();
	    var nheight = (oheight + (oheight * 14));
	    var nwidth = (owidth + (owidth * 10));
	    var bottom = 6;
	    var left = 10;
	    
	    element["popupSrc"] = this;  
	    
	    $("#overlay_container").fadeIn(200);
	    $(element["close"]).css({
		display : "block"
	    });		  
	    
	    $(".player").css('z-index', '900').stop().animate({
		'height' : nheight+'px',
		'width' : nwidth+'px',
		'left' : left+'%',
		'bottom' : bottom+'%',
		'opacity' : 1}, 190,callback);
	    
	    $(".play-pause").css('display','block');
	});
	
	
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
	    element["content"] = document.getElementById("pronite");		
	    element["content"].style.display = "block";		
	});
	$("#fsr_container").click(function(e){
	    var that = this;
	    element["popupSrc"] = this;		   
	    popup(that);
	    element["content"] = document.getElementById("nothing");		
	    element["content"].style.display = "block";		
	});	
	$("#games_container").click(function(e){
	    window.location = "http://games.festember.com/";
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
	    //element["overlay"].style.backgroundColor = "#fff";
	    element["content"] = document.getElementById("events")
	    element["content"].style.display = "block";		
	});
	$("#informals_cover_container").click(function(e){
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
	
	$("#overlay_close").add("#overlay_container").click(function(){
	    var nheight = $(element["popupSrc"]).height();
	    var nwidth = $(element["popupSrc"]).width();
	    var bottom = parseInt($(element["popupSrc"]).css("bottom"));
	    var left = parseInt($(element["popupSrc"]).css("left"));
	    
	    if(element["content"] !== ""){
		if($(element["popupSrc"]).children())
		    debounce(function(){$(element["popupSrc"]).children().animate({'backgroundColor' : '#ffffff'},500);});
		
		element["content"].style.display = "none";
		element["close"].style.display = "none";
		
		$(element["overlay"]).stop().animate({
	            'height' : nheight+'px',
	            'width' : nwidth+'px',
	            'left' : left+'px',
	            'bottom' : bottom+'px',
		    'opacity' : 0}, 500,function(){
			element["overlay_container"].style.display = "none";
			element["overlay"].style.display = "none";
			//if($(element["popupSrc"]).attr("id") === "workshop_container" || $(element["popupSrc"]).attr("id") === "events_container"){
			//element["overlay"].style.backgroundColor = "#fff";				   
			//}
		    });	
	    }
	    else {
		$(".player").stop().animate({
	            'height' : nheight+'px',
	            'width' : nwidth+'px',
	            'left' : left+'px',
	            'bottom' : bottom+'px',
		    'opacity' : 0}, 500, function(){
			$(this).css({'z-index' : '-500'});
			element["overlay_container"].style.display = "none";
			element["close"].style.display = "none";
		    });
		
		$(".play-pause").css('display','none');		
	    } 
	    
	});
	
	$("#ev_back").click(function(ev){
	    
	    $(this).animate({
		"margin-left": "-100px"
	    }, 500, function() {
		$(this).css({
		    "display" : "none"
		});
		$("#list").css({
		    "display" : "block"
		}).animate({
		    "margin-top": "0px",
		    "opacity": "1"
		}, 100);
	    });
	    
	    $("."+element["ev_title"]).parent().prev("h3").css({
		"display" : "none"
	    });
	    
	    $("."+element["ev_title"]).parent().animate({
		"margin-top": "500px",
		"opacity": "0.2"
	    }, 300, function() {
		$(this).css({
		    "display" : "none"
		});
		setTimeout(function(){
		var t = document.getElementById(element["ev_title"]).offsetTop;
		document.getElementById("overlayed").scrollTop = t;
		},500);	
	    });
	    
	});
	
	
	function flicker(h,y){
	    var freq = randhouse(11),a = {sum :0, off : 0, on :0};
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
	
	$("#brochure").mouseenter(function(e) {
	    e.stopPropagation();
	    var that = this;
	    debounce(function() {
		$("#overlay_container").fadeIn(300);		
		$(that).animate({'top' : '5%'},600,function(){$("#links").show();});
	    } ,300);	
	}).mouseleave(function(e) {
	    e.stopPropagation();
	    var that = this;
	    debounce(function(){
		$("#overlay_container").fadeOut(300, function(){
		    element["overlay_container"].style.display = "none";	
		});			  
		$(that).animate({'top' : '90%'},1000);
	    },300,function(){$("#links").hide();});
	});
	
	
	$("#cloud-holder").clouds({
	    clouds: [
		{src:'cloud_1.png',x:120,y:600,speedX:-1},
		{src:'cloud_2.png',x:650,y:500,speedX:-2},
		{src:'flight1.gif',x:1050,y:553,speedX:-2.5,nature: "flight"},
		{x:1050,y:553,speedX:-2.5,nature: "flight"},
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
/*	
	function create_event_element(o,x,y){
	    if(y !== 1){
=======
	/*	
		function create_event_element(o,x,y){
		if(y !== 1){
>>>>>>> 0cb3b109765d694549253c3cb4da1b11bbc16706
		var s = " nothing";
		}	
		var mDiv = $('<div class="'+x+ s+'"></div>');
		for(var i=0,max=o.length;i<max;i++){
		var cDiv = $('<div></div>'),
		tDiv = $('<div class="event_sub_title" id='+x+i+'>'+o[i]["title"]+'</div>'),
		dDiv = $('<p>'+o[i]["description"]+'</p>');
		cDiv.append(tDiv);
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
	*/
	////////////////////////////////////////////////////////////////////////////////////
	function displayInformals(x){
	    var j, str = "";
	    for(j = 0; j < x.length; ++j) {		
			var  k;
		str += '<div class="informalsx">';
		if(x[j].title !== undefined && x[j].title !== "") 			
		str += '<h4 class="inf_title '+ (x[j].title).replace(/[\(\)?'\s]/g, "") +'">' + x[j].title + "</h4>";
		
		if(x[j].link !== undefined) 
		str += '<a href="'+x[j].link+'" target="_blank"><img src="'+x[j].source+'" /></a>';
		
		if(x[j].description !== undefined) 
		    str += '<div class="inf_description">' + x[j].description + "</div>";			
		
	 		str += "</div>";
	    }
	    return str;
	}	
	
	function displayInformalsList(x) { 
	    var str = "";
	    for(i in x) {
		var j;

		str += "<h2>" + i + "</h2>";
		if(x[i].constructor == Array) 
		    str += displayInformals(x[i]);

	}
	    return str;
	}	

	function displayEvents(x) {
	    var j, str = "";
	    for(j = 0; j < x.length; ++j) {
		var k;

		str += '<div class="eventx">';
		if(x[j].title !== undefined && x[j].title !== "") 			
		str += '<div class="ev_title '+ (x[j].title).replace(/[\(\)?'\s]/g, "") +'">' + x[j].title + "</div>";
		
		if(x[j].deadline !== undefined && x[j].deadline !== "") 
		    str += '<div class="ev_deadline">Dead Line: ' + x[j].deadline + "</div>";
		
		if(x[j].description !== undefined) 
		    str += '<div class="ev_description">' + x[j].description + "</div>";
		
		if(x[j].prize !== undefined && x[j].prize[0] !== "") 
		    str += '<div class="ev_prize">Prize Money: ' + x[j].prize + " INR.</div>";
		
		if (x[j]["children"] !== undefined) 
		    str += displayEvents(x[j]["children"]);
		
		if(x[j]["rules"] !== undefined) {
		    str += '<div class="ev_sub_head">Rules: </div>';
		    str += '<div class="ev_rules"><ul>';
		    for (k = 0; k < x[j]["rules"].length; ++k)
			str += '<li>' + x[j].rules[k] + '</li>';
		    str += "</ul></div>";
		}

		if(x[j]["contacts"] !== undefined) {
		    str += '<div class="ev_sub_head">Contacts: </div>';
		    str += '<div class="ev_contacts">';
		    for (k = 0; k < x[j]["contacts"].length; ++k) {
			str += '<div class="ev_contact">';
			str += '<div class="ev_contact_name">' + x[j].contacts[k].name + '</div>';
			str += '<div class="ev_contact_phone">' + x[j].contacts[k].phone + '</div>';
			str += '<div class="ev_contact_email">' + x[j].contacts[k].email + '</div>';
			str += '</div>';
		    }
		    str += "</div>";
		}
		str += "</div>";
	    }
	    return str;
	}


	function displayEventList(x) { 
	    var str = "";
	    for(i in x) {
		var j;
		str += "<h3>" + i + "</h3>";
		if(x[i].constructor == Array) {
		    str += displayEvents(x[i]);
		}
		else {
		    str += displayEventList(x[i]);
		}
	    }
	    return str;
	}

	function getList(x) {
	    var str = "", i, j;
	    for(i in x) {
		str += "<h3>" + i + "</h3><ul>";
		if(x[i].constructor == Array) {
		    var etitle;
		    for(j = 0; j < x[i].length; j++) {
				if(x[i][j].title !== undefined && x[i][j].title !== "") 		
			etitle = (x[i][j].title).replace(/[\(\)?'\s]/g, "");
			str += '<li id="'+(x[i][j].title).replace(/[\(\)?'\s]/g, "")+'"><a>' + x[i][j].title + '</a></li>';
		    }
		}
		else {
		    str += getList(x[i]);
		}
		str += "</ul>";
	    }

	    return str;
	}


	var create_event_content = (function(){
	    var i, str = "", str1 = "", x = fEvent(), y = fInformals();

	    str1 = displayInformalsList(y);
            document.getElementById("informals").innerHTML = str1;	
	
	    str = displayEventList(x);
            document.getElementById("root").innerHTML = str;	
            str = "";
            str += getList(x);
            document.getElementById("list").innerHTML = str;
	})();

////////////////////////////////////////////////////////////////////////////////////


	$("#list").click(function(e){
	    console.log(e.target);

	    element["ev_title"] = (e.target.innerText).replace(/[\(\)?'\s]/g, "");
	    if($("." + element["ev_title"]).length === 0)
		return;


            $("#list").animate({
		"margin-top": "-500px",
		"opacity": "0.2"
	    }, 300, function() {
		$(this).css({
		    "display" : "none"
		});
		$("#ev_back").css({
		    "display" : "inline-block"
		}).animate({
		    "margin-left": "0px"
		}, 300);
	    });
	
	    $("."+element["ev_title"]).parent().css({
		"display" : "block",
		"margin-top": "500px",
		"opacity": "1"
	    }).animate({
		"margin-top": "0px"
	    }, 600);
	});

	//////////////////////////////////////////////////////////////////////////	

	var angle = 0;
	setInterval(function(){
	    angle+=0.3;
	    $("#image").rotate(angle);
	    var d=angle; var rad=130;
	    for(var i=0;i<5; ++i) {
		d += 360 /5;
		var nx = d/360 * 2 * Math.PI;
		x=rad*Math.cos(nx) + 150 -25;
		y=rad*Math.sin(nx) + 150 ;
		//	console.log(x)
		$("#image" + (i+1)).css({
		    "margin-top": y,
		    "margin-left": x
		});
	    }
	},20);	
	
	var oneDay = 24*60*60*1000;
	var secondDate = new Date();
	var firstDate = new Date(2012,08,27,17,00,00);
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

	document.getElementById("time").innerHTML = diffDays;
	
	window.onresize = $.debounce(50,position_elements);			
	window.onkeyup = function(e) {
	    if(e.keyCode == 27) {
		console.log(e.keyCode);
		$("#overlay_close").click();
	    }
	}

    });
})(this, this.document, jQuery);
