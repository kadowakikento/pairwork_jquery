$(document).ready(function(){


  setInterval(function(){
    $(".flash").fadeOut(1000).fadeIn(1000);
  },1000);

  $(function(){
    $("#datepicker").datepicker()
  });

  $(function(){
    $(".submit").on("click",function(){
      $('#demo3').html('<img class="gazou" src="./hirameki_man.png" alt="サンプル画像">');

    });
  });


})
