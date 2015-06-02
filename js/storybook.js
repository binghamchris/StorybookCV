window.onload = function(){
    brandVisible();

    //Select a theme at random
    var arrThemes = ['css/colours-thunderbird.css','css/colours-tardis.css','css/colours-shuttle.css']
    var selectedCss = arrThemes[Math.floor(Math.random() * arrThemes.length)]
    
    document.getElementById('colours-css').href = selectedCss
    
    //Generate the skills donut chart
    var skillsData = {
        labels: ['Enterprise Linux', 'OpenStack', 'Amazon Web Services', 'Systems Validation (GxP)', 'Team Leading', 'Gluster', 'Puppet', 'Perl', 'Technical Training', 'Customer Requirements Gathering'],
        series: [25, 20, 10, 10, 10, 5, 5, 5, 5, 5]
    };
	
	var options = {
        donut: true
	};
				
	var responsiveOptions = [
        ['screen and (max-width: 767px)', {
            chartPadding: 10,
            labelOffset: 50,
            labelDirection: 'explode',
            donutWidth: 60,
            chartPadding: 60
        }],
        ['screen and (min-width: 767px)', {
            chartPadding: 20,
            labelOffset: 70,
            labelDirection: 'explode',
            donutWidth: 90,
            chartPadding: 50
        }]
    ];
				
    new Chartist.Pie('#skillsChart', skillsData, options, responsiveOptions);
};

// Activate ScrollSpy
$('body').scrollspy({ target: '#topnav' });

// Control visibility of the navbar brand
function brandVisible() {
    if ( $('#name-title').visible() ) {
        $('.navbar-brand').hide();
    } else {
        $('.navbar-brand').show();
    };
};

window.onscroll = function() {
    brandVisible();
};
