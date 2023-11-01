Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const personName: string = "Eric";
const message: string = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);


Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName: string = "John Doe";
const lowerCaseName: string = personName.toLowerCase();
const upperCaseName: string = personName.toUpperCase();
const titleCaseName: string = personName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

console.log("Lowercase: " + lowerCaseName);
console.log("Uppercase: " + upperCaseName);
console.log("Titlecase: " + titleCaseName);


Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:


const quoteElement = document.getElementById('quote') as HTMLParagraphElement;

const famousQuote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";

quoteElement.textContent = `${author} once said, "${famousQuote}"`;


Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const quoteElement = document.getElementById('quote') as HTMLParagraphElement;

const famous_person = "Albert Einstein";
const famousQuote = "A person who never made a mistake never tried anything new.";
const message = `${famous_person} once said, "${famousQuote}"`;

quoteElement.textContent = message;


Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

function stripWhitespace() {
    const nameElement = document.getElementById("name");
    if (nameElement) {
        const name = nameElement.textContent;
        const strippedName = name.trim();
        nameElement.textContent = strippedName;
    }
}


Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Addition
const additionResult: number = 5 + 3;
console.log(`Addition Result: ${additionResult}`);

// Subtraction
const subtractionResult: number = 10 - 2;
console.log(`Subtraction Result: ${subtractionResult}`);

// Multiplication
const multiplicationResult: number = 2 * 4;
console.log(`Multiplication Result: ${multiplicationResult}`);

// Division
const divisionResult: number = 16 / 2;
console.log(`Division Result: ${divisionResult}`);


You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);

console.log(5 + 3);


Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favoriteNumber: number = 7; // Replace 7 with your favorite number
const message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);


Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Define and store your favorite number
const favoriteNumber: number = 7; // Replace 7 with your favorite number

// Create a message that reveals your favorite number
const message: string = `My favorite number is ${favoriteNumber}.`;

// Print the message to the console
console.log(message);


Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Store the names of your friends in an array
const names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Print each person's name one at a time
for (const name of names) {
  console.log(name);
}

Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Define an array of your friends' names
const names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Define the common greeting message
const greetingMessage: string = "Hello, ";

// Iterate through the names and print personalized greetings
for (const name of names) {
  const personalizedMessage: string = `${greetingMessage}${name}!`;
  console.log(personalizedMessage);
}



Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Define an array of your favorite modes of transportation
const modesOfTransportation: string[] = ["motorcycle", "car", "bicycle", "scooter"];

// Iterate through the array and print statements
for (const mode of modesOfTransportation) {
  console.log(`I would like to own a ${mode}.`);
}


Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// // Create an array of dinner guests
// const dinnerGuests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marilyn Monroe"];

// // Send invitations
// dinnerGuests.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
// });


Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

