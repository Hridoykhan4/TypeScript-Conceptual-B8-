// const first = <T>(arr : T[]) : T[]  => {
//     return arr
// }


// console.log(first<string>(['Jamal', 'Salam']));

// function first <T>(arr: T[]) : T {
//         return arr[0]
// }

// console.log(first([{name: 'Salam', roll: 12}, {name: "Jamal", roll: 14}]));


// interface LunchBox <T> {
//     food: T,   
// }

// type LunchBox <T> =  {
//     food: T
// }

// const  myLunchBox : LunchBox<{name: string, koyTaExist: number}> = {
//     food: {
//         name: 'Salam',
//         koyTaExist: 12  
//     }
// }

// const rakibLunchBox : LunchBox<{name: string; items: string[]}> = {
//     food: {
//         name: "Raita",
//         items: ['Kashundi', 'Mammmia']
//     }
// }

// console.log(rakibLunchBox);

type ApiResponse <T> = {
    success: boolean;
    data: T
}

// const students = [
//   { id: 1, name: "Rahim", age: 20, marks: 85 },
//   { id: 2, name: "Karim", age: 21, marks: 90 },
//   { id: 3, name: "Jamal", age: 22, marks: 75 },
//   { id: 4, name: "Hasan", age: 19, marks: 95 },
//   { id: 5, name: "Sakib", age: 23, marks: 88 },
// ];

type StudentResponse = ApiResponse<{id: number, roll: number, age: number, hobbies: string[]}>
type ErrorResponse = ApiResponse<{ message: string }>

const studentRes : StudentResponse = {
    success: true,
    data: {
        age: 12,
        hobbies: ['swimming', 'playing'],
        id: 101,
        roll: 12
    }
}

const error : ErrorResponse = {
    success: false,
    data: {
        message: 'Fuck OFFF'
    }
}