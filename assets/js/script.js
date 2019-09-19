
let card = document.querySelector('.card');

document.addEventListener('mousemove', function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


var element = document.getElementById('toggle');
element.addEventListener('click', function(e) {
    document.getElementsByTagName('body')[0].classList.toggle('hide-scroll');
})