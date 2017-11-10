$(document).ready(function(){

  $('tr').click(function(){

    if ($(this).css("background-color") == "rgb(255, 0, 0)"){
      $(this).css("background-color", "white");
    } else{
      $(this).css("background-color", "red");
    }
  });

  $('#borrar').click(function(){

    $('tr').each(function(){
      if ($(this).css("background-color") == "rgb(255, 0, 0)"){
        $(this).remove();
      }
});

  });
});
