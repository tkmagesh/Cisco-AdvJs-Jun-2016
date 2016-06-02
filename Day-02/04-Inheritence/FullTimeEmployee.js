function Employee(id, name, salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
}
Employee.prototype.display = function(){
	console.log(this.id, this.name, this.salary);
}

function FullTimeEmployee(id, name, salary, benefits){
	Employee.call(this, id, name, salary);
	this.benefits = benefits;
}

function extend(destination, source){
	for(var key in source.prototype)
		destination.prototype[key] = source.prototype[key];
}

extend(FullTimeEmployee, Employee);

