$(document).ready(function(){

  $('#accordion li div').click(function(){
    $(this).next().slideToggle(500);
  });

  $('#evclick').click(function(){
    alert("Has echo click");
    $('section').html("<h1>Este es el lugar de escribir</h1>");
  });

  $('#evmouseover').mouseover(function(){
    $('section').addClass('estilosection');
  });

  $('#evmouseover').mouseout(function(){
    $('section').removeClass('estilosection');
  });

  $('section').mouseover(function(){
      $('section').removeClass('estilosection');
    $('section').addClass('textoRojo');
  });

  $('section').mouseout(function(){
      $('section').removeClass('textoRojo');
  });

  $('#evhide').click(function(){
    $(this).hide();
  });

  $('#evshow').click(function(){
    $('#evhide').show();
  });

  $('#evfade').click(function(){
    $('section').toggle(500);
  });

$('#evcss').click(function(){
  $('section').css("background-color","blue");
});


});
