
$(document).ready(function(){
	$(".slider-project").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true
	});
});
$(document).ready(function(){
	$(".slider-project1").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true
	});
});
$(document).ready(function(){
	$(".slider-project2").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true
	});
});
$(document).ready(function(){
	$(".slider-project3").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true
	});
});
$(document).ready(function(){
	$(".galery-slider5").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
});

$(document).ready(function(){
	$(".burger button").on("click", function () {
		$(".header__under-menu").fadeToggle()
		$(".burger").toggleClass("active")
	})
});
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
function tabInit1(){ 
	$('.tabs__content1').not('.tabs__content_active1').hide(); 
	$('.tabs-list__item1 button').click(function(){ 
		$('.tabs-list__item1').not($(this).parent()).removeClass('tabs-list__item_active1'); 
		$(this).parent().addClass('tabs-list__item_active1'); 
		$('.tabs__content1').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active1').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active1').fadeIn(); 	}); 
}; 
tabInit1();
function tabInit2(){ 
	$('.tabs__content2').not('.tabs__content_active2').hide(); 
	$('.tabs-list__item2 button').click(function(){ 
		$('.tabs-list__item2').not($(this).parent()).removeClass('tabs-list__item_active2'); 
		$(this).parent().addClass('tabs-list__item_active2'); 
		$('.tabs__content2').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active2').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active2').fadeIn(); 
	}); 
}; 
tabInit2();
function tabInit3(){ 
	$('.tabs__content3').not('.tabs__content_active3').hide(); 
	$('.tabs-list__item3 button').click(function(){ 
		$('.tabs-list__item3').not($(this).parent()).removeClass('tabs-list__item_active3'); 
		$(this).parent().addClass('tabs-list__item_active3'); 
		$('.tabs__content3').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active3').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active3').fadeIn(); 
	}); 
}; 
tabInit3();
function tabInit4(){ 
	$('tabs__content4').not('.tabs__content_active4').hide(); 
	$('.tabs-list__item4 button').click(function(){ 
		$('.tabs-list__item4').not($(this).parent()).removeClass('tabs-list__item_active4'); 
		$(this).parent().addClass('tabs-list__item_active4'); 
		$('.tabs__content4').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active4').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active4').fadeIn(); 
	}); 
}; 
tabInit4();

function tabInit5(){ 
	$('tabs__content5').not('.tabs__content_active5').hide(); 
	$('.tabs-list__item5 button').click(function(){ 
		$('.tabs-list__item5').not($(this).parent()).removeClass('tabs-list__item_active5'); 
		$(this).parent().addClass('tabs-list__item_active5'); 
		$('.tabs__content5').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active5').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active5').fadeIn(); 
	}); 
}; 
tabInit5();
function tabInit6(){ 
	$('tabs__content6').not('.tabs__content_active6').hide(); 
	$('.tabs-list__item6 button').click(function(){ 
		$('.tabs-list__item6').not($(this).parent()).removeClass('tabs-list__item_active6'); 
		$(this).parent().addClass('tabs-list__item_active6'); 
		$('.tabs__content6').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active6').hide(); 
		$('#'+$(this).attr('data-content')).addClass('tabs__content_active6').fadeIn(); 
	}); 
}; 
tabInit6();
$(document).ready(function() {
	$(".gal_fancy").fancybox({ 
		beforeShow: function() {
			$(document).ready(function(){
				$(".galery-slider4").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				});
			});
		},
		'scrolling': 'no', 
		"width": "1170", 
		"wrapCSS": "galery-mod",
		"padding": "0"
	});
});
$(document).ready(function() {
	$(".gal_fancy1").fancybox({ 
		beforeShow: function() {
			$(document).ready(function(){
				$(".galery-slider1").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				});
			});
		},
		'scrolling': 'no', 
		"width": "1170", 
		"wrapCSS": "galery-mod",
		"padding": "0"
	});
});
$(document).ready(function() {
	$(".gal_fancy2").fancybox({ 
		beforeShow: function() {
			$(document).ready(function(){
				$(".galery-slider3").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				});
			});
		},
		'scrolling': 'no', 
		"width": "1170", 
		"wrapCSS": "galery-mod",
		"padding": "0"
	});
});
$(document).ready(function() {
	$(".gal_fancy3").fancybox({ 
		beforeShow: function() {
			$(document).ready(function(){
				$(".galery-slider2").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				});
			});
		},
		'scrolling': 'no', 
		"width": "1170", 
		"wrapCSS": "galery-mod",
		"padding": "0"
	});
});
$(document).ready(function() {
	$(".call-back").fancybox({
		'scrolling': 'no',
		"padding": "0",
		"wrapCSS": "box",
		"width": "420"
	});
});
$(document).ready(function() {
	$(".fancy").fancybox({
		'scrolling': 'no',
		"padding": "0",
		"wrapCSS": "box",
		"width": "420"
	});
});
$(document).ready(function(){
	
	$(".send-btn").fancybox({
		"padding": "0",
		"href": "#thx-modal"
	})
});
$(document).ready(function(){
	
	$(".packet-btn").fancybox({
		"padding": "0",
		"href": "#packet"
	})
});

$(document).ready(function() {
	$(".packet-item").on("mouseenter", function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");		
	});
	$(".packet-item").on("mouseleave", function () {
		$(this).removeClass("active");
		$(".packet-item--main").addClass("active")		

	});
});
$(document).ready(function() {
	$(".question__title").on("click", function () {
		$(this).parent(".question").toggleClass("active");
		$(this).siblings(".question__body").slideToggle();
		$(this).parent(".question").siblings().children(".question__body").slideUp();
		
		$(this).parent(".question").siblings().removeClass("active");
		$(this).parent(".question").siblings().removeClass("next");
		$(this).parent(".question").next(".question").addClass("next");
	})
});
var myMap; 
ymaps.ready(
	function () { 
		var myMap = new ymaps.Map('map', { 
			center: [48.697607, 44.508306], 
			zoom: 17
		}); 
		var myPlacemark = new ymaps.Placemark( 
			[48.697607, 44.508306 ] , { 
			}, {
				iconImageHref: "../img/baloon.png",
				iconImageSize: [88, 115],
				iconImageOffset: [-3, -115]
			}); 
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier'])
		myMap.geoObjects.add(myPlacemark); 
		
	}
	); 
$(document).ready(function() {
	jQuery(function(){
		jQuery(".text-input").mask("+7 999 99 99 99");
	});

});
$(document).ready(function(){
	$(".header__menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});
});
