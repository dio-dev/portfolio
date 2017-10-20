$(document).ready(function() {
	$('.tovar-gallery__slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.tovar-gallery__slider-nav'
	});
	$('.tovar-gallery__slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.tovar-gallery__slider-for',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				vertical: true
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
	var costDefault= $(".order__quanity-cost b").text();
	costDefault=costDefault.replace(/\s*/g,'');
	costDefault=parseInt(costDefault, 10);
	$(".order__quanity-calc button:first-child").click(function () {
		event.preventDefault();
		var i =	$(".order__quanity-calc input").val();
		i--;
		if (i > 0) {
			$(".order__quanity-calc input").val(i);
			var cost = $(".order__quanity-cost b").text();
			cost=cost.replace(/\s*/g,'');
			console.log(cost);
			var intValue = parseInt(cost, 10);
			console.log(intValue);
			var quan = $(".order__quanity-calc input").val();
			console.log(quan);
			totalCost = intValue-costDefault;
			console.log(totalCost);
			$(".order__quanity-cost b").text(totalCost);
			$(".order__delivery-cost-total b").text(totalCost);
		}
	})
	$(".order__quanity-calc input").on("input", function () {
		var i =	$(".order__quanity-calc input").val();
		totalCost = i*costDefault;
		console.log(totalCost);
		$(".order__quanity-cost b").text(totalCost);
		$(".order__delivery-cost-total b").text(totalCost);
	})
	// $(".order__quanity-calc input").oninput(function () {
	// 	var i =	$(".order__quanity-calc input").val();
	// 	totalCost = i*costDefault;
	// 	console.log(totalCost);
	// 	$(".order__quanity-cost b").text(totalCost);
	// })
	$(".order__quanity-calc button:last-child").click(function () {
		event.preventDefault();
		var i =	$(".order__quanity-calc input").val();
		i++;
		$(".order__quanity-calc input").val(i);
		var cost = $(".order__quanity-cost b").text();
		cost=cost.replace(/\s*/g,'');
		console.log(cost);
		var intValue = parseInt(cost, 10);
		console.log(intValue);
		var quan = $(".order__quanity-calc input").val();
		console.log(quan);
		totalCost = intValue+costDefault;
		console.log(totalCost);
		$(".order__quanity-cost b").text(totalCost);
		$(".order__delivery-cost-total b").text(totalCost);
	})
});
$(document).ready(function() {
	$(".order__delivery-variant label").click(function () {
		$(this).parent().siblings().children(".min").slideUp();
		$(this).parent().siblings().children("br").hide();
		$(".order__contacts-item--adress").hide();
	});
	$("#delivery-pickup").click(function () {
		$(".min").slideDown();
		$(this).parent().children("br").show();
	});
	$("#delivery-kyr").click(function () {
		$(".order__contacts-item--adress").show();
	});
});
(function( $ ){

$(function() {

  $('.order form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.order__delivery-buy button');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.order__contacts-item input').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.order__contacts-item input').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.order__contacts-item p span').show();
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.order__contacts-item input').removeAttr('style');
      },500);
    }

    btn.addClass('disabled')
    // Проверка в режиме реального времени
    $('.order__contacts-item input').on("input", function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = $(".empty_field").length;
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
     });
    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );

(function( $ ){

$(function() {

 $('.modal--call form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('button');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.order__contacts-item input').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.order__contacts-item input').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.order__contacts-item span').show();
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.order__contacts-item input').removeAttr('style');
      },500);
    }

    btn.addClass('disabled');
    // Проверка в режиме реального времени
    $('.order__contacts-item input').on("input", function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = $(".empty_field").length;
      console.log(sizeEmpty);
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
     });
    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );
$(".mod").fancybox({
	"padding": "0"
});
