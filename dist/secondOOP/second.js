"use strict";
class Person {
    firstName;
    lastName;
    fullName;
    constructor(firstName, lastName, fullName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
    }
}
const student = new Person('Jamal', 'Uddin', 'Jamal Uddin');
const teacher = new Person('Salam', 'Gazi', 'Salam Gazi');
console.log(teacher);
