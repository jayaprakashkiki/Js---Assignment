// 5.=> Define Person class with parameter firstName and lastName. Write a function fullName() inside function object to return
// 		fullName of that person. (Using constructor function)

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName() {
      return `This is the full name : ${this.firstName} ${this.lastName}`;
    }
  }
  
  const person = new Person("Ram", "Kumar");
  console.log(person.fullName());
  
