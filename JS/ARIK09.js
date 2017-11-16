$(document).ready(function(){
  esconder();

  // Funcion para esconder todos los campos de la derecha
  function esconder() {
    $('#sacart').css("display","none");
    $('#banaka').css("display","none");
    $('#jugadores').css("display","none");
    $('#jokalariLabel').css("display","none");
    $('#jokalaribat').css("display","none");
    $('#golak').css("display","none");
    $('#golakLabel').css("display","none");
    $('#golak').prop('disabled', false);
  }

  // Solo admitir dígitos en el campo de goles
  $('#golak').keypress(function (e) {
    var keychar;
    var teclanum;
    teclanum = e.which;
    keychar = String.fromCharCode(teclanum);

    if (keychar < "0" || keychar > "9") {
      return false;
    } else {
      return true;
    }
  });

  // Que no se puedan introducir más de 4 digitos
  $('#golak').attr({ maxLength : 4 });

  // Añadir jugador nuevo
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

  // Sumar goles a un jugador
  $('#masGoles').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jugadores').css("display","inline-block");
      $('#golak').css("display","inline-block");
      $('#golakLabel').css("display","inline-block");

      $("#jugadores").html("");
      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        var o = new Option(clave, clave);
        /// jquerify the DOM object 'o' so we can use the html method
        $(o).html(clave);
        $("#jugadores").append(o);
      }
      opcion = "sumarGoles";
  });

  // Borrar un jugador
  $('#quitarjugador').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jugadores').css("display","inline-block");
      $("#jugadores").html("");
      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        var o = new Option(clave, clave);
        /// jquerify the DOM object 'o' so we can use the html method
        $(o).html(clave);
        $("#jugadores").append(o);
      }
      opcion = "borrarJugador";
  });

  // Buscar cuantos goles tiene un jugador
  $('#buscarJugador').click(function(){
      esconder();
      $('#banaka').css("display","block");
      $('#jokalariLabel').css("display","inline-block");
      $('#jokalaribat').css("display","inline-block");
      $('#golakLabel').css("display","inline-block");
      $('#golak').css("display","inline-block");

      $('#jokalaribat').val("");
      $('#golak').val("");
      $('#golak').prop('disabled', true);

      opcion = "buscarJugador";
  });

  // Mostrar todos los jugadores y sus goles
  $('#sacarTodos').click(function(){
      esconder();
      $('#sacart').html("");
      $('#sacart').css("display","block");

      $('#sacart').append($('<table id="todos">').append($('<tr>').append($("<th>").text("Jugador"))));
      $('#sacart table tr').append($("<th>").append("Goles"));

      for (i=0; i<=localStorage.length-1; i++)  {
        clave = localStorage.key(i);
        $('#sacart table').append($("<tr id='jug'>").append($("<td>" + clave + "</td><td>" + localStorage.getItem(clave) + "</td>")));
      }
  });

  // Al hacer click en 'aceptar' se le pasa la variable
  // de la opcion y llama a la funcion
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


  // Funciones para cada opción
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
     $('#golak').val("");
  }

  function borrarJugador(){
    clave = $('#jugadores').val();
    localStorage.removeItem(clave);
  }

  function buscarJugador(){
    clave = $('#jokalaribat').val();
    valor = localStorage.getItem(clave);
    if (valor){
      $('#golak').val(valor);
    } else {
      alert("No existe ese jugador");
      $('#jokalaribat').val("");
      $('#golak').val("");
    }
  }

});
