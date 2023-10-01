const personName: string = "John Doe";

function toTitleCase(input: string): string {
  return input.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
