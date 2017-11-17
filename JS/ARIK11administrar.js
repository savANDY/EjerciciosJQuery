peliculasNum = localStorage.getItem("numPeliculas");


$(document).ready(function(){

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
