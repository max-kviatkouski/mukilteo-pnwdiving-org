$(function () {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Mukilteo measured current'
        },
        data: {
            csvURL: 'http://localhost:63342/pyboard-current-meter-logger/data/reports/2018-07-20.tilt-from-vertical.10T..9447814.tides.csv',
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
            },
            max: 45,
            visible: true
        }, {
            title: {
                text: 'Tide height (ft)'
            },
            max: 14,
            opposite: true,
            visible: true
        }],
        plotOptions: {
            series: {
                connectNulls: true
            }
        },
        series: [{yAxis:0}, {yAxis:1}]
    });
});