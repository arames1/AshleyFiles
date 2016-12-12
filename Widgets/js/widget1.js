var barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
            fillColor: "#48A497",
            strokeColor: "#48A4D1",
            data: [456, 479, 324, 569, 702, 600]
        },
        {
            fillColor: "rgba(73,188,170,0.4)",
            strokeColor: "rgba(72,174,209,0.4)",
            data: [364, 504, 605, 400, 345, 320]
        }

    ]
}
var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);


var hours = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds(),
    digits = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        11: 'XI',
        12: 'XII'
    };

$('#minutes').jqxGauge({
    ticksMinor: { visible: false },
    ticksMajor: { visible: false },
    labels: { visible: false },
    animationDuration: 0,
    min: 0,
    max: 12,
    border: { style: { fill: 'none', stroke: 'none' }, showGradient: false },
    caption: { value: '' },
    colorScheme: 'scheme05',
    style: { fill: 'none', stroke: 'none' },
    pointer: { length: '70%', width: '2%' },
    cap: { style: { fill: '#249dd6', stroke: '#249dd6' } },
    startAngle: -90,
    endAngle: 270,
    value: (minutes / 60) * 12
});

$('#hours').jqxGauge({
    ticksMinor: { visible: false },
    ticksMajor: { visible: false },
    labels: { visible: false },
    animationDuration: 0,
    min: 0,
    max: 12,
    caption: { value: '' },
    border: { style: { fill: 'none', stroke: 'none' }, showGradient: false },
    colorScheme: 'scheme05',
    pointer: { length: '50%', width: '3%' },
    style: { fill: 'none', stroke: 'none' },
    value: hours % 12 + (minutes / 60 * 11) / 12,
    startAngle: -90,
    endAngle: 270
});

$('#seconds').jqxGauge({
    ticksMinor: {
        interval: 0.2,
        size: '3%',
        style: {
            fill: '#aaaaaa',
            stroke: '#aaaaaa',
            'stroke-width': '2px'
        }
    },
    ticksMajor: {
        interval: 1,
        size: '8%',
        style: {
            fill: '#aaaaaa',
            stroke: '#aaaaaa',
            'stroke-width': '2px'
        }
    },
    ticksDistance: '10%',
    startAngle: -90,
    endAngle: 270,
    labels: {
        distance: '28%',
        interval: 1,
        formatValue: function(val) {
            if (val == 0) {
                return '';
            }
            return digits[val];
        }
    },
    pointer: { length: '80%', width: '1.7%' },
    ranges: [],
    caption: { value: 'jQWidgets', offset: [0, -30] },
    animationDuration: 0,
    min: 0,
    max: 12,
    border: { fill: 'none', stroke: 'none' },
    colorScheme: 'scheme05',
    style: { fill: '#ffffff', stroke: '#cccccc' },
    value: (seconds / 60) * 12
});

setInterval(function() {
    var seconds = $('#seconds').jqxGauge('value'),
        minutes = $('#minutes').jqxGauge('value'),
        hours = $('#hours').jqxGauge('value'),
        ratio = 12 / 60;
    seconds += ratio;
    if (seconds > 12) {
        seconds = ratio;
    }
    $('#seconds').jqxGauge('value', seconds);
    if (seconds === ratio) {
        minutes += ratio;
        if (minutes >= 12) {
            minutes = ratio;
        }
        $('#minutes').jqxGauge('value', minutes);
        hours += 1 / 60;
        if (hours > 12) {
            hours = 1 / 60;
        }
        $('#hours').jqxGauge('value', hours);
    }
}, 1000);