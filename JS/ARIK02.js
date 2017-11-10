$(document).ready(function(){

  $('#eliminarL').click(function(){
    $('ol').empty();
});

$('#recupL').click(function(){
  $('ol').html("<li>ELEMENTO 1</li><li>ELEMENTO 2</li><li>ELEMENTO 3</li>" +
   "<li>ELEMENTO 4</li>");
});

$('#ponerEF').click(function(){

  elemento = $('ol li:last-child').html();
  separador = " "; // un espacio en blanco
  ultimoElemento = elemento.split(separador);
  nuevoElemento = parseInt(ultimoElemento[1]) + 1;
  $('ol').append('<li>ELEMENTO ' + nuevoElemento + '</li>');

});

$('#ponerEI').click(function(){

  elemento = $('ol li:first-child').html();
  separador = " "; // un espacio en blanco
  primerElemento = elemento.split(separador);
  nuevoElemento = parseInt(primerElemento[1]) - 1;
  $('ol').prepend('<li>ELEMENTO ' + nuevoElemento + '</li>');

});

$('#quitarEF').click(function(){
  $('ol li:last-child').remove();
});

$('#quitarEI').click(function(){
  $('ol li:first-child').remove();
});

});
