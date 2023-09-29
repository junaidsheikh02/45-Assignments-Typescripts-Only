const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greetingMessage: string = "Hello, ";

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
  const personalizedMessage = `${greetingMessage}${names[i]}!`;
  console.log(personalizedMessage);
}
