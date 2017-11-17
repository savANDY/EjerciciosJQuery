peliculasNum = localStorage.getItem("numPeliculas");


$(document).ready(function(){


    $('#insertarLocalStorage').click(function(){

      var json1 = {"titulo":"MECHANIC:RESURRECTION","butacas":"100","imagen":"img/mechanic.jpg","descripcion":"Mechanic: Resurrection es una película franco-americana de suspense y acción dirigida por Dennis Gansel. La película está protagonizada por Jason Statham, Jessica Alba, Tommy Lee Jones y Michelle Yeoh y se estrenó el 26 de agosto de 2016."}
      var json2 = {"titulo":"UN MONSTRUO VIENE A VERME","butacas":"150","imagen":"IMG/unmonstruo.jpg","descripcion":"A Monster Calls es una película hispano-estadounidense de fantasía dirigida por Juan Antonio Bayona, basada en la novela de 2011 del mismo nombre de Patrick Ness, quien también escribió el guion."}
      var json3 = {"titulo":"EL HOGAR DE MISS PEREGRINE PARA NIÑOS PECULIARES","butacas":"75","imagen":"IMG/missperegrine.jpg","descripcion":"Miss Peregrine's Home for Peculiar Children es una película estadounidense de aventuras y fantasía dirigida por Tim Burton y escrita por Jane Goldman, basada en la novela homónima de Ransom Riggs."}
      var json4 = {"titulo":"OZZY","butacas":"50","imagen":"IMG/ozzy.jpg","descripcion":"Es una película de animación computerizada del 2016, de género comedia y producción Canadiense-española. La película fue coproducida por las españolas Arcadia Motion Pictures, Capitán Araña, y Pachacama, y la canadiense Tangent Animation. La preproducción se realizó en España y la animación tuvo lugar en Canadá."}


      var cadena1 = JSON.stringify(json1);
      var cadena2 = JSON.stringify(json2);
      var cadena3 = JSON.stringify(json3);
      var cadena4 = JSON.stringify(json4);

      localStorage.setItem('peli1',cadena1);
      localStorage.setItem('peli2',cadena2);
      localStorage.setItem('peli3',cadena3);
      localStorage.setItem('peli4',cadena4);

    });

      $('#aniadirPelicula').click(function(){

        var json = {"titulo":$('#tituloPelicula').val(),"butacas":$('#totalButacas').val(),"imagen":$('#rutaImagen').val(),"descripcion":$('#descripcion').val()}

        alert(json);
        var cadena = JSON.stringify(json);
        alert(cadena);

        peliculasNum++
        localStorage.setItem("peli" + peliculasNum,cadena);
        localStorage.setItem("numPeliculas",peliculasNum);

      });

});
