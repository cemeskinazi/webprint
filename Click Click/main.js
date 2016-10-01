$(window).click( function(event) {
$('body').append('<div style ="position: absolute; top:' + event.pageY + '; left:' + event.pageX +';">click!</>');
/*  $("div").css( {position:"absolute", top:event.pageY, left: event.pageX});
  $("div").css()*/
});



/* css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });*/




/*
$(window).mouseup(function() {
   $(".feed").html(" ");
  })
  .mousedown(function() {
    $( ".feed" ).html( "Clicking" );
    $(".interface").css("display", "none");
  });


$(window).resize(function (){
	
	$(".feed").html("Resizing");



});

$(window).mousedown(function(e) {
    if (e.which === 3) {
    $( ".feed" ).html( "Right Click" );
    $(".interface").css("display", "none");
    }
});



window.setInterval(function(){

	$(".feed").html(" ");
	$(".interface").css("display", "inherit")

}, 900);

$( window ).scroll(function() {
  $( ".feed" ).html( "Scrolling" );
  $(".interface").css("display", "none");
});


$(window).mousemove(function( event ) {
  
	$( ".feed" ).html( "Moving Cursor" );
	$(".interface").css("display", "none");


});


$(document).on('mousemove', function(e){
    $('.interface').css({
       left:  e.pageX,
       top:   e.pageY
    });
});


	var randNumber = Math.random() * 500;
	$(this).css("font-size", randNumber + "px");
	console.log(randNumber);
	$(this).css("float", "left");
	$(this).css("background-color", "red");
	var hello = colors[Math.floor(Math.random() * colors.length)];
	var second = colors[Math.floor(Math.random() * colors.length)];
	var type = border[Math.floor(Math.random() * border.length)];
	var number = Math.random() * 10;
	var third = Math.random() * 30;
	var fourth = Math.random() * 30;
	var top = Math.random() * 100;
	var left = Math.random() * 100;
	var radius = Math.random() *100;
	var zindex = Math.floor(Math.random() * 5);

	$(this).css("background-color", hello);
	$(this).css("border", number + "px" + " " + type);
	$(this).css("border-color", second);
	$(this).css("width", third + "px");
	$(this).css("height", fourth + "px");
	$(this).css("position", "fixed")
	$(this).css("top", top + "%");
	$(this).css("left", left +"%");
	$(this).css("z-index", zindex);
	$(this).css("border-radius", 0 + "%");*/