// Create an array of dinner guests
const dinnerGuests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print the guest who can't make it
const guestCantMakeIt: string = 'Marilyn Monroe';
console.log(`${guestCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it


More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Create an array of dinner guests
const dinnerGuests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'Isaac Newton'];

// Print that a bigger dinner table has been found
console.log("Good news! We found a bigger dinner table.");

// Add new guests to the array
dinnerGuests.unshift('Marie Curie'); // Add to the beginning
dinnerGuests.splice(2, 0, 'Nikola Tesla'); // Add to the middle
dinnerGuests.push('Galileo Galilei'); // Add to the end

// Print a new set of invitation messages
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});


Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

Here's how you can modify your TypeScript (TS) program to handle a shrinking guest list:

// Create an array of dinner guests
const dinnerGuests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'Isaac Newton', 'Marie Curie', 'Nikola Tesla', 'Galileo Galilei'];

// Print a message that you can invite only two people
console.log("Sorry, we can invite only two people for dinner.");

// Remove guests one at a time until only two names remain
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining people
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Remove the last two names to have an empty list
dinnerGuests.splice(0, 2);

// Print the empty list
console.log("Remaining guests: " + dinnerGuests.join(', '));



// In this TypeScript code, we create an array of dinner guests, print a message about the limited space for only two guests, remove guests until only two names remain, and then print messages to the two remaining people. Finally, the last two names are removed to have an empty list, and the program verifies the empty list at the end.


// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

TS:

const destinations: string[] = [
    'Tokyo',
    'Paris',
    'Machu Picchu',
    'Bora Bora',
    'Santorini'
  ];
  
  console.log('Original Order:', destinations);
  
  const alphabeticalOrder = [...destinations].sort();
  console.log('Alphabetical Order:', alphabeticalOrder);
  
  console.log('Original Order:', destinations);
  
  const reverseAlphabeticalOrder = [...destinations].sort().reverse();
  console.log('Reverse Alphabetical Order:', reverseAlphabeticalOrder);
  
  console.log('Original Order:', destinations);
  
  destinations.reverse();
  console.log('Reversed Order:', destinations);
  
  destinations.reverse();
  console.log('Original Order:', destinations);
  
  destinations.sort();
  console.log('Sorted in Alphabetical Order:', destinations);
  
  destinations.sort((a, b) => b.localeCompare(a));
  console.log('Sorted in Reverse Alphabetical Order:', destinations);

  
//   Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

Certainly! Here's an example in both TypeScript (TS) and JavaScript (JS) that prints a message indicating the number of people you are inviting to dinner using the program from Exercise 14:

TypeScript (TS):

const dinnerGuests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

TypeScript (TS):

const dinnerGuests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const mountains: string[] = ['Mount Everest', 'K2', 'Matterhorn', 'Kilimanjaro', 'Denali'];

// Print the list of mountains
console.log('List of Mountains:', mountains);


// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

Certainly! Here's a TypeScript program that creates objects containing information about countries, including their names and capitals:

// Define an array of country objects
const countries = [
    {
      name: 'United States',
      capital: 'Washington, D.C.',
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
    },
    {
      name: 'United Kingdom',
      capital: 'London',
    },
    {
      name: 'France',
      capital: 'Paris',
    },
    {
      name: 'Germany',
      capital: 'Berlin',
    },
  ];
  
  // Loop through the array and print information about each country
  countries.forEach((country, index) => {
    console.log(`Country ${index + 1}:`);
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log('-------------------');
  });

  In this program, we define an array of country objects, where each object contains the name and capital of a country. We then loop through the array to print information about each country.

You can modify the list of countries and their properties as needed for your specific use case.

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// write coding on ts only 

To intentionally create an array index error in TypeScript and handle it, you can follow this example:

try {
    const myArray: number[] = [1, 2, 3];
    const index = 5; // Accessing an out-of-bounds index
    const value = myArray[index];
    console.log(`Value at index ${index} is: ${value}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }

  
  In this TypeScript code, we intentionally try to access an element at an index that is out of bounds (index 5 in an array with only three elements). We wrap this code in a try...catch block to catch the error. When an error occurs, it's logged to the console.



// Remember that it's important to handle array index errors in your code to prevent unexpected crashes. In this example, the catch block provides a way to handle the error gracefully.

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

write coding on TYPESCRIPT only 

Certainly, you can perform conditional tests in TypeScript using a similar structure to the one you provided. Here's an example with 10 conditional tests, where some evaluate to true, and others evaluate to false.

let car: string = 'subaru';
let number1: number = 5;
let number2: number = 10;

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);

// Test 3
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);

// Test 4
console.log("Is number1 + number2 == 15? I predict True.");
console.log(number1 + number2 == 15);

// Test 5
console.log("Is 'apple' != 'orange'? I predict True.");
console.log('apple' != 'orange');

// Test 6
console.log("Is 4 * 3 == 12? I predict True.");
console.log(4 * 3 == 12);

// Test 7
console.log("Is 3 % 2 == 0? I predict False.");
console.log(3 % 2 == 0);

