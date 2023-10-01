"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personName = "John Doe";
function toTitleCase(input) {
    return input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
