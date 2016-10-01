$(document).on('mousemove', function(e){
    $('.cursor').css({
       left:  e.pageX +5,
       top:   e.pageY +5
    });

    

});


$( ".main.one" ).hover(
  function() {
    $( ".cursor" ).html("It is what it is");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

$( ".main.two" ).hover(
  function() {
    $( ".cursor" ).html("It is what it says it is");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);


$( ".main.three" ).hover(
  function() {
    $( ".cursor" ).html("It is how it is made");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);


$( ".main.four" ).hover(
  function() {
    $( ".cursor" ).html("It is what it is not");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

$( ".main.five" ).hover(
  function() {
    $( ".cursor" ).html("It is what it refers to");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

$( ".main.six" ).hover(
  function() {
    $( ".cursor" ).html("It is what it thinks it would be");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

$( ".main.seven" ).hover(
  function() {
    $( ".cursor" ).html("It is what it hides");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

$( ".main.eight" ).hover(
  function() {
    $( ".cursor" ).html("It is more information");
  }, function() {
    $( ".cursor" ).html(" ");
  }
);