// Test 8
console.log("Is (number1 < 10) && (number2 > 5)? I predict True.");
console.log((number1 < 10) && (number2 > 5));

// Test 9
console.log("Is 'typescript' === 'TypeScript'? I predict False.");
console.log('typescript' === 'TypeScript');

// Test 10
console.log("Is (car == 'subaru') || (number1 >= 5)? I predict True.");
console.log((car == 'subaru') || (number1 >= 5));

These 10 tests cover various types of conditions, including string comparisons, number comparisons, logical operations, and more. You can observe the results to verify that each line evaluates as expected.


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


write coding on TYPESCRIPT only

Sure, I can provide you with additional conditional tests in TypeScript covering the categories you mentioned. Here are some more tests:

let text1: string = 'hello';
let text2: string = 'world';
let lowercaseText: string = 'typescript';
let numberA: number = 5;
let numberB: number = 10;
let array1: number[] = [1, 2, 3, 4, 5];
let itemToFind: number = 3;
let itemNotInArray: number = 6;

// Tests for equality and inequality with strings
console.log("Test for equality of strings: text1 == text2 (False)");
console.log(text1 == text2);

console.log("Test for inequality of strings: text1 != text2 (True)");
console.log(text1 != text2);

// Tests using the lower case function
console.log("Test if lowercaseText is equal to 'typescript' (True)");
console.log(lowercaseText.toLowerCase() == 'typescript');

// Numerical tests
console.log("Numerical test: numberA > numberB (False)");
console.log(numberA > numberB);

console.log("Numerical test: numberA <= numberB (True)");
console.log(numberA <= numberB);

// Tests using "and" and "or" operators
console.log("Logical AND: numberA < 10 && numberB > 5 (True)");
console.log(numberA < 10 && numberB > 5);

console.log("Logical OR: numberA < 3 || numberB > 15 (False)");
console.log(numberA < 3 || numberB > 15);

// Test whether an item is in an array
console.log("Item in array: Is itemToFind in array1? (True)");
console.log(array1.includes(itemToFind));

// Test whether an item is not in an array
console.log("Item not in array: Is itemNotInArray in array1? (False)");
console.log(!array1.includes(itemNotInArray));


These additional tests cover a variety of scenarios, including string comparisons, lowercase function usage, numerical comparisons, logical operators, and array membership checks. You can observe the results to ensure that each line evaluates as expected.


// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

write coding on TYPESCRIPT only

Here's a TypeScript program that fulfills your requirements for the "Alien Colors #1" scenario:

// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color: string = 'green';

// Write an if statement to test whether the alien's color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}


In this version, the alien_color variable is assigned the value 'green', and the if statement checks if it's equal to 'green'. Since the condition is true, it prints the message, "The player just earned 5 points."

Now, let's create a version that fails the if test:

// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color: string = 'yellow';

// Write an if statement to test whether the alien's color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}


In this version, the alien_color variable is assigned the value 'yellow', and the if statement checks if it's equal to 'green'. Since the condition is false, there is no output, as requested, because the code block within the if statement is not executed.


// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

write coding on TYPESCRIPT only 

Certainly, here are two versions of a TypeScript program for "Alien Colors #2," one that runs the if block and another that runs the else block:

Version 1 (Runs the if block):

// Choose a color for an alien
const alien_color: string = 'green';

// If the alien's color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    // If the alien's color isn't green, print a statement that the player just earned 10 points.
    console.log("The player just earned 10 points for shooting the non-green alien.");
}

In this version, the alien_color variable is set to 'green', and the if block is executed, resulting in the message, "The player just earned 5 points for shooting the green alien."

Version 2 (Runs the else block):

// Choose a color for an alien
const alien_color: string = 'red';

// If the alien's color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    // If the alien's color isn't green, print a statement that the player just earned 10 points.
    console.log("The player just earned 10 points for shooting the non-green alien.");
}


