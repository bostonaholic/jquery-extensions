(function($) {
  $.fn.actsAsMailTo = function(options) {
    var opts = $.extend({}, $.fn.actsAsMailTo.defaults, options);

    return this.each(function() {
      var address   = $(this).text().replace(opts.atCharacter, '@').replace(opts.dotCharacter, '.')
      ,   emailLink = '<a href="mailto:' + address + '">' + address + '</a>';

      $(this).replaceWith(emailLink);
    });
  };

  $.fn.actsAsMailTo.defaults = {
    atCharacter: ' [at] ', // <space>[at]<space>
    dotCharacter: ' [dot] ' // <space>[dot]<space>
  };
})(jQuery);
