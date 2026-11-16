class Person {
        constructor(public firstName: string, public lastName: string, public fullName: string){

        }

}

const student = new Person('Jamal', 'Uddin', 'Jamal Uddin')
const teacher = new Person ('Salam', 'Gazi', 'Salam Gazi')
console.log(teacher);