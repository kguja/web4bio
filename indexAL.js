/*
function makeplot() {
Plotly.d3.csv("https://dd1b46b424e4e3f9961498357f957a19d05964c6.googledrive.com/host/0B0SVcCQxjPXTdUJESjhaZ2JhTWs/freq_gene_alt.csv", function(data){ processData(data) } );

};

function processData(allRows) {

console.log(allRows);
var x = [], y = [], standard_deviation = [];

for (var i=0; i<allRows.length; i++) {
row = allRows[i];
x.push( row['GENE_SYMBOL'] );
y.push( row['PERCENT_CASES_ALTERED'] );
}
console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
makePlotly( x, y, standard_deviation );
}

function makePlotly( x, y, standard_deviation ){
var plotDiv = document.getElementById("plot");
var traces = [{
x: x,
y: y,
type: 'bar'
}];
var layout = {
title: 'Plot of genes frequently mutated',
xaxis: {
title: 'Name of gene'
},
yaxis: {
title: 'Percent of cases'
}
}
Plotly.newPlot('myDiv', traces, layout);
};
makeplot();
*/

// Jonas playing in the sandbox
sand={}
sand.createTable=function(){
    // create table
    var tb = document.createElement('table')
    tb.className='table table-striped'
    firstDiv.appendChild(tb)
    // table head
    var tHead = document.createElement('thead')
    //tHead.className='table-striped'
    tb.appendChild(tHead)
    // rows of the head
    var r = document.createElement('tr')
    sand.parms.forEach(function(p){
        var c = document.createElement('td')
        c.textContent=p
        r.appendChild(c)
    })
    tHead.appendChild(r)
    tBd = document.createElement('tbody')
    tb.appendChild(tBd)
    sand.rows.forEach(function(d){
        var r = document.createElement('tr')
        tBd.appendChild(r)
        sand.parms.forEach(function(p){
            var c = document.createElement('td')
            r.appendChild(c)
            c.textContent=d[p]

        })
        4
    })

    // tired of tables, time for deep learning
    $.getScript('http://cs.stanford.edu/people/karpathy/convnetjs/build/convnet-min.js')
     .then(function(){
         console.log('thinking deeply about this data:',sand.cols)
     })

    4

}

sand.arrayTrouble=function(){
  cbio.getMutationData({
  case_set_id:"brca_tcga",
  genetic_profile_id:"brca_tcga_mutations",
  gene_list:["EGFR","PTEN","TP53"]
},
function(x){
         sand.rows=x
         sand.parms = Object.getOwnPropertyNames(x[0])
         sand.cols={}
         sand.parms.forEach(function(parmi){
             sand.cols[parmi]=[]
             sand.rows.forEach(function(d){
                 sand.cols[parmi].push(parseFloat(d[parmi]))
             })
         })
         sand.createTable()
     })
}

sand.arrayTrouble()
