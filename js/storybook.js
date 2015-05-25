window.onload = function(){
    //Select a theme at random
    var arrThemes = ['css/colours-thunderbird.css','css/colours-tardis.css','css/colours-shuttle.css']
    var selectedCss = arrThemes[Math.floor(Math.random() * arrThemes.length)]
    
    document.getElementById('colours-css').href = selectedCss
    
    //Generate the skills donut chart
    var skillsData = {
        labels: ['Enterprise Linux', 'OpenStack', 'Amazon Web Services', 'Computer Systems Validation (GxP)', 'Team Leading', 'Gluster', 'Puppet', 'Perl', 'Technical Training', 'Customer Requirements Gathering'],
        series: [25, 20, 10, 10, 10, 5, 5, 5, 5, 5]
    };
	
	var options = {
        donut: true
	};
				
	var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 5,
            labelOffset: 50,
            labelDirection: 'explode',
            donutWidth: 80
        }],
        ['screen and (min-width: 768px)', {
            chartPadding: 20,
            labelOffset: 80,
            labelDirection: 'explode',
            donutWidth: 100
        }],
        ['screen and (min-width: 1200px)', {
            chartPadding: 35,
            labelOffset: 80,
            labelDirection: 'explode',
            donutWidth: 110
        }]
    ];
				
    new Chartist.Pie('#skillsChart', skillsData, options, responsiveOptions);
};	