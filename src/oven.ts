import { makePizza, Pizza } from "./pizza";

function bake (p : Pizza) {
    console.log(`${p.name} baked with $${p.toppings}`);
}

bake(makePizza('Latina', 'cheese', 'corn', 'olive'))