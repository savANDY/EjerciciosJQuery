$(document).ready(function(){

  cadena = localStorage.getItem('tabla');
  objeto = JSON.parse(cadena);
  var filas = objeto.filas;
  var columnas = objeto.columnas;
  var titulo = objeto.titulo;

  createTable();

  function createTable() {

    var tituloTabla = $('<h1>' + titulo + '</h1>');
    $('#formutabla').append(tituloTabla);

    var table = $('<table title="' + titulo + '"></table>');
          for (var i = 0; i < filas; i++) {
                  row = $('<tr></tr>');
                  for (var j = 0; j < columnas; j++) {
                      var rowData = $('<td></td>').addClass('bar').text(j+1);
                      row.append(rowData);
                  }
                  table.append(row);
              }

          if ($('table').length) {
               $("#formutabla tr:first").after(row);
          }
          else {
              $('#formutabla').append(table);
          }
}

  // ESTE CODIGO DE ABAJO FUNCIONA CORRECTAMENTE, PERO NO ES DEL TODO JQUERY;

  //   var tableElem, rowElem, colElem;
  //   tableElem = document.createElement('table');
  //   for (var i = 0; i < filas; i++) {
  //     rowElem = document.createElement('tr');
  //
  //     for (var j = 0; j < columnas; j++) {
  //       colElem = document.createElement('td');
  //       colElem.appendChild(document.createTextNode(j + 1)); //to print cell number
  //       rowElem.appendChild(colElem);
  //     }
  //     tableElem.appendChild(rowElem);
  //   }
  //   $('#formutabla').append(tableElem);
  // }

});
