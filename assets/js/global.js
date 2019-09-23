var element = document.getElementById('toggle');
element.addEventListener('click', function(e) {
    document.getElementsByTagName('body')[0].classList.toggle('hide-scroll');
});


$(document).ready(function() {
  $(".scroll").click(function(event){
      $('html, body').animate({scrollTop: '+=150px'}, 800);
  });
});