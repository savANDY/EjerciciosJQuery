$(document).ready(function(){

  $('#letraa').click(function(){
    $("#lista").hide().load("ARIK06A.html", function(){
      $(this).slideDown("1000");
    });
  });

  $('#letral').click(function(){
    $("#lista").hide().load("ARIK06B.html", function(){
      $(this).slideDown("1000");
    });
  });
});
