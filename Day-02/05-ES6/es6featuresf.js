class Employee{
   constructor(id, name, salary){
       this.id = id;
       this.name = name;
       this.salary = salary;
   }
   display(){
       console.log(this.id, this.name, this.salary);
   }
   static isEmployee(obj){
      return obj instanceof Employee;
   }
}

class FulltimeEmployee extends Employee{
  constructor(id,name,salary,benefits){
    super(id, name, salary);
    this.benefits = benefits;
  }
}

var Spinner = (function(){
  var countSymbol = Symbol();
  function Spinner(){
    this[countSymbol] = 0;
  }
  Spinner.prototype.up = function(){
    return ++this[countSymbol];
  };
  Spinner.prototype.down = function(){
    return --this[countSymbol];
  }
  return Spinner;
})();