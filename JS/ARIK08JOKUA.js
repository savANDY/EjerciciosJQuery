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
    numintentos= 0;
    $('#veces').val(numintentos);
    $("#cuadros").html("");
    $('#hitzberria').css("display","none");
    $('#juego').css("display","block");

    for (i = 0; i < palabra.length; i++) {
      $("#cuadros").append( "<div class='cuadritos' id='letra" + i + "'></div>" );
    }

    for (i = 0; i < palabra.length; i++) {
      imageUrl = "IMAGES/animal" + i + ".png";
      if (!($('#letra' + i).css('background-image') != 'none')){
        $('#letra' + i).css('background-image', 'url(' + imageUrl + ')');
      }

      for (j = 0; j < palabra.length; j++) {
        if (palabra.charAt(j) === palabra.charAt(i)){
          $('#letra' + j).css('background-image', 'url(' + imageUrl + ')');
        }
      }

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
