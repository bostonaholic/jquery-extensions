(function($) {
  $.fn.actsAsMailTo = function(options) {
    var opts = $.extend({}, $.fn.actsAsMailTo.defaults, options);

    return this.each(function() {
      var address   = $(this).text().replace(opts.atCharacter, '@').replace(opts.dotCharacter, '.')
      ,   emailLink = '<a href="mailto:' + address + '" class="' + $(this).attr('class') + '">' + or($(this).attr('data-text'), address)  + '</a>';

      $(this).replaceWith(emailLink);
    });
  };

  or = function(one, two) {
    if (one) {
      return one;
    } else {
      return two;
    }
  };

  $.fn.actsAsMailTo.defaults = {
    atCharacter: ' [at] ', // <space>[at]<space>
    dotCharacter: ' [dot] ' // <space>[dot]<space>
  };

  $.fn.actAsAnchor = function() {
    return this.each(function() {
      var $self = $(this);
      $self.attr('id', $self.text().toLowerCase());
    });
  };

  $.fn.actAsLinkToAnchor = function() {
    return this.each(function() {
      var $self = $(this)
      ,   text = $self.text()
      ,   link = "<a href='#" + text.toLowerCase() + "'>" + text + "</a>"
      ,   tag = $self[0].tagName
      ,   surroundedLink = '<' + tag + '>' + link + '</' + tag + '>';
      $self.replaceWith(surroundedLink);
    });
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
