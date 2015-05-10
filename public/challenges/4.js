jQuery(document).ready(function(){
	var x = 10;

	(function bar(){
		var x = 30;

		jQuery('#results').append('x = ' + x);

		x += 10;
	})();

	jQuery('#results').append('<br> x = ' + x);

	for(var i = 0; i < 5; i++)
	{
		var x = 20;
		x += 5;
		jQuery('#results').append('<br> x = ' + x);
	}

	jQuery('#results').append('<br> x = ' + x);
});
