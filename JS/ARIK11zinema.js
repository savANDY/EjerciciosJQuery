sala = "ninguna";
numeroSalas = localStorage.getItem('numPeliculas');
var TotalButacas =[100,150,75,50];
var ButacasLibres=[100,150,75,50];

//{"titulo":"UN MONSTRUO VIENE A VERME","butacas":"150","imagen":"IMG/unmonstruo.jpg","descripcion":"A Monster Calls es una película hispano-estadounidense de fantasía dirigida por Juan Antonio Bayona, basada en la novela de 2011 del mismo nombre de Patrick Ness, quien también escribió el guion."}
//{"titulo":"MECHANIC:RESURRECTION","butacas":"100","imagen":"img/mechanic.jpg","descripcion":"Mechanic: Resurrection es una película franco-americana de suspense y acción dirigida por Dennis Gansel. La película está protagonizada por Jason Statham, Jessica Alba, Tommy Lee Jones y Michelle Yeoh y se estrenó el 26 de agosto de 2016."}
//{"titulo":"EL HOGAR DE MISS PEREGRINE PARA NIÑOS PECULIARES","butacas":"75","imagen":"IMG/missperegrine.jpg","descripcion":"Miss Peregrine's Home for Peculiar Children es una película estadounidense de aventuras y fantasía dirigida por Tim Burton y escrita por Jane Goldman, basada en la novela homónima de Ransom Riggs."}
//{"titulo":"OZZY","butacas":"50","imagen":"IMG/ozzy.jpg","descripcion":"Es una película de animación computerizada del 2016, de género comedia y producción Canadiense-española. La película fue coproducida por las españolas Arcadia Motion Pictures, Capitán Araña, y Pachacama, y la canadiense Tangent Animation. La preproducción se realizó en España y la animación tuvo lugar en Canadá."}

$(document).ready(function(){
  $('#cartelera').html("");
  for (i = 1; i <= numeroSalas; i++) {
    pelicula = localStorage.getItem('peli' + i);
    objeto = JSON.parse(pelicula);
    var imagen = objeto.imagen;
    $('#cartelera').append('<div class="imagen"><p>SALA ' + i + '</p><a  href="#" ><img class="pelis accion" src="' + imagen + '" alt=""/></a> </div>');
    $('#elementos').append('<div id="sala' + i + '" class="texto">');
  }

  for (i = 1; i <= numeroSalas; i++) {

    eq = i - 1;
    var img = '.imagen:eq(' + eq + ')';
    $(img).on('click', {id: i}, function (e) {

      peli = "peli" + e.data.id;
      pelicula = localStorage.getItem('peli' + e.data.id);
      objeto = JSON.parse(pelicula);
      var titulo = objeto.titulo;
      var butacas = objeto.butacas;
      var imagen = objeto.imagen;
      var descripcion = objeto.descripcion;

      esconder();
      $('#sala' + e.data.id).html("");
      $('#sala' + e.data.id).show();
      $('#compraentradas').show();
      $('#sala' + e.data.id).append('<h3>' + titulo + '</h3><p>' + descripcion + '</p>');
      TotalButacas[e.data.id] = butacas;
      ButacasLibres[e.data.id] = butacas;
      mostrarButacas(e.data.id);
    });
  }

  function mostrarButacas(numeroSala) {
    $("#salacompra").text("");
    $("#salacompra").append("Total butacas: " + TotalButacas[numeroSala] + " Butacas libres: " + ButacasLibres[numeroSala]);
  }

  function esconder() {
    for (i = 1; i <= numeroSalas; i++) {
      var sala = '#sala' + i;
        $(sala).hide();
    }

  }

});
