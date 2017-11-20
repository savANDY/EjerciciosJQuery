$(document).ready(function(){

  var tabla = "<table>";
  tabla = tabla + "<tr><th class='id'>Registro</th><th class='nombre'>Nombre</th><th class='numerico'>Edad</th><th class='numerico'>Curso</th><th class='nombre'>Modulo</th></tr>"

$('#boton').click(function(){

  $.ajax({
    url: "ARIK13.php",
    dataType:"json",
    type:"post",
    success:function(datos){

      midato = JSON.parse(datos);

      $.each (midato, function(i, dato)){
        tabla += "<tr>";
        tabla += "<td class='id'>" + datos.personas[i].id + "</td>";
        tabla += "<td class='nombre'>" + datos.personas[i].nombre + "</td>";
        tabla += "<td class='numerico'>" + datos.personas[i].edad + "</td>";
        tabla += "<td class='numerico'>" + datos.personas[i].curso + "</td>";
        tabla += "<td class='nombre'>" + datos.personas[i].modulo + "</td>";
        tabla += "</tr>";
      };
      tabla1 = tabla + "</tabla>";

      $('#zona').append(tabla1).hide().fadeIn('slow');
    }
  });
});
});
