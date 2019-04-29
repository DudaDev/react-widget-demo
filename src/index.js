(function(global){

    const requirements = [
        'https://code.highcharts.com/highcharts.js'
    ];

    function drawChart(container, options) {
        $.getJSON(
            'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
            function (data) {
                Highcharts.chart({
                    chart: {
                        renderTo: container,
                        zoomType: options.zoomable ? 'x' : null
                    },
                    title: {
                        text: options.title
                    },
                    subtitle: {
                        text: options.zoomable ? options.subtitle : null
                    },
                    xAxis: { type: 'datetime' },
                    yAxis: {
                        title: { text: 'Exchange rate' }
                    },
                    legend: { enabled: false },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
        
                    series: [{
                        type: options.areaFill ? 'area' : null,
                        name: 'USD to EUR',
                        data: data
                    }]
                });
            }
        );
    }

    var handler = {
        init: function(options){
            const container = options.container;
            const props = options.props || {};
            container.setAttribute('style', 'min-width: 310px; height: 400px; margin: 0 auto');
            dmAPI.loadScripts(requirements).then(function(){
                drawChart(container, props);
            });
        },
        clean: function(options) {

        }
    }
    global.dmAPI.registerExternalWidget('chart', handler)
}(window))