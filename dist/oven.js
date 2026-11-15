import { makePizza } from "./pizza";
function bake(p) {
    console.log(`${p.name} baked with $${p.toppings}`);
}
bake(makePizza('Latina', 'cheese', 'corn', 'olive'));
