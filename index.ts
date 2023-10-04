// Store the person's name with leading and trailing whitespace
let personNameWithWhitespace: string = "\t  John Doe \n";

// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);

// Strip the whitespace and print the cleaned name
let strippedName: string = personNameWithWhitespace.trim();
console.log("\nName after Stripping Whitespace:");
console.log(strippedName);
