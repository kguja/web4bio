TEST = document.getElementById('test');

Plotly.plot( test, [{
	    x: [1, 2, 3, 4, 5],
	    y: [1, 2, 4, 8, 16] }], { 
		        margin: { t: 0 } } );

/* Current Plotly.js version */
console.log( Plotly.BUILD );

lala=function(){
	console.log('hi there, staring the code')
	cbio.getTypesOfCancer(function(x){
		y=x
		console.log('done with analyzing '+y).
	})
}