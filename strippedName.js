"use strict";
const personNameWithWhitespace = "\t\n   John Doe   \t\n"; // Including "\t" and "\n" for whitespace
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);
// Remove leading and trailing whitespace
const strippedName = personNameWithWhitespace.trim();
console.log("\nStripped Name:");
console.log(strippedName);
