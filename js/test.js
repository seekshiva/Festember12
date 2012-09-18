var i, str = "", x = Event();

function displayEvents(x) {
    var j, str = "";
    for(j = 0; j < x.length; ++j) {
	var k;
	//console.log (x[j].title);
	str += '<div class="eventx">';
	str += '<div class="ev_title">' + x[j].title + "</div>";
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

str = displayEventList(x);
document.getElementById("root").innerHTML = str;



str = "";

function getList(x) {
    var str = "", i, j;
    for(i in x) {
	str += "<h3>" + i + "</h3><ul>";
	if(x[i].constructor == Array) {
	    for(j = 0; j < x[i].length; j++) {
		str += '<li>' + x[i][j].title + '</li>';
	    }
	}
	else {
	    str += getList(x[i]);
	    console.log("Got list for ");
	    console.log(x[i]);
	}
	str += "</ul>";
    }

    return str;
}

str += getList(x);

document.getElementById("list").innerHTML = str;