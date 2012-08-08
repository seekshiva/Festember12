// Bring Undercore's debounce to jQuery.
// Usage:
//
//   var callback = $.debounce(500, function(){ console.log("Scrolled"); });
//   $(window).scroll(callback);
//
;(function($){
  $.debounce = function(wait, callback) {
    var timeout;

    return function debounce() {
      var self = this
        , args = Array.prototype.slice.call(arguments, 0)
        , later
      ;

      later = function() {
        clearTimeout(timeout);
        callback.apply(self, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
})(jQuery);