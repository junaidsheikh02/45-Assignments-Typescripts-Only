// Store the person's name in a variable with type annotation
const personName: string = "John Doe";

// Function to convert a string to titlecase
function toTitleCase(input: string): string {
  return input.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Print the name in lowercase
console.log(personName.toLowerCase());

// Print the name in uppercase
console.log(personName.toUpperCase());

// Print the name in titlecase
console.log(toTitleCase(personName));
