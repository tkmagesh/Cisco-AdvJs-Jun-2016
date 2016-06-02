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