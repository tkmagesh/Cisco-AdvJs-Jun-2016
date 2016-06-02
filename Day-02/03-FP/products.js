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
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i]  = products[j];
						products[j] = temp;
					}
		}
		sortProductsById();
		console.table(products);
	});
	print("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i]  = list[j];
						list[j] = temp;
					}
		}
		print("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});

		print("Products by units", function(){
			sort(products, "units");
			console.table(products);
		});
	});

	print("Any list by any comparison", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i]  = list[j];
						list[j] = temp;
					}
		}
		print("Products by value [units * cost]", function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			};
			sort(products, productComparerByValue);
			console.table(products);
		});
	});
	
});

print("Filtering", function(){
	print("Filter category-1 products", function(){
		function filterCat1Products(){
			var result = [];
			for(var i=0; i < products.length; i++)
				if (products[i].category === 1)
					result.push(products[i]);
			return result;
		}
		var category1Products = filterCat1Products();
		console.table(category1Products);
	});

	print("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i < list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}
		var costlyProductCriteria = function(product){
			return product.cost > 50;
		};
		print("costly products [cost > 50]", function(){
			var costlyProducts = filter(products, costlyProductCriteria);
			console.table(costlyProducts);
		});

		var category1ProductCriteria = function(product){
			return product.category === 1;
		};
		print("category 1 products", function(){
			var category1Products = filter(products, category1ProductCriteria);
			console.table(category1Products);
		});

		/*var affordableProductCriteria = function(product){
			return product.cost <= 50;
		}*/
		/*var affordableProductCriteria = function(product){
			return !costlyProductCriteria(product);
		}*/
		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			};
		}
		var affordableProductCriteria = negate(costlyProductCriteria);

		print("affordable products [cost <= 50]", function(){
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		});
		/*var nonCategory1ProductCriteria = function(product){
			return !category1ProductCriteria(product);
		};*/
		var nonCategory1ProductCriteria = negate(category1ProductCriteria);
		
		print("non category 1 products", function(){
			var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
			console.table(nonCategory1Products);
		});

	})
})