$(".slider").slick({
	dots: true,
	arrows: false,
	autoplay: true
})
$(".slider-img").slick({
	dots: false
})
$(document).ready(function() {
	$('.country-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.nav-slider'
	});
	$('.nav-slider').slick({
		slidesToShow: 5,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.country-slider',
		focusOnSelect: true,
		responsive: [    
		{      
			breakpoint: 991,      
			settings: {        
				slidesToShow: 4, 
				centerMode: true,       
				slidesToScroll: 1,        
				infinite: true,
				variableWidth: true,
				centerPadding: '10px',
			}    
		},    
		{
			breakpoint: 767,      
			settings: {        
				slidesToShow: 3,        
				slidesToScroll: 1,     
				centerMode: true,       
				slidesToScroll: 1,        
				infinite: true,
			}    
		}  
		]
	});

});

$(document).ready(function(){
	$(".header__burger button").on("click", function () {
		$(".header__burger button").toggleClass("active");
		$(".header__menu").slideToggle();
	})
});
$(".fancy-img").fancybox()
$(".slider__button a").fancybox({
	wrapCSS: "box"
})
$(window).on('resize', function () {
    if ($(window).width()>991) {
    	$(".header__menu").show();
    }
    else{
    	if ($(window).width()<991) {
    		$(".header__menu").hide();

    	}
    }
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
var myMap; 
ymaps.ready(
	function () { 
		var myMap = new ymaps.Map('map1', { 
			center: [50.460259, 30.524403], 
			zoom: 17,
			controls: []
		}); 

		var myPlacemark0 = new ymaps.Placemark( 
			[50.460259, 30.524403] , { 
			}, {
				iconLayout: 'default#image',
				iconImageHref: "./img/baloon.png",
				iconImageSize: [34, 48],
				iconImageOffset: [-16, -48] 
			}); 

		myMap.geoObjects.add(myPlacemark0);
		myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom'])
		myMap.controls.add('zoomControl');
		
	}
	); 
var myMap; 
ymaps.ready(
	function () { 
		var myMap = new ymaps.Map('map2', { 
			center: [49.438932, 32.068059], 
			zoom: 17,
			controls: []
		}); 
		var myPlacemark = new ymaps.Placemark( 
			[49.438932, 32.068059
			] , { 
			}, {
				iconLayout: 'default#image',
				iconImageHref: "./img/baloon1.png",
				iconImageSize: [34, 48],
				iconImageOffset: [-16, -48] 
			}); 
		myMap.behaviors.disable([ 'rightMouseButtonMagnifier', 'scrollZoom'])
		myMap.geoObjects.add(myPlacemark); 
		myMap.controls.add('zoomControl');
		
	}
	); 