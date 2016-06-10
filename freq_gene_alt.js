//import data
function makeplot1() {
    Plotly.d3.csv("https://dd1b46b424e4e3f9961498357f957a19d05964c6.googledrive.com/host/0B0SVcCQxjPXTdUJESjhaZ2JhTWs/freq_gene_alt.csv", function(data) {
        processData(data)
    });

}

//parse data
function processData(allRows) {

    //console.log(allRows);
    var x = [],
        y = [],
        standard_deviation = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        x.push(row['GENE_SYMBOL']);
        y.push(row['PERCENT_CASES_ALTERED']);
    }
    console.log('X', x, 'Y', y, 'SD', standard_deviation);
    makePlotly(x, y, standard_deviation);
}

//make plot
PLOT3 = document.getElementById('plot3');

function makePlotly(x, y, standard_deviation) {
    var plot3 = document.getElementById("plot3");
    var traces = [{
            x: x,
            y: y,
            type: 'bar'
        }
    ];
    var layout = {
        title: 'Plot of genes frequently mutated',
        xaxis: {
            title: 'Name of gene'
        },
        yaxis: {
            title: 'Percent of cases'
        }
    }
    Plotly.newPlot('plot3', traces, layout);
}
makeplot1();
