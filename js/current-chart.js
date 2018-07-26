$(function () {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Mukilteo measured current'
        },
        data: {
            csvURL: 'http://localhost:63342/pyboard-current-meter-logger/data/meter/processed/2018-07-20.tilt-from-vertical.10T.csv',
            beforeParse: function (csv) {
                return csv.replace(/\n\n/g, '\n');
            }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: [{
            title: {
                text: 'Tilt angle (degrees)'
            }
        }, {
            title: {
                text: 'Tide height (ft)'
            },
            opposite: true
        }]
    });

    var tidalChart = Highcharts.chart('container2', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Glendale predicted tide'
        },
        data: {
            csvURL: 'http://localhost:63342/pyboard-current-meter-logger/data/imported/2018-07-20.9447814.tides.csv',
            beforeParse: function (csv) {
                return csv.replace(/\n\n/g, '\n');
            }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: [{
            title: {
                text: 'Tide height (ft)'
            }
        }]
    });
});