$(document).ready(function(){

  $('#formutabla').submit(function (evento) {

    var json = {"filas":$('#filas').val(),"columnas":$('#columnas').val(),"titulo":$('#titulo').val()}

    alert(json);
    var cadena = JSON.stringify(json);
    alert(cadena);

    localStorage.setItem('tabla',cadena);

  });

});
