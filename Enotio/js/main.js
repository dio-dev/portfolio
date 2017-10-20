$(document).ready(function() {
	$(".wrap-input input").on("blur", function () {
		if ($(this).val()) {
			$(this).siblings("span").hide();
			var comment = commentInfo + commentClient + commentAdventages + commentDesign + commentRange1 + commentRange2 + commentRange3 + commentRange4;
			$(".comment").text(comment);	
			$(".comment").val(comment);	
		}
	})

});
var commentInfo;
var commentClient;
var commentAdventages;
var commentDesign;
var commentRange1;
var commentRange2;
var commentRange3;
var commentRange4;
var commentSubject;
var commentBrief;
var commentName;
var commentMail;

$(document).ready(function() {
	$(".bot-form form span").keyup(function() {
		var comment = commentSubject + commentBrief;
		$(".comment").text(comment);	
		$(".comment").val(comment);	
		$(".bot-form-name").val(commentName);
		$(".bot-form-email").val(commentMail);
	})
	.keyup();
});
$(document).ready(function() {
	$(".bot-form form span").keyup(function() {
		var value = $(".bot-form form .js-contact-subject").text(),
		title = "хочу обсудить: ";
		commentSubject = title + value + "<br>";
		return commentSubject;
	})
	.keyup();
});
$(document).ready(function() {
	$(".bot-form form span").keyup(function() {
		var value = $(".bot-form form .js-contact-brief").text(),
		title = "Мне нужен : ";
		commentBrief = title + value + "<br>";
		return commentBrief;
	})
	.keyup();
});
$(document).ready(function() {
	$(".bot-form form span").keyup(function() {
		var value = $(".bot-form form .js-contact-name").text(),
		title = "свой новый проект: ";
		commentName = value;
		return commentName;
	})
	.keyup();
});
$(document).ready(function() {
	$(".bot-form form span").keyup(function() {
		var value = $(".bot-form form .js-contact-email").text(),
		title = "свой новый проект: ";
		commentMail = value + ".";
		return commentMail;
	})
	.keyup();
});
$(document).ready(function() {
	$(".wrap-input input[name = info]").keyup(function() {
		var value = $(".wrap-input input[name = info]").val(),
		title = "Название вашего проекта: ";
		commentInfo = title + value + "<br>";
		return commentInfo;
	})
	.keyup();
});
$(document).ready(function() {
	$(".wrap-input input[name = client]").keyup(function() {
		var  value = $(".wrap-input input[name = client]").val(),
		title = "Кто ваш клиент? ";
		commentClient = title + value + "<br>";
		console.log(value);
		return commentClient;
	})
	.keyup();
});
$(document).ready(function() {
	$(".wrap-input input[name = adventages]").keyup(function() {
		var  value = $(".wrap-input input[name = adventages]").val(),
		title = "Конкурентные преимущества ";
		commentAdventages = title + value + "<br>";
		console.log(value);
		return commentAdventages;
	})
	.keyup();
});
$(document).ready(function() {
	$(".wrap-input input[name = design]").keyup(function() {
		var  value = $(".wrap-input input[name = design]").val(),
		title = "предпочтения в дизайне ";
		commentDesign = title + value + "<br>";
		console.log(value);
		return commentDesign;
	})
	.keyup();
});
$(document).ready(function() {
	$(".io-item input[name = range1]").keyup(function() {
		var  value = $(".io-item input[name = range1]").val(),
		title = "Самоопределение бренда: Строгий ";
		commentRange1 = title + value + "<br>";
		console.log(value);
		return commentRange1;
	})
	.keyup();
});
$(document).ready(function() {
	$(".io-item input[name = range2]").keyup(function() {
		var  value = $(".io-item input[name = range2]").val(),
		title = "Самоопределение бренда: Мужественный  ";
		commentRange2 = title + value + "<br>";
		console.log(value);
		return commentRange2;
	})
	.keyup();
});
$(document).ready(function() {
	$(".io-item input[name = range3]").keyup(function() {
		var  value = $(".io-item input[name = range3]").val(),
		title = "Самоопределение бренда: Классический ";
		commentRange3 = title + value + "<br>";
		console.log(value);
		return commentRange3;
	})
	.keyup();
});
$(document).ready(function() {
	$(".io-item input[name = range4]").keyup(function() {
		var  value = $(".io-item input[name = range4]").val(),
		title = "Самоопределение бренда: Простой ";
		commentRange4 = title + value + "<br>";
		console.log(value);
		return commentRange4;
	})
	.keyup();
});
$(document).ready(function() {
	var   $range = $(".range")
	$(".range").ionRangeSlider({
		min:  1,
		max: 5,
		grid: true,
		onChange: function (data) {
			var $num = ("from");
			console.log($num);
		},
	});
	$range.on("change", function () {
		var $this = $(this),
		value = $this.prop("value").split(";");
		$("#minCost").val(value[0])
	});
});
$(".burger button").on("click", function () {
	$(".burger button").toggleClass("active");
	$(".menu").slideToggle();
})
$(".portfolio-item").fancybox({
	"padding": "0"
});
$(".fancy-box").fancybox({
	"padding": "0"
})
$(".nice-block").niceScroll({
});
$(document).ready(function () { 
	if ($(window).outerWidth() > 768) { 
		$(".wrap-scroll").niceScroll({
		});	
	}
	else{

		$(".menu ul li a").on("click", function () {
			$(".burger button").removeClass("active");
			$(".menu").slideToggle();
		})
	}
});
$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f8f9', '#1c1e1e', '#ffe400', '#ffffff', '#1c1e1e', '#ffe400', '#1c1e1e'],
		anchors: ['begin', 'works1', 'stydio', 'cost', 'garanty', 'contact'],
		menu: '#myMenu',
		scrollBar: true,
		autoScrolling: true,
		// normalScrollElements: '.section',
		resize: false,
		// scrollOverflow: true,
		responsiveWidth: 991,
		afterResponsive: function(isResponsive){
			if(isResponsive){
				
			}
		},
		verticalCentered: true,
				// afterResponsive: function(isResponsive){
				// 	// $(".section").css({"height", "auto"})
				// },
				afterLoad: function( anchorLink, index){
					var loadedSection  = $(this);
					if(index == 1){
						$(".header").addClass("grey-body");
						$(".header").removeClass("black-body");
						$(".header").removeClass("yelow-body");
						$(".header").removeClass("white-body");
						$(".logo1").fadeIn();
						$(".logo1").siblings().hide();
					}
					if(index == 2){
						$(".header").addClass("black-body");
						$(".header").removeClass("grey-body");
						$(".logo2").fadeIn();
						$(".logo2").siblings().hide();
						$(".header").removeClass("yelow-body");
						$(".header").removeClass("white-body");
					}
					if(index == 3){
						$(".header").addClass("yelow-body");
						$(".header").removeClass("black-body");
						$(".header").removeClass("grey-body");
						$(".logo3").fadeIn();
						$(".logo3").siblings().hide();
						$(".header").removeClass("white-body");
					}
					if(index == 4){
						$(".header").addClass("white-body");
						$(".header").removeClass("black-body");
						$(".header").removeClass("grey-body");
						$(".header").removeClass("yelow-body");
						$(".logo1").fadeIn();
						$(".logo1").siblings().hide();
					}
					if(index == 5){
						$(".header").addClass("black-body");
						$(".header").removeClass("grey-body");
						$(".header").removeClass("yelow-body");
						$(".logo2").fadeIn();
						$(".logo2").siblings().hide();
						$(".header").removeClass("white-body");
					}
					if(index == 6){
						$(".header").addClass("yelow-body");
						$(".header").removeClass("black-body");
						$(".header").removeClass("grey-body");
						$(".logo3").fadeIn();
						$(".logo3").siblings().hide();
						$(".header").removeClass("white-body");
					}
				}
				// afterResponsive: function(isResponsive){

				// }
			});
});

