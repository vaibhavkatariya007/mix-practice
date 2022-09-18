// Problem using the private members:

var Employee = function (name, company, salary) {
  this.name = name || ''; //Public attribute default value is null
  this.company = company || ''; //Public attribute default value is null
  this.salary = salary || 5000; //Public attribute default value is null

  // Private method
  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  // Public method
  this.dispalyIncreasedSalary = function () {
    increaseSlary();
    console.log(this.salary);
  };
};

// Create Employee class object
var emp1 = new Employee('John', 'Pluto', 3000);
console.dir(emp1);
// Create Employee class object
var emp2 = new Employee('Merry', 'Pluto', 2000);
console.dir(emp2);
// Create Employee class object
var emp3 = new Employee('Ren', 'Pluto', 2500);
console.dir(emp3);
