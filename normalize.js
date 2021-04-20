$.fn.clickToggle = function (a, b) {
    return this.each(function () {
      var clicked = false;
      $(this).on('click', function () {
        clicked = !clicked;
        if (clicked) {
          return a.apply(this, arguments);
        }
        return b.apply(this, arguments);
      });
    });
  };
  
  $('nav').hide();
  
  $('.menubtn').clickToggle(function () {
    // １回目のクリック
    $('nav').toggle(300);
    $('.menubtn').css('color','white');
  }, function () {
    // ２回目のクリック
    $('nav').toggle(300);
    $('.menubtn').css('color','black');
  });