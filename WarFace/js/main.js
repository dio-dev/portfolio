$(".drop-slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
})

$(document).ready(function(){
  $(".burger button").on("click", function () {
    $(".burger button").toggleClass("active");
    $(".header__menu").slideToggle();
  })
});
$(".question-top p").on("click", function () {
  $(this).parent().toggleClass("active");
  $(this).parent().siblings(".ansver").slideToggle();
  $(this).parents(".question-wrap").siblings().children(".ansver").slideUp();
  $(this).parents(".question-wrap").siblings().children(".question-top").removeClass("active");;
})
$(document).ready(function(){
  $(".play-btn button").on("click", function gameInit() {
    $(".case-open__ico").hide();
    $(".carousel").show();
    $(".carousel ul").animate({marginLeft:-9882}, 4500, "easeOutCirc");
  })
})

$(document).ready(function(){
  $(".case-item--1").on("click", function gameInit() {
    $(".case-open__ico--1").show();
    $(".case-open__ico--2").hide();
    $(".case1").show();
    $(".case2").hide();
    $(".carousel").hide();
  })
})
$(document).ready(function(){
	$(".case-item--2").on("click", function gameInit() {
    $(".case-open__ico--2").show();
    $(".case-open__ico--1").hide();
    $(".case2").show();
    $(".case1").hide();
    $(".carousel").hide();
  })
})

function tabInit(){ 
  $('.tabs__content').not('.tabs__content_active').hide(); 
  $('.tabs-list__item button').click(function(){ 
    $('.tabs-list__item').not($(this).parent()).removeClass('tabs-list__item_active'); 
    $(this).parent().addClass('tabs-list__item_active'); 
    $('.tabs__content').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active').hide(); 
    $('#'+$(this).attr('data-content')).addClass('tabs__content_active').fadeIn(); 
  }); 
}; 
tabInit();