//create a function that returns true/false depending on the given number is prime or not
//the algorithm to check the prime'ness of the number should not be executed more than once for the given number

var isPrime = (function(){
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i <= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}
	var cache = {};
	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}	
})();

isPrime(100); //run the algo
isPrime(101); //run the algo
isPrime(102); //run the algo
isPrime(103); //run the algo

isPrime(100); //DO NOT run the algo
isPrime(101); //DO NOT run the algo
isPrime(102); //DO NOT run the algo
isPrime(103); //DO NOT run the algo