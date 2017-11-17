sala = "ninguna";
numeroSalas = localStorage.getItem('numPeliculas');

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
    });
  }

  function esconder() {
    $('#sala1').hide();
    $('#sala2').hide();
    $('#sala3').hide();
    $('#sala4').hide();
  }

  // $('.imagen:eq(0)').click(function(){
  //
  //   pelicula = localStorage.getItem('peli1');
  //   objeto = JSON.parse(pelicula);
  //   var titulo = objeto.titulo;
  //   var butacas = objeto.butacas;
  //   var imagen = objeto.imagen;
  //   var descripcion = objeto.descripcion;
  //
  //   esconder();
  //       $('#sala1').html("");
  //       $('#sala1').show();
  //       $('#compraentradas').show();
  //       $('#sala1').append('<h3>' + titulo + '</h3><p>' + descripcion + '</p>');
  // });
  //
  // $('.imagen:eq(1)').click(function(){
  //
  //   pelicula = localStorage.getItem('peli2');
  //   objeto = JSON.parse(pelicula);
  //   var titulo = objeto.titulo;
  //   var butacas = objeto.butacas;
  //   var imagen = objeto.imagen;
  //   var descripcion = objeto.descripcion;
  //
  //   esconder();
  //   $('#sala2').html("");
  //   $('#sala2').show();
  //   $('#compraentradas').show();
  //   $('#sala2').append('<h3>' + titulo + '</h3><p>' + descripcion + '</p>');
  // });
  //
  // $('.imagen:eq(2)').click(function(){
  //   pelicula = localStorage.getItem('peli3');
  //   objeto = JSON.parse(pelicula);
  //   var titulo = objeto.titulo;
  //   var butacas = objeto.butacas;
  //   var imagen = objeto.imagen;
  //   var descripcion = objeto.descripcion;
  //
  //   esconder();
  //   $('#sala3').html("");
  //   $('#sala3').show();
  //   $('#compraentradas').show();
  //   $('#sala3').append('<h3>' + titulo + '</h3><p>' + descripcion + '</p>');
  // });
  //
  // $('.imagen:eq(3)').click(function(){
  //   pelicula = localStorage.getItem('peli4');
  //   objeto = JSON.parse(pelicula);
  //   var titulo = objeto.titulo;
  //   var butacas = objeto.butacas;
  //   var imagen = objeto.imagen;
  //   var descripcion = objeto.descripcion;
  //
  //   esconder();
  //   $('#sala4').html("");
  //   $('#sala4').show();
  //   $('#compraentradas').show();
  //   $('#sala4').append('<h3>' + titulo + '</h3><p>' + descripcion + '</p>');
  // });

});
