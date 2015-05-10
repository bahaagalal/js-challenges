jQuery(document).ready(function(){
	for(var i = 0; i < 10; i++)
	{
		jQuery.get('http://jsonplaceholder.typicode.com/posts/1', function(data){
			jQuery('#results').append(i + "<br>");
		});
	}
});
