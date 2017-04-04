$(document).ready(function() {
 

 //Липкое меню
var navPos, winPos, navHeight;
  
function refreshVar() {
  navPos = $('nav').offset().top;
  navHeight = $('nav').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);

  $('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();
  
$(window).scroll(function() {
  winPos = $(window).scrollTop();
  
  if (winPos >= navPos) {
    $('nav').addClass('fixed shadow');  
    $('.clone-nav').show();
  }  
  else {
    $('nav').removeClass('fixed shadow');
    $('.clone-nav').hide();
  }
});






  //Адаптивное меню
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });


  //popup Вызов всплывающей формы
  $('.popup').magnificPopup();


  //Аякс отправка формы
  $('#section').submit(function(){
    $.ajax({
      type:"POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function(){
      alert("Спасибо за заявку!");
      setTimeout(function(){
        $.magnificPopup.close();
      },1000);
    });
    return false;
  });

});