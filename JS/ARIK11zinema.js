sala = "ninguna";
numeroSalas = localStorage.getItem('salas');
$(document).ready(function(){

for (i = 1; i <= numeroSalas; i++) {
  $('#elementos').append('<div id="sala' + i + '" class="texto">');
}

function esconder() {
  $('#sala1').hide();
  $('#sala2').hide();
  $('#sala3').hide();
  $('#sala4').hide();
}

      $('.imagen:eq(0)').click(function(){
        esconder();
            $('#sala1').show();
            $('#compraentradas').show();
            $('#sala1').append('<h3></h3><p> Sala 1 Maecenas vitae eros nisi. Maecenas ipsum erat, auctor sed libero vitae, pulvinar porttitor leo. Aenean mattis sem sit amet tortor tincidunt cursus. Vivamus egestas cursus ipsum, sed tristique magna fermentum in. Pellentesque ac pretium ex. Phasellus convallis ante urna, sed laoreet lacus imperdiet a. Nulla ac nibh faucibus, tincidunt turpis vel, pretium elit.</p>');
      });

      $('.imagen:eq(1)').click(function(){
        esconder();
        $('#sala2').show();
        $('#compraentradas').show();
      });

      $('.imagen:eq(2)').click(function(){
        esconder();
        $('#sala3').show();
        $('#compraentradas').show();
      });

      $('.imagen:eq(3)').click(function(){
        esconder();
        $('#sala4').show();
        $('#compraentradas').show();
      });

});
