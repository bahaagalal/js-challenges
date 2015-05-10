console.log('a');

setTimeout(function(){
	console.log('b');
}, 2000);

setTimeout(function(){
	console.log('c');
}, 1000);

console.log('d');

// output a d c b
