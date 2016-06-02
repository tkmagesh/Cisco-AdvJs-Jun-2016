var products = [
	{id : 8, name : "Pen", cost : 30, units : 90, category : 1},
	{id : 3, name : "Hen", cost : 40, units : 40, category : 2},
	{id : 9, name : "Ten", cost : 20, units : 60, category : 2},
	{id : 4, name : "Den", cost : 90, units : 70, category : 1},
	{id : 5, name : "Zen", cost : 60, units : 50, category : 1},
];

/*
	sort
	filter
	any
	all
	groupBy
	min
	max
	sum
	avg
	aggregate
*/

function print(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
};

print("Default List", function(){
	console.table(products);
});
print("Sorting", function(){
	print("Products By Id [Default]", function(){
		function sortProductsById(){

		}
		sortProductsById();
		console.table(products);
	});
	
});