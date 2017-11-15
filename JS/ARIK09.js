$(document).ready(function(){
  esconder();
  $('#guardar').click(function(){
    clave = $('#clave').val();
    valor = $('#valor').val();

    tipoStorage = $('#tipostorage').val();

    if (tipoStorage === "local"){
      localStorage.setItem(clave, valor);
    } else if (tipoStorage === "sesion"){
      sessionStorage.setItem(clave, valor);
    }
  });

  function esconder() {
    $('#sacart').css("display","none");
    $('#banaka').css("display","none");
    $('#jugadores').css("display","none");
    $('#jokalariLabel').css("display","none");
    $('#jokalaribat').css("display","none");
    $('#golak').css("display","none");
    $('#golakLabel').css("display","none");
  }

  $('#jugadorNuevo').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jokalariLabel').css("display","inline-block");
      $('#jokalaribat').css("display","inline-block");
      $('#golak').css("display","inline-block");
      $('#golakLabel').css("display","inline-block");

      $('#jokalaribat').val("");
      $('#golak').val("");

      opcion = "jugadorNuevo";
  });

  $('#masGoles').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jugadores').css("display","inline-block");
      $('#golak').css("display","inline-block");
      $('#golakLabel').css("display","inline-block");
      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        var o = new Option(clave, clave);
        /// jquerify the DOM object 'o' so we can use the html method
        $(o).html(clave);
        $("#jugadores").append(o);
      }
      opcion = "sumarGoles";
  });

  $('#quitarjugador').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jugadores').css("display","inline-block");
      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        var o = new Option(clave, clave);
        /// jquerify the DOM object 'o' so we can use the html method
        $(o).html(clave);
        $("#jugadores").append(o);
      }
      opcion = "borrarJugador";
  });

  $('#buscarJugador').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jokalariLabel').css("display","inline-block");
      $('#jokalaribat').css("display","inline-block");
      $('#golakLabel').css("display","inline-block");
      $('#golak').css("display","inline-block");


      $('#jokalaribat').val("");
      $('#golak').val("");

      opcion = "buscarJugador";
  });


  $('#sacarTodos').click(function(){
      esconder();
      $('#sacart').css("display","block");

      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        $('#sacart ul').append($('<li>').append(clave + " " + localStorage.getItem(clave)));
      }
  });

  $('#guardar').click(function(){

    switch (opcion) {
      case "jugadorNuevo":
        jugadorNuevo();
        break;
      case "sumarGoles":
        sumarGoles();
        break;
      case "borrarJugador":
        borrarJugador();
        break;
      case "buscarJugador":
        buscarJugador();
        break;
      case "sacarTodos":
        sacarTodos();
        break;
      default:

    }
  });

  function jugadorNuevo(){
    clave = $('#jokalaribat').val();
    valor = $('#golak').val();
    localStorage.setItem(clave, valor);
  }

  function sumarGoles(){

    clave = $('#jugadores').val();
    valor = localStorage.getItem(clave);
    nuevoValor = parseInt($('#golak').val()) + parseInt(valor);
    localStorage.setItem(clave, nuevoValor);

  }

  function borrarJugador(){
    clave = $('#jugadores').val();
    localStorage.removeItem(clave);
  }

  function buscarJugador(){
    clave = $('#jokalaribat').val();
    valor = localStorage.getItem(clave);
    $('#golak').val(valor);
  }

});
