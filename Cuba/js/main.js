var wow = new WOW(
{
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
  },
    scrollContainer: null // optional scroll container selector, otherwise use window
}
);
wow.init();
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

$( function() {
	var dateFormat = "mm/dd/yy",
	from = $( ".from" )
	.datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1
	})
	.on( "change", function() {
		to.datepicker( "option", "minDate", getDate( this ) );
	}),
	to = $( ".to" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1
	})
	.on( "change", function() {
		from.datepicker( "option", "maxDate", getDate( this ) );
	});

	function getDate( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}

		return date;
	}
} );

$.fn.parallax = function ( resistance, mouse ){
	$el = $( this );
	TweenLite.to( $el, 0.2, {
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});
};

$(document).mousemove(function(e){
	$('.parallax-layer__left').parallax(-80,e);
	$('.parallax-layer__right').parallax(50,e);
	$('.parallax-layer__light').parallax(120,e);
});
$(document).mousemove(function(e){
	$('.blog-paralax__item--1').parallax(-80,e);
	$('.blog-paralax__item--2').parallax(50,e);
	$('.blog-paralax__item--3').parallax(10,e);
	$('.blog-paralax__item--4').parallax(40,e);
	$('.blog-paralax__item--5').parallax(40,e);
	$('.blog-paralax__item--6').parallax(30,e);
});
jQuery( document ).ready(function() {
	jQuery('.up-btn a').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});
});
$(document).ready(function(){
	$(".burger button").on("click", function () {
		$(".burger button").toggleClass("active");
		$(".menu-right ul").slideToggle();
	})
});
$(document).ready(function(){
	$('.blog-slider').slick({
		prevArrow: $('.blog-slider__button-prev'),
		nextArrow: $('.blog-slider__button-next'),
		slidesToShow: 1
	})
});
$(document).ready(function(){
	$('.tovar-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: true
	})
});
$(document).ready(function(){
	$('.tovar-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: true
	})
});

$(document).ready(function(){
	$('.question-item .question').on("click", function () {
		$(this).siblings().slideToggle();
		$(this).parent().siblings(".question-item").children(".ansver").slideUp();
		$(this).toggleClass("active");
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
$(document).ready(function(){
	$('#date').dateRangePicker({
		autoClose: true,
		singleMonth: true,
		showShortcuts: false,
		showTopbar: false
	});
});
$(document).ready(function(){
	$(".reviews-body").niceScroll();
});
$(document).ready(function(){
	$(".about-tovar").niceScroll();
});
$(document).ready(function(){
	$(".galery-link").fancybox({
		padding: 0
	});
});
$(document).ready(function(){
	$(".excursion-date table tr td button.default").on( "click", function(){
		$(this).toggleClass("default");
		$(this).toggleClass("active");
		if ($(this).hasClass("default")) {
			$(this).text("Выбрать");
		}
		else{

			if ($(this).hasClass("active")) {
				$(this).text("Выбрано");
			}
		}
	});
	$(".excursion-date table tr td button.active").on( "click", function(){
		$(this).remtoggleClass("active");
		$(this).toggleClass("default");
		if ($(this).hasClass("default")) {
			$(this).text("Выбрать");
		}
		else{
			if ($(this).hasClass("active")) {
				$(this).text("Выбрано");
			}
		}
	});
});
$(document).ready(function(){
	$(".remove-btn button").on( "click", function(){
		$(this).hide();
		$(this).parent().siblings(".boocking__img").children('img').hide();
		$(this).parents('.boocking__item').removeClass('boocking__item--check');
		$(this).parent().siblings(".boocking__info").children('b').text('');
		$(this).parent().siblings(".boocking__info").children('p').text('');
		var a,b,c,d;
		b = $(".boocking__item--house .prise span").text();
		c = $(".boocking__item--car .prise span").text();
		d = $(".boocking__item--tour .prise span").text();
		a = b + c + d;
		$('.total-cost span').text(a);
	});
});

$(document).ready(function(){
	var a,b,c,d;
	b = $(".boocking__item--house .prise span").text();
	c = $(".boocking__item--car .prise span").text();
	d = $(".boocking__item--tour .prise span").text();
	a = b + c + d;
	$('.total-cost span').text(a);
});

$(document).ready(function(){
	$(".tour-item a").fancybox({
		padding: 0,
		width: 900,
		height: 2000,
		wrapCSS    : 'tour-fancy',
		'scrolling'   : 'no'
	})
});
$(document).ready(function(){
	$(".modal-link").fancybox({
		padding: 0,
		width: 900,
		height: 2000,
		'scrolling'   : 'no',
		wrapCSS    : 'reg-fancy'
	})
});
$(document).ready(function(){
	$(".modal-link").fancybox({
		padding: 0,
		'scrolling'   : 'no',
		wrapCSS    : 'out-fancy'
	})
});
$(document).ready(function(){
	$(".modal-link1").fancybox({
		padding: 0,
		width: 720,
		'scrolling'   : 'no'
	})
});
$(document).ready(function(){
	$(".nice-wrap").niceScroll();
});
$(document).ready(function(){
	$(".nice-search").niceScroll();
});
$(document).ready(function(){
	$(".tour-constructor a").on("click", function () {
		$(".cart-wrap").slideToggle();
	})
});


$(document).ready(function(){
	$('#two-input').dateRangePicker({
		autoClose: true,
		singleMonth: true,
		showShortcuts: false,
		showTopbar: false,
		separator : ' to ',
		getValue: function()
		{
			if ($('#date1').val() && $('#date2').val() )
				return $('#date1').val() + ' to ' + $('#date2').val();
			else
				return '';
		},
		setValue: function(s,s1,s2)
		{
			$('#date1').val(s1);
			$('#date2').val(s2);
		}	
	});
});
$(document).ready(function(){
	$('.guest-btn').on("click", function () {
		event.preventDefault();
		$(".guests").slideToggle();
	})
});
$(".dec").on("click", function() {
	event.preventDefault();
	var i = $(this).siblings(".quanity").val();
	i--;
	if (i<0) {
		i=0
	}
	$(this).siblings(".quanity").val(i)
})
$(".inc").on("click", function() {
	event.preventDefault();
	var i = $(this).siblings(".quanity").val();
	i++;
	$(this).siblings(".quanity").val(i)
})

$(document).ready(function() {
	var   $range = $(".range")
	$(".range").ionRangeSlider({
		min:  5,
		max: 400,
		from:  5,
		to: 200,
		type: 'double'
	});
});