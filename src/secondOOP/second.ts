class Person {
        constructor(public firstName: string, public lastName: string){

        }

        get fullName (): string {
            return this.firstName + ' ' +  this.lastName
        }
        talk() {
            console.log(`${this.firstName} is talking`);
        }
        walk () {
            console.log(`${this.firstName} ${this.lastName} is walking`);
        }
 }

 class Student extends Person {
    attendClass() {
        console.log('attending class');
        this.talk()
        this.walk()
    }
 }

 
 class Teacher extends Person {
   // This member must have an 'override' modifier because it overrides a member in the base class 'Person'.
   override get fullName(): string {
     return `Professor ${super.fullName}`;
   }
   checking() {
     console.log("Checking Assignment");
   }
 }

 class Principal extends Person {
   override get fullName(): string {
     return `Principal ${super.fullName}`;
   }
 }


const student = new Student('Jamal', 'Uddin')
const teacher = new Teacher ('Salam', 'Gazi')
const principal = new Principal('Booda', 'Hedamwala')

// console.log(principal.fullName);

// teacher.walk()
// console.log(teacher.fullName);



const printNames = (people: Person[]) => {
    for (const person of people) {
        console.log(person.fullName);
    }
}
printNames([
    student,
    teacher,
    principal
])
