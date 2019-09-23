    $(document).ready(function(){

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