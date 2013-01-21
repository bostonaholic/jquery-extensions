(function($) {
  $.fn.actsAsMailTo = function(options) {
    var opts = $.extend({}, $.fn.actsAsMailTo.defaults, options);

    return this.each(function() {
      var address   = $(this).text().replace(opts.atCharacter, '@').replace(opts.dotCharacter, '.')
      ,   emailLink = '<a href="mailto:' + address + '">' + textOrAddress(opts.innerText, address)  + '</a>';

      $(this).replaceWith(emailLink);
    });
  };

  textOrAddress = function(text, address) {
    if (text) {
      return text;
    } else {
      return address;
    }
  };

  $.fn.actsAsMailTo.defaults = {
    atCharacter: ' [at] ', // <space>[at]<space>
    dotCharacter: ' [dot] ' // <space>[dot]<space>
  };

  // Adapted from Jonathan Snook
  $.fn.actsAsSlideshow = function(options) {
    var opts = $.extend({}, $.fn.actsAsSlideshow.defaults, options);

    return this.each(function() {
      var container = $(this);
      container.find('img:gt(0)').hide();
      setInterval(function(){
        container.find(':first-child').fadeOut()
                 .next('img').fadeIn(350)
                 .end().appendTo(container);
      }, opts.speed);
    });
  };

  $.fn.actsAsSlideshow.defaults = { speed: 3500 };
})(jQuery);
