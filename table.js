// Jonas playing in the sandbox
sand = {}
sand.createTable = function() {
    // create table
    var tb = document.createElement('table')
    tb.className = 'table table-striped'
    firstDiv.appendChild(tb)
    // table head
    var tHead = document.createElement('thead')
    //tHead.className='table-striped'
    tb.appendChild(tHead)
    // rows of the head
    var r = document.createElement('tr')
    sand.parms.forEach(function(p) {
        var c = document.createElement('td')
        c.textContent = p
        c.style.color = "black"
        c.style.fontWeight = "bold"
        r.appendChild(c)
        c.style.backgroundColor = 'silver'
    })
    tHead.appendChild(r)
    tBd = document.createElement('tbody')
    tb.appendChild(tBd)
    sand.rows.forEach(function(d) {
        var r = document.createElement('tr')
        tBd.appendChild(r)
        sand.parms.forEach(function(p) {
            var c = document.createElement('td')
            r.appendChild(c)
            c.textContent = d[p]
            if (parseFloat(c.textContent) > 30) {
                c.style.color = 'red'
            }
            c.onclick = function() {
                this.style.color = 'blue'
            }
            c.onmouseover = function() {
                this.style.color = 'green'
            }
            4

        })
        4
    })

    // tired of tables, time for deep learning
    $.getScript('https://cs.stanford.edu/people/karpathy/convnetjs/build/convnet-min.js')
        .then(function() {
            console.log('thinking deeply about this data:', sand.cols)
        })


}
//troube with arrays? let's fix that
sand.arrayTrouble = function() {
    $.getJSON('https://opendata.socrata.com/resource/g6hg-3p2t.json')
        .then(function(x) {
            sand.rows = x
            sand.parms = Object.getOwnPropertyNames(x[0])
            sand.cols = {}
            sand.parms.forEach(function(parmi) {
                sand.cols[parmi] = []
                sand.rows.forEach(function(d) {
                    sand.cols[parmi].push(parseFloat(d[parmi]))
                })
            })
            sand.createTable()
        })
}

sand.arrayTrouble()