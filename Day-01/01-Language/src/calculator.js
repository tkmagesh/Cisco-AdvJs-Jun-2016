/*function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n, 10);
	}	
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1));
}*/

function add(...nos){
	function parseArg(n){
		if (Array.isArray(n)) return add(...n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n, 10);
	}	
	return nos.length <= 1 ? parseArg(nos[0]) : parseArg(nos[0]) + add(nos.slice(1));
}