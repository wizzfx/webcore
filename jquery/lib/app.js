$(document).ready(function(){
  $('li').addClass('list-group-item');

  $('#add').click(function(){
         $('.list-group').append('<li>Skubany !!!</li>');
         $('li').addClass('list-group-item');

  });


    $('#menu').css('backgroundColor','green');
    $('.list-group').hide();
    $('#menu').click(function(){
    $('.list-group').slideDown();
     //    $('.list-group').fadeIn(1000);
           $('.list-group').delay(2000);
           $('.list-group').slideUp();


    });

});
