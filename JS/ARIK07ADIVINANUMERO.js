var numaleat = 0;
var nummax = 50;
var contador = 0;
$(document).ready(function(){
  $('#generarNum').click(function(){
    numaleat = parseInt(Math.round(Math.random() * nummax));
    alert("El numero aleatorio es: " + numaleat);

    $('#divjuego').css("display", "block");
  });

  $('#comprobar').click(function(){
    var numEscrito = parseInt($('#miNumero').val());

    if (numEscrito == numaleat) {
      $('#celda' + contador).css("background-color", "green");
      $('#texto').html("<p>Has acertado, el numero es: " + numaleat + "</p>");
      $('#divimagen').html('<img src="img/ok.png" alt="" id="imagen"/>');
      $('#divimagen').css("display", "block");
    } else {
      if (contador != 4) {
        $('#celda' + contador).css("background-color", "red");
        contador++;
        if (numEscrito < numaleat) {
          mayorOmenor = "mayor";
        } else {
          mayorOmenor = "menor";
        }
        $('#texto').html("<p>El numero debe ser " + mayorOmenor + "</p>");

      } else {
        $('#celda4').css("background-color", "red");
        $('#divimagen').css("display", "block");
        $('#miNumero').css("display", "none");
        $('#texto').html("<p>Has llegado al limite. GAME OVER</p>");
      }
      $('#miNumero').val("");
    }
  });


});
