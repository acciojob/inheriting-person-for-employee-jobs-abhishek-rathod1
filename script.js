// complete this js code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		
	}
	greet(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle;
		
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
		return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
	}
}
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
