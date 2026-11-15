type Toppings = 'cheese' | 'olive' | 'corn'

export type Pizza = {
    name: string;
    toppings: Toppings[]
}


// const pizza : Pizza[] = [
//     {
//     name: 'ad',
//     toppings: ['cheese', 'cheese']
//     },
//     {
//     name: 'mama',
//     toppings: []
//      }

// ]

// const pizza : Pizza = {
//     name: 'Latina',
//     toppings: ['cheese', 'corn']
// }

export const makePizza = (name : string , ...toppings: Toppings[] ) => {
    return {name, toppings}
}






// console.log(makePizza('Jamailla Re', "cheese", 'corn', 'cheese'));