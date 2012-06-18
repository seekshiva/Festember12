$(document).ready(function() {
    var startX,startY;
    
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
    
    $("#links").click(function() {
	var t_margin_l = $("#intro").css("margin-left");
	t_margin_l = t_margin_l.substr(0,t_margin_l - 2);
	$("#intro").animate({
	    "opacity": .2,
	    "margin-left": t_margin_l - 100
	},200, function() {
	    $(this).css({opacity: 0});
	});
	
	setTimeout(function() {
	    $("#contacts").css({
		"display": "block",
		"opacity": .4,
		"margin-left": "600px"
	    }).animate({
		"margin-left": 0,
		"opacity": 1
	    },400);
	},300);
    });
    

});

