TEST = document.getElementById('test');

Plotly.plot( test, [{
	    x: [1, 2, 3, 4, 5],
	    y: [1, 2, 4, 8, 16] }], { 
		        margin: { t: 0 } } );

/* Current Plotly.js version */
console.log( Plotly.BUILD );

TEST2 = document.getElementById('test2');

Plotly.plot( test2, [{
	    x: [1, 2, 3, 4, 5],
	    y: [1, 2, 4, 8, 16] }], { 
		        margin: { t: 0 } } );

/* Current Plotly.js version */
console.log( Plotly.BUILD );
