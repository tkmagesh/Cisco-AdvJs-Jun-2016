function getCached(algoFn){
	var cache = {};
	return function (){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(this, arguments);
		return cache[key];
	}	
}

var isPrime = getCached(function checkPrime(n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var i=2; i <= (n/2); i++)
		if (n % i === 0) return false;
	return true;
});

var isOddOrEven = getCached(function checkOddOrEven(n){
	console.log('processing ', n);
	return n % 2 === 0 ? 'even' :'odd';
});