$(document).ready(function() {
	jQuery(function(){
		jQuery(".tell_inp").mask("+7 999 99 99 99");
	});
})
$(".see-works button").click(function () {
	$.fn.fullpage.moveSectionDown();
})
$(document).ready(function() {
	$('.form').submit(function(e){
		e.preventDefault();
		var form = $(this),
		data = form.serialize();

		$.ajax({
			// url:'application2.php',
			url:'application1.php',
			data:data,
			type:"POST",
			success: function(response){
				if(response == "success"){
					// $(".thx").show();
					// $(".anvar").hide();
					$.ajax({
						url:'application2.php',
						data:data,
						type:"POST",
						success: function(response){
							$.fancybox({
									padding:0,
									href:"#thx"
								})
								window.location.hash = "#thx";
						}	
						})			
				}else if(response == "error"){
					// $(".anvar").show();
					$.fancybox({
						padding:0,
						href:"#error"
					})
					window.location.hash = "#error";
				}
			}
		})
	})
})

// 

// $("#form2 input[name = project]").on("input", function () {
// 	var a = $this.val();
// 	comment = comment + a;
// })
// $("#form2 input").on("blur", function () {
	
// })
$(".contact_subject").on("click", function () {
	$(".contact_subject").text("");
})
$(".contact_brief").on("click", function () {
	$(".contact_brief").text("");
})
$(".contact_name").on("click", function () {
	$(".contact_name").text("");
})
$(".contact_email").on("click", function () {
	$(".contact_email").text("   ");
})
function contentEditable(){function e(t){var n=jQuery.Event("keypress",{which:t});t.keyCode!==9?$(this).text("").addClass("js-populated").removeClass("js-error").trigger(n):$(this).one("keypress",e)}$("[contenteditable=true]").each(function(){var t=$(this).data("placeholder");$(this).one("keypress",e);$(this).keyup(function(){if($(this).text().length===0){$(this).text(t).removeClass("js-populated");$(this).one("keypress",e)}})});$("[contenteditable=true]").focus(function(){$(this).removeClass("js-error")})}