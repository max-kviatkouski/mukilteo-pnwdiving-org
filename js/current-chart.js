// var DOMAIN = 'http://mukilteo.pnwdiving.org'
var DOMAIN = 'http://localhost:63342/pyboard-current-meter-logger'

function loadChart(day) {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Meter measurements vs. Glendale station tide predictions'
        },
        data: {
            csvURL: DOMAIN + '/data/reports/' + day + '.csv',
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
            lineColor: 'rgb(124, 181, 236)',
            lineWidth: 2,
            max: 45,
            visible: true,
            plotBands: [{
                from: 5,
                to: 10,
                color: 'rgba(255, 243, 186, 0.4)',
                label: {
                    text: 'Approximately 0.2kt',
                    style: {
                        color: '#606060'
                    }
                }
            }]
        }, {
            title: {
                text: 'Tide height (ft)'
            },
            lineColor: 'rgb(67, 67, 72)',
            lineWidth: 2,
            max: 14,
            opposite: true,
            visible: true
        }],
        plotOptions: {
            series: {
                connectNulls: true
            }
        },
        series: [{yAxis: 0}, {yAxis: 1}]
    });
}

$(function () {
    loadChart('2018-07-20')
    $(function () {
        $("#day").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
    });
});