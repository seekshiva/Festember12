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
    
    $(".links a").click(function() {
	var t_margin_l = $("#intro").css("margin-left");
	t_margin_l = t_margin_l.substr(0,t_margin_l - 2);

	var direction,thisid = this.id;
	thisid = thisid.substr(0,thisid.length-5);
	
	switch(thisid) {
	case "intro":
	    direction = -1;
	    break;
	case "contacts":
	    direction = 1;
	    break;
	}
	
	(function(next,dir) {
	    if(current_page == next)
		return;
	    
	    $("#" + current_page).animate({
		"opacity": .2,
		"margin-left" : (t_margin_l - 100) * direction
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
    

});

