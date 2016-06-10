//import data

function makeplot() {
    Plotly.d3.csv("https://dd1b46b424e4e3f9961498357f957a19d05964c6.googledrive.com/host/0B0SVcCQxjPXTdUJESjhaZ2JhTWs/diabetes.csv", function(data) {
        processData2(data)
    });

}

//parse data

function processData2(allRows) {

    //console.log(allRows);
    var x0 = [],
        x1 = [],
        x2 = [],
        x3 = [],
        x4 = [],
        x5 = [],
        x6 = [],
        x7 = [],
        x8 = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        x0.push(row['PREG']);
        x1.push(row['GC']);
        x2.push(row['DBP']);
        x3.push(row['SKIN']);
        x4.push(row['INSULIN']);
        x5.push(row['BMI']);
        x6.push(row['PED']);
        x7.push(row['AGE']);
        x8.push(row['CLASS']);
    }
    console.log('PREG', x0, 'GC', x1, 'DBP', x2, 'SKIN', x3, 'INSULIN', x4, 'BMI', x5, 'PED', x6, 'AGE', x7, 'CLASS', x8);
    makePlotly(x0, x1, x2, x3, x4, x5, x6, x7, x8);
}

//make plot
//PLOT1 = document.getElementById('plot1');

function makePlotly(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
    var plot1 = document.getElementById("plot1");
    var trace1 = {
        x: x0,
        type: 'histogram'
    };
    var trace2 = {
        x: x1,
        type: 'histogram'
    };
    var trace3 = {
        x: x2,
        type: 'histogram'
    };
    var trace4 = {
        x: x3,
        type: 'histogram'
    };
    var trace5 = {
        x: x4,
        type: 'histogram'
    };
    var trace6 = {
        x: x5,
        type: 'histogram'
    };
    var trace7 = {
        x: x6,
        type: 'histogram'
    };
    var trace8 = {
        x: x7,
        type: 'histogram'
    };
    var trace9 = {
        x: x8,
        type: 'histogram'
    };
    var all_traces = [trace2, trace8];
    var layout = {
        barmode: 'overlay'
    };
    Plotly.newPlot('plot1', all_traces, layout);
};
//makeplot();
/* Current Plotly.js version */
//console.log(Plotly.BUILD);
