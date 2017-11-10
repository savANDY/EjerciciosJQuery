$(document).ready(function(){

  $('.dos').click(function(){

    if ($(this).css("color") == "rgb(255, 0, 0)"){
      $(this).css("color", "black");
    } else{
      $(this).css("color", "red");
    }
  });

  $('#boton').click(function(){

    var myArray = [];

    for (i = 0; i < $(".dos").length; i++) {
      if ($(".dos").eq(i).css("color") == "rgb(255, 0, 0)"){
        num = $(".dos").eq(i).html();
        myArray.push(num);
      }
    }

    result = eval(myArray.join("+"));
    $('#resul').html(result);

  });
});
