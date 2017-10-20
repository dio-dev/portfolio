$(document).ready(function(){
	$(".header__burger button.noactive").on("click", function () {
		$(".header__burger button.noactive ").hide("active");
		$(".header__burger button.active").show("noactive");
		// $(".header__burger button .btn").fadeOut();
		// $(".header__burger button .close").fadeIn();
		$(".header__menu").slideToggle();
	})
});
$(document).ready(function(){
	$(".header__burger button.active").on("click", function () {
		$(".header__burger button.active ").hide("active");
		$(".header__burger button.noactive").show("noactive");
		// $(".header__burger button .btn").fadeIn();
		// $(".header__burger button .close").fadeOut();
		$(".header__menu").slideToggle();
	})
});

$(document).ready(function(){
	$(".sim-item--1 button").fancybox({
		"padding": "0",
		"href": "#modal"
	})
});

$(document).ready(function(){
	$(".sim-item--2 button").fancybox({
		"padding": "0",
		"href": "#modal1"
	})
});

$(document).ready(function(){
	$(".sim-item--3 button").fancybox({
		"padding": "0",
		"href": "#modal2"
	})
});
