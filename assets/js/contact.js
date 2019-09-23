$(document).ready(function(){
  $('#contact-info').waypoint( () => {
      anime({
          targets: '#contact-info',
          scale: [.6,1],
              duration: 400,
              easing: 'linear'
          });
      }, { offset: '90%' });
      });

let card = document.querySelector('.card');

document.addEventListener('mousemove', function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

