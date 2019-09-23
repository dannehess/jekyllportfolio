    $(document).ready(function(){

        $('#main-me').waypoint( () => {
            anime({
                targets: '#main-me',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        $('#welcome-info').waypoint( () => {
            anime({
                targets: '#welcome-info',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        $('#welcome-info-two').waypoint( () => {
            anime({
                targets: '#welcome-info-two',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        $('#about-info').waypoint( () => {
            anime({
                targets: '#about-info',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        $('#about-info-two').waypoint( () => {
            anime({
                targets: '#about-info-two',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });
        

        $('#main-know').waypoint( () => {
            anime({
                targets: '#main-know',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        $('#main-tools').waypoint( () => {
            anime({
                targets: '#main-tools',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        });
