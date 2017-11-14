palabra="AZTERKETA";
numintentos= 0;
$(document).ready(function(){

  $('#berria').click(function(){
    $('#idatzih').val("");
    $('#juego').css("display","none");
    $('#hitzberria').css("display","block");
  });

  $('#enviarPalabra').click(function(){
    palabra = $('#idatzih').val().toUpperCase();
    $('#idatzih').val("");
  });

  $('#asmatu').click(function(){
    $("#cuadros").html("");
    $('#hitzberria').css("display","none");
    $('#juego').css("display","block");
    num = 0;
    for (i = 0; i < palabra.length; i++) {

      $("#cuadros").append( "<div class='cuadritos' id='letra" + num + "'></div>" );
      num++;
    }

  });

  $('#comprobarPalabra').click(function(){

    letraIntroducida = $('#letra').val().toUpperCase();

    if (letraIntroducida.trim()){
      for (i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) === letraIntroducida) {
          $('#letra' + i).text(palabra.charAt(i));
        }
      }
      numintentos++;
      $('#veces').val(numintentos);
    }

    palabraIntroducida = $('#palabraadiv').val().toUpperCase();

    if (palabraIntroducida.trim()){
      if (palabraIntroducida === palabra) {
        for (i = 0; i < palabra.length; i++) {
          $('#letra' + i).text(palabra.charAt(i));
        }
        numintentos++;
        $('#veces').val(numintentos);
      }
    }

    $('#letra').val("");
    $('#palabraadiv').val("");

  });


});
