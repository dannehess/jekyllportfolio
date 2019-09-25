var element = document.getElementById('toggle');
element.addEventListener('click', function(e) {
    document.getElementsByTagName('body')[0].classList.toggle('hide-scroll');
});

$(document).ready(function() {
  $(".scroll").click(function(event){
      $('html, body').animate({scrollTop: '+=150px'}, 800);
  });
});

const hoverInfo = function(socialmedia, link){
        this.socialmedia = document.getElementById(socialmedia)
        this.link = document.querySelector(link);
}

hoverInfo.prototype.showUrl = function(url){
  let description = document.getElementById('desc');
    this.socialmedia.addEventListener('mouseover', () => {
      description.innerHTML = url;
        })
          this.socialmedia.addEventListener('mouseout', () => {
            description.innerHTML = '';
            })
}

  let email = new hoverInfo('mymail');
  email.showUrl('daniel.hessling@gmail.com');
  
  let linkedin = new hoverInfo('mylinkedin');
  linkedin.showUrl('linkedin.com/in/danielhessling');
  
  let twitter = new hoverInfo('mytwitter');
  twitter.showUrl('twitter.com/dannehess');
  
  let facebook = new hoverInfo('myfacebook');
  facebook.showUrl('facebook.com/daniel.hessling.1');
  
  let instagram = new hoverInfo('myinstagram');
  instagram.showUrl('instagram.com/dannehess/');