$(document).ready(function(){

    $.fn.serializeObject = function()
    {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
            if (o[this.name] !== undefined) {
		if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
		}
		o[this.name].push(this.value || '');
            } else {
		o[this.name] = this.value || '';
            }
	});
	return o;
    };

    var submit = function ajaxSubmit(x){
	
           var s = x.serializeObject();
	    console.log(s);
            $.ajax({
		url: "module/updater.php",
		type: "POST",
                dataType : "json",
		data:{ 
                    q : s,
                    action  : "updateuser"
		},
 		success: function(response) {
                    console.log(response);
                   x.css({display : "none"});
		}            
            });

    }

    window.submit = submit;

});