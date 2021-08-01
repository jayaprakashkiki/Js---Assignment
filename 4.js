// 4. Define Person class with parameter firstName and lastName. Write a function fullName() inside function object to return
// 		fullName of that person. (Using constructor function)

function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;

  this.fullName = function () {
    return `This is the full name : ${this.fName} ${this.lName}`;
  };
}

var myClass = new Person("Praveen", "Kumar");
console.log(myClass.fullName());
