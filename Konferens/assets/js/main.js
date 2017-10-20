
(function($) {
  $(function() {
    if (!$.cookie('smartCookies')) {
 
      function getWindow(){
        $('.back-fancy').arcticmodal({
          closeOnOverlayClick: true,
          closeOnEsc: true
        });
        $('#mark').addClass("good");
      };
 
      $('html').mouseleave(function (e) { if ((e.clientY < 0) && !($("#mark").hasClass("good"))) { getWindow() } });
 
    }
 
    $.cookie('smartCookies', true, {
      expires: 3600,
      path: '/'
    });
 
  })
})(jQuery)
$(document).ready(function() {
            $(".pop_up").fancybox({
            'scrolling': 'no'
         });
 });
$(document).ready(function(){
  $(".change-btn").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top-50;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
// Cache selectors
var lastId,
    topMenu = $(".to_prise"),
    topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});