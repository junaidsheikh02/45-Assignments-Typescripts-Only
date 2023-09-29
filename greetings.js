"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greetingMessage = "Hello, ";
// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
    const personalizedMessage = `${greetingMessage}${names[i]}!`;
    console.log(personalizedMessage);
}
