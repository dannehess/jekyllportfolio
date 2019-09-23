$(document).ready(function(){
    $('#work-info').waypoint( () => {
        anime({
            targets: '#work-info',
            scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });
        });