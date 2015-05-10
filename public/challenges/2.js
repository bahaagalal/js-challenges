jQuery(document).ready(function(){
	var x = 10;
	jQuery('#results').append('x == x --> ' + Boolean(x == x));
	var y = 'javascript';
	jQuery('#results').append('<br> y == y --> ' + Boolean(y == y));
	var z = NaN;
	jQuery('#results').append('<br> z == z --> ' + Boolean(z == z));
});
