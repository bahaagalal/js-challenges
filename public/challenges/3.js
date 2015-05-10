jQuery(document).ready(function(){
	var x = 10;
	var y = '30';
	jQuery('#results').append('y + x --> ' + (y + x));
	var y = '0';
	jQuery('#results').append('<br> y = ' + Boolean(y));
});
