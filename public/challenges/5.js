jQuery(document).ready(function(){
	var z = 5;

	setTimeout(function(){
		z += 5;
		jQuery('#results').append('<br> inner -> z = ' + z);
	}, 0);

	jQuery('#results').append('<br> outer -> z = ' + z);
});
