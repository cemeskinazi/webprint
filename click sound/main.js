$(function(){

$(".single").trigger('load');
$(".double").trigger('load');


	$(window).click(function(){

		$(".single").trigger("play");


	});

	$(window).dblclick(function(){

		$(".double").trigger("play");



	});






});