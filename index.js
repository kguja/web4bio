//make a plot.ly plot

//call to ajax to grab our csv data
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
var plotDiv = document.getElementById("secondDiv");
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
Plotly.newPlot('plotDiv', traces, layout);
};
makeplot();

// Jonas playing in the sandbox
sand={}
sand.createTable=function(){
    // create table
    var tb = document.createElement('table')
    tb.className='table table-striped'
    thirdDiv.appendChild(tb)
    // table head
    var tHead = document.createElement('thead')
    //tHead.className='table-striped'
    tb.appendChild(tHead)
    // rows of the head
    var r = document.createElement('tr')
    sand.parms.forEach(function(p){
        var c = document.createElement('td')
        c.textContent=p
        c.style.color="black"
        c.style.fontWeight="bold"
        r.appendChild(c)
        c.style.backgroundColor='silver'
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
            if(parseFloat(c.textContent)>30){
                c.style.color='red'
            }
            c.onclick=function(){
                this.style.color='blue'
            }
            c.onmouseover=function(){
                this.style.color='green'
            }
            4
            
        })
        4
    })

    // tired of tables, time for deep learning
    $.getScript('https://cs.stanford.edu/people/karpathy/convnetjs/build/convnet-min.js')
     .then(function(){
         console.log('thinking deeply about this data:',sand.cols)
     })

    4

}
sand.arrayTrouble=function(){
    $.getJSON('https://opendata.socrata.com/resource/g6hg-3p2t.json')
     .then(function(x){
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

