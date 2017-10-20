$(document).ready(function() {
	$('.slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
});
$(document).ready(function() {
	$('.add-buy-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [    
		{      
			breakpoint: 991,      
			settings: {        
				slidesToShow: 3, 
				arrows: true,     
				slidesToScroll: 1
			}    
		},    
		{
			breakpoint: 767,      
			settings: {        
				slidesToShow: 2,        
				slidesToScroll: 1,    
				arrows: true    
			}    
		},    
		{
			breakpoint: 513,      
			settings: {        
				slidesToShow: 1,        
				slidesToScroll: 1,    
				arrows: true,
				infinite: true    
			}    
		}  
		]
	});
});
$(document).ready(function() {
	$(".burger button").click(function () {
		$(".menu-main").slideToggle();
		$(".burger").toggleClass("open-menu");
	})
});
$(document).ready(function(){
	$(".contacts-navigation").on("click","a", function (event) {
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
topMenu = $(".contacts-navigation"),
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
// $(document).ready(function() {
//   $(".reset-btn a").click( function() { 
//     $("#form-contacts").reset(); 
//  });
// });
$(document).ready(function() {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		arrows: true,
		responsive: [    
		{      
			breakpoint: 991,      
			settings: {        
				slidesToShow: 3, 
				centerMode: true,       
				slidesToScroll: 1,        
				infinite: true
			}    
		},    
		{
			breakpoint: 767,      
			settings: {        
				slidesToShow: 2,        
				slidesToScroll: 1
			}    
		}  
		]
	});

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
$(document).ready(function() {
	$('.filter-item label').click(function () {
		$(this).parent(".filter-item").addClass("filter-item--active");
		$(this).parent(".filter-item").siblings(".filter-item").removeClass("filter-item--active");
	})
});
$(document).ready(function() {
	$('.filter-item #prise').click(function () {
		$(this).parent(".filter-item").siblings(".prise-filter").addClass("filter-wraper--active");
		$(this).parent(".filter-item").siblings(".characteristic-filter").removeClass("filter-wraper--active");
	})
	$('.filter-item #characteristic').click(function () {
		$(this).parent(".filter-item").siblings(".characteristic-filter").addClass("filter-wraper--active");
		$(this).parent(".filter-item").siblings(".prise-filter").removeClass("filter-wraper--active");
	})
});
$(document).ready(function() {
	var   $range = $(".range")
	$(".range").ionRangeSlider({
		min:  624500,
		max: 690000,
		from:  624500,
		to: 690000,
		type: 'double',
		onChange: function (data) {
			var $num = ("from");
			console.log($num);
		},
	});
	$range.on("change", function () {
		var $this = $(this),
		value = $this.prop("value").split(";");
		$("#minCost").val(value[0])
		$("#maxCost").val(value[1])
	});
});
// $('.char-item input').click(function () {
// 	$(this).checked();
// })
// (function( $ ) {
//     $.fn.checked = function(value) {
//         if(value === true || value === false) {
//             // Set the value of the checkbox
//             $(this).each(function(){ this.checked = value; });
//         } 
//         else if(value === undefined || value === 'toggle') {
//             // Toggle the checkbox
//             $(this).each(function(){ this.checked = !this.checked; });
//         }

//         return this;
//     };
// })( jQuery );
$.fn.toggleCheck=function(){
       if(this.tagName==='INPUT'){
           $(this).prop('checked', !($(this).is(':checked')));
       }

   }
   // $('.char-item input').toggleCheck();
function tooltip(input){
	var $this = $(input),
	$labelParent = $('.char-item');

	$labelParent.each(function(){
		var $input = $(this).find($this);

	$this.bind('click', function(){
		var $inputCheck = $(this).parent().find('input');
			$(this).addClass("nofoc");
			$(".nofoc").siblings().removeClass("nofoc");
		if (!$(this).is(':checked') && $(this).siblings('input').is(':checked') == false) {
			$(this).parent().find('.danger').show();
			$inputCheck.trigger('click'); 
			// return false;
		}
		else if ($(this).is(':checked') && $(this).siblings('input').is(':checked') == true) {
			$(this).parent().find('.danger').hide();
		}
	})
})
}

tooltip('.char-item input');
$(".description").on("click", function () {
	$(this).siblings(".desc-window").slideToggle();
})
$(".close-btn button").on("click", function () {
	$(".desc-window").slideUp();
})
$(document).ready(function() {
	jQuery(function(){
		jQuery(".tell_inp").mask("+7 999 99 99 99");
	});
});
function addButton() {
	$(".fancybox-inner").html('<div class="dowload-img"><a href="#"><img scr="assets/img/download1600.png"></></div>')
}
$(document).ready(function() {
	$(".gal_fancy").fancybox({
		'scrolling': 'no',
		afterLoad: function(current, previous) { 
			addButton();
		} 
	});
});
$(".fiter-btns button").on("click", function () {
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
})