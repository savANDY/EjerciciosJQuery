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

    $('.dos').each(function(){
      if ($(this).css("color") == "rgb(255, 0, 0)"){
        num = $(this).html();
        myArray.push(num);
      }


    result = eval(myArray.join("+"));
    $('#resul').html(result);

  });
});
});
