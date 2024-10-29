//sp用ナビボタン
$(window).on('load', function () {
  // load後に呼ばれる
  $(document).on('click', '.menu-trigger', function () {
    $('.menu-trigger').toggleClass('active');
    $('.sp').fadeToggle();
  });
  
});

$('.gnav__menu__item a').click(function() {
  $('.menu-trigger').toggleClass('active');
  $('.gnav').fadeToggle();
});