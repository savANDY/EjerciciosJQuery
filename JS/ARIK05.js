$(document).ready(function(){


  $('img').on("mousemove", function(e) {
    var $div = $('<div />').appendTo('body');
    $div.attr('id', 'coord');
            var offset = $(this).offset();
            var X = (e.pageX + 20);
            var Y = (e.pageY + 20);

            $('#coord').css( 'display', 'block' );
            $('#coord').html('<img id="imagen" src="' + $(this).attr("src") + '" width="100%">');

            $('#coord').css( 'position', 'absolute' );
            $('#coord').css( 'border', 'solid 5px grey' );
            $('#coord').css( 'width', '300px' );
            $('#coord').css( 'top', Y );
            $('#coord').css( 'left', X );
        });

  $('img').on("mouseout", function(e) {
    $('#coord').css( 'display', 'none' );
    });


//   $('img').mouseover(function(){
//
//     $(this).css("box-width") == "500px";
//
// });
//   $('#borrar').click(function(){
//
//     $('tr').each(function(){
//       if ($(this).css("background-color") == "rgb(255, 0, 0)"){
//         $(this).remove();
//       }
//
//
//   });
//     });
      });
