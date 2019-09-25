const hoverInfo = function(socialmedia){
        this.socialmedia = document.getElementById(socialmedia)
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

  let linkedin = new hoverInfo('footer-linkedin');
  linkedin.showUrl('linkedin.com/in/danielhessling');
  
  let facebook = new hoverInfo('footer-facebook');
  facebook.showUrl('facebook.com/daniel.hessling.1');

  let instagram = new hoverInfo('footer-instagram');
  instagram.showUrl('instagram.com/dannehess/');

  let twitter = new hoverInfo('footer-twitter');
  twitter.showUrl('twitter.com/dannehess');