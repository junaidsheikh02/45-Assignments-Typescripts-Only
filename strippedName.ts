const personNameWithWhitespace: string = "\t\n   John Doe   \t\n"; // Including "\t" and "\n" for whitespace

console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);

// Remove leading and trailing whitespace
const strippedName: string = personNameWithWhitespace.trim();

console.log("\nStripped Name:");
console.log(strippedName);