In this version, the alien_color variable is set to 'red', and the else block is executed since the if condition is false. This results in the message, "The player just earned 10 points for shooting the non-green alien."



// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

write coding on TYPESCRIPT only 

Certainly! Here are three versions of a TypeScript program for "Alien Colors #3," with each message printed for the appropriate color of the alien:

Version 1 (Green Alien - 5 points):

const alienColor1: string = 'green';

if (alienColor1 === 'green') {
    console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor1 === 'yellow') {
    console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor1 === 'red') {
    console.log("The player earned 15 points for shooting the red alien.");
}

Version 2 (Yellow Alien - 10 points):

const alienColor2: string = 'yellow';

if (alienColor2 === 'green') {
    console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor2 === 'yellow') {
    console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor2 === 'red') {
    console.log("The player earned 15 points for shooting the red alien.");
}

Version 3 (Red Alien - 15 points):

const alienColor3: string = 'red';

if (alienColor3 === 'green') {
    console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor3 === 'yellow') {
    console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor3 === 'red') {
    console.log("The player earned 15 points for shooting the red alien.");
}

Each version sets the alienColor variable to a different color, and the appropriate message is printed based on the color of the alien.


// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

write coding on TYPESCRIPT only 

Here's a TypeScript program that determines a person's stage of life based on the given age:

const age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

In this code, you set the age variable to a specific value, and then the if-else chain determines the person's stage of life based on the age value. The appropriate message is printed based on the age range in which the person falls.


// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

Sure, here's a TypeScript program that checks if certain fruits are in an array of favorite fruits and prints statements accordingly:

// Make an array of your three favorite fruits
const favorite_fruits: string[] = ['apples', 'bananas', 'strawberries'];

// Check if specific fruits are in your array and print statements accordingly
if (favorite_fruits.includes('bananas')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apples')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberries')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('oranges')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't seem to like oranges.");
}

if (favorite_fruits.includes('grapes')) {
    console.log("You really like grapes!");
} else {
    console.log("You don't seem to like grapes.");
}

// In this code, we define an array favorite_fruits with your three favorite fruits. Then, we use five if statements to check if specific fruits are in the array and print messages accordingly. If the fruit is in your array, it prints a message stating that you really like that fruit. If the fruit is not in your array, it indicates that you don't seem to like that fruit.

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

write coding on TYPESCRIPT only

Here's a TypeScript program that loops through an array of usernames and prints a special greeting for the 'admin' user and a generic greeting for other users:

const usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

for (const username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


In this code, we define an array usernames containing five or more usernames, including 'admin'. We then loop through the array using a for...of loop. Inside the loop, we check if the current username is 'admin' and print a special greeting for the admin user. For all other users, we print a generic greeting with their username.


// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

write coding on TYPESCRIPT only 

Here's the updated TypeScript program that includes an if test to check if the list of users is empty. If the list is empty, it prints the message "We need to find some users." We also remove all the usernames from the array to ensure the correct message is printed:

const usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const username of usernames) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames from the array
usernames.length = 0; // This empties the array

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

In this updated code, we first check if the usernames array is empty before printing greetings. After that, we use usernames.length = 0 to remove all usernames from the array, and again check if it's empty to print the appropriate message.


// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

write coding on TYPESCRIPT only 

Here's a TypeScript program that simulates checking if new usernames are already in use within the current_users list, while ensuring a case-insensitive comparison:

// Make a list of current_users and new_users
const current_users: string[] = ['Alice', 'Bob', 'Charlie', 'John', 'Mike'];
const new_users: string[] = ['Eric', 'John', 'Sarah', 'Mike', 'Linda'];

// Loop through the new_users list to check for existing usernames
for (const newUsername of new_users) {
    // Convert both the new username and existing usernames to lowercase for a case-insensitive comparison
    const lowerNewUsername = newUsername.toLowerCase();

    if (current_users.some((username) => username.toLowerCase() === lowerNewUsername)) {
        console.log(`The username "${newUsername}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${newUsername}" is available.`);
    }
}


