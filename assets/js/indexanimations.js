    $(document).ready(function(){

        let $welcomeInfo = $('#welcome-info');
        $welcomeInfo.waypoint( () => {
            anime({
                targets: '#welcome-info',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $welcomeInfoTwo = $('#welcome-info-two');
        $welcomeInfoTwo.waypoint( () => {
            anime({
                targets: '#welcome-info-two',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $aboutInfo = $('#about-info');
        $aboutInfo.waypoint( () => {
            anime({
                targets: '#about-info',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $aboutInfoTwo = $('#about-info-two');
        $aboutInfoTwo.waypoint( () => {
            anime({
                targets: '#about-info-two',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $mainMe = $('#main-me');
        $mainMe.waypoint( () => {
            anime({
                targets: '#main-me',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $knowledgeTable = $('#main-know');
        $knowledgeTable.waypoint( () => {
            anime({
                targets: '#main-know',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        let $toolsTable = $('#main-tools');
        $toolsTable.waypoint( () => {
            anime({
                targets: '#main-tools',
                scale: [.6,1],
                duration: 400,
                easing: 'linear'
            });
        }, { offset: '90%' });

        });