In this code, we loop through the new_users list and use a case-insensitive comparison by converting both the new username and existing usernames to lowercase before checking if they match. If a username is found in the current_users list, it prints a message that the username is not available; otherwise, it prints a message that the username is available.


// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

write coding on TYPESCRIPT only

Here's a TypeScript program that stores numbers from 1 to 9 in an array, loops through the array, and prints the proper ordinal ending for each number:

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = '1st';
    } else if (number === 2) {
        ordinal = '2nd';
    } else if (number === 3) {
        ordinal = '3rd';
    } else {
        ordinal = number + 'th';
    }
    console.log(ordinal);
}


In this code, we create an array of numbers from 1 to 9 and loop through the array. Inside the loop, we use an if-else chain to determine the proper ordinal ending for each number, and we print the result on a separate line.


// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

write coding on TYPESCRIPT only 

Here's a TypeScript program that fulfills your request. It stores three favorite pizza names in an array, uses a for loop to print a sentence for each pizza, and concludes with a statement about liking pizza:

const favoritePizzas: string[] = ['pepperoni', 'margherita', 'supreme'];

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log('I really love pizza!');

In this code, we first define an array favoritePizzas with the names of your favorite pizzas. Then, we use a for loop to iterate through the array and print a sentence for each pizza. Finally, we print an additional sentence expressing your love for pizza outside the loop.


// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

write coding on TYPESCRIPT Only 

Here's a TypeScript program that meets your requirements. It stores the names of three animals in a list, uses a for loop to print a statement about each animal, and concludes with a statement about their common characteristic:

const animals: string[] = ['dog', 'cat', 'rabbit'];

for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log('Any of these animals would make a great pet!');

In this code, we define an array animals with the names of three animals and use a for loop to iterate through the array. Inside the loop, we print a statement for each animal. Finally, outside the loop, we print a statement indicating their common characteristic, which is that any of these animals would make a great pet.


// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

write coding on TYPESCRIPT only 

Here's a TypeScript function called make_shirt() that accepts a size and a message and prints a summary of the shirt's size and the message:

function make_shirt(size: string, message: string): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
}

// Call the function
make_shirt('Large', 'I love TypeScript!');

In this code, the make_shirt() function takes two parameters, size and message. It then prints a sentence summarizing the size and message passed to the function. Finally, we call the function with an example size and message.


// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

write coding on TYPESCRIPT only 

Here's the modified TypeScript make_shirt() function that defaults to a large shirt with the message "I love TypeScript," but allows you to specify a different size or message:

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a small shirt with a different message
make_shirt('Small', 'TypeScript is awesome!');

In this modified code, the make_shirt() function uses default parameters for size and message, so if you don't provide these values, it defaults to a large shirt with the message "I love TypeScript." You can also specify different sizes or messages when calling the function, as demonstrated in the examples.


// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

write coding on TYPESCRIPT only 

Here's a TypeScript function called describe_city() that accepts the name of a city and its country, with the country having a default value. It prints a sentence describing the city and its country:

function describe_city(city: string, country: string = 'default country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York'); // Uses the default country
describe_city('Paris', 'France');


In this code, the describe_city() function has a default value for the country parameter, so if you don't provide a country, it defaults to "default country." We call the function for three different cities, specifying the city and, in some cases, the country, as needed.


// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


write coding on TYPECRIPT only 

Here's a TypeScript function called city_country() that takes the name of a city and its country as arguments and returns a string in the specified format:

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs and print the returned values
const city1 = city_country('Lahore', 'Pakistan');
const city2 = city_country('New York', 'USA');
const city3 = city_country('Paris', 'France');

console.log(city1);
console.log(city2);
console.log(city3);

In this code, the city_country() function takes two parameters, city and country, and returns a string in the specified format. We then call the function with different city-country pairs and print the values that are returned.


// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

write coding on TYPESCRIPT only 

Here's a TypeScript function called make_album() that creates an object describing a music album, which includes the artist name, album title, and an optional parameter for the number of tracks. Then, I'll demonstrate making three album dictionaries:

function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Create three album dictionaries using the make_album function
const album1 = make_album('Artist1', 'Album1');
const album2 = make_album('Artist2', 'Album2', 12); // Includes number of tracks
const album3 = make_album('Artist3', 'Album3', 8);  // Includes number of tracks

// Print the album dictionaries
console.log(album1);
console.log(album2);
console.log(album3);

In this code, the make_album() function accepts the artist name and album title as mandatory parameters and an optional parameter for the number of tracks. The function constructs an object containing artist and title and, if provided, the number of tracks. We then create three album dictionaries using this function and print each one to demonstrate that the objects store the album information correctly.


// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

write coding on TYPESCRIPT only 

Here's a TypeScript program that creates an array of magician's names and passes that array to a function called show_magicians() to print the name of each magician:

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to print the magician's names
show_magicians(magicianNames);



// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

write coding on TYPESCRIPT only 

Here's a TypeScript program that builds upon the previous program from Exercise 39. It includes a new function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician's name, and then calls show_magicians() to verify that the list has been modified:

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + ' the Great');
    }
    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call make_great() to modify the array and store the result in a new array
const greatMagicianNames = make_great(magicianNames);

// Call show_magicians() to print the great magician's names
show_magicians(greatMagicianNames);

In this code, the make_great() function modifies the array of magicians by adding "the Great" to each magician's name and returns a new array with the great magician names. We then call show_magicians() to print the modified list of great magicians.


// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

write coding on TYPESCRIPT only 

Here's a TypeScript program that builds upon the previous program from Exercise 40. It calls the make_great() function with a copy of the array of magicians' names, ensures the original array remains unchanged, and stores the modified names in a separate array. Then, it calls show_magicians() with both arrays to demonstrate the difference:

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + ' the Great');
    }
    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Make a copy of the original array
const originalMagicianNames: string[] = magicianNames.slice();

// Call make_great() with a copy of the array and store the modified names in a new array
const greatMagicianNames = make_great(originalMagicianNames);

// Call show_magicians() with both arrays to display the differences
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);


In this code, we first create a copy of the original array, and then we call make_great() with the copied array to store the modified magician names in a new array. Finally, we use show_magicians() to display both the original magician names and the great magician names.


write coding on TYPESCRIPT only 

Here's a TypeScript function that accepts an array of items for a sandwich and prints a summary of the sandwich being ordered:

function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("\n");
}

// Call the function with different numbers of arguments
make_sandwich('Bread', 'Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Bread', 'Peanut Butter', 'Jelly');
make_sandwich();

In this code, the make_sandwich() function uses the rest parameter ...items to collect as many items as the function call provides. It prints a summary of the sandwich, including the items ordered. We then call the function three times with different numbers of arguments to demonstrate its flexibility.


// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

write coding on TYPESCRIPT only 

In TypeScript, you can create a function that stores information about a car in an object with required parameters for the manufacturer and model name and optional keyword arguments for additional information. Here's how you can do it:

function createCarInfo(manufacturer: string, model: string, options: Record<string, any>): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer,
        model,
        ...options,
    };
    return carInfo;
}

// Call the function with required and optional information
const car = createCarInfo('Toyota', 'Camry', { color: 'Blue', features: ['GPS', 'Leather Seats'] });

// Print the car information
console.log(car);

In this code, the createCarInfo() function takes a required manufacturer and model name and collects additional information as keyword arguments in the options object. We then call the function with the required information (manufacturer and model) and additional optional information (color and features) and print the resulting car information object.

























































































































