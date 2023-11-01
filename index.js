Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const personName = "Eric";
const message = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);


Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName = "John Doe";
const lowerCaseName = personName.toLowerCase();
const upperCaseName = personName.toUpperCase();
const titleCaseName = personName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

console.log("Lowercase: " + lowerCaseName);
console.log("Uppercase: " + upperCaseName);
console.log("Titlecase: " + titleCaseName);


Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:


const quoteElement = document.getElementById('quote');

const famousQuote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";

quoteElement.textContent = `${author} once said, "${famousQuote}"`;


Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const quoteElement = document.getElementById('quote');

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
const additionResult = 5 + 3;
console.log(`Addition Result: ${additionResult}`);

// Subtraction
const subtractionResult = 10 - 2;
console.log(`Subtraction Result: ${subtractionResult}`);

// Multiplication
const multiplicationResult = 2 * 4;
console.log(`Multiplication Result: ${multiplicationResult}`);

// Division
const divisionResult = 16 / 2;
console.log(`Division Result: ${divisionResult}`);


You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);

console.log(5 + 3);


Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favoriteNumber = 7; // Replace 7 with your favorite number
const message = `My favorite number is ${favoriteNumber}.`;
console.log(message);


Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

const favoriteNumber = 7; // Replace 7 with your favorite number
const message = `My favorite number is ${favoriteNumber}.`; // Create a message
console.log(message); // Print the message to the console


Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Store the names of your friends in an array
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Print each person's name one at a time
for (const name of names) {
  console.log(name);
}


Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

<!DOCTYPE html>
<html>
<head>
  <title>Greetings to Friends</title>
</head>
<body>
  <script>
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const greetingMessage = "Hello, ";
    
    for (const name of names) {
      const personalizedMessage = greetingMessage + name + "!";
      console.log(personalizedMessage);
    }
  </script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
  <title>Greetings to Friends</title>
</head>
<body>
  <script type="text/javascript">
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const greetingMessage = "Hello, ";
    
    for (const name of names) {
      const personalizedMessage = greetingMessage + name + "!";
      console.log(personalizedMessage);
    }
  </script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
  <title>Greetings to Friends</title>
  <style>
    /* CSS styles for greeting messages */
  </style>
</head>
<body>
  <div class="greeting-message">
    <span>Hello, Alice!</span>
    <span>Hello, Bob!</span>
    <span>Hello, Charlie!</span>
    <span>Hello, David!</span>
    <span>Hello, Eve!</span>
  </div>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
  <title>Greetings to Friends</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="greeting">
    <span>Hello, <span class="name">Alice</span>!</span>
    <span>Hello, <span class="name">Bob</span>!</span>
    <span>Hello, <span class="name">Charlie</span>!</span>
    <span>Hello, <span class="name">David</span>!</span>
    <span>Hello, <span class="name">Eve</span>!</span>
  </div>
</body>
</html>


Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Define an array of your friends' names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Define the common greeting message
const greetingMessage = "Hello, ";

// Iterate through the names and print personalized greetings
for (const name of names) {
  const personalizedMessage = greetingMessage + name + "!";
  console.log(personalizedMessage);
}


Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Define an array of your favorite modes of transportation
const modesOfTransportation = ["motorcycle", "car", "bicycle", "scooter"];

// Iterate through the array and print statements
for (const mode of modesOfTransportation) {
  console.log(`I would like to own a ${mode}.`);
}


Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Create an array of dinner guests
const dinnerGuests = ["Albert Einstein", "Leonardo da Vinci", "Marilyn Monroe"];

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});


Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.



// Create an array of dinner guests
const dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print the guest who can't make it
const guestCantMakeIt = 'Marilyn Monroe';
console.log(`${guestCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const newGuest = 'Isaac Newton';
const indexOfCantMakeIt = dinnerGuests.indexOf(guestCantMakeIt);
if (indexOfCantMakeIt !== -1) {
  dinnerGuests[indexOfCantMakeIt] = newGuest;
}

// Print a new set of invitation messages
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});


More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

Here's how you can add more guests to the dinner list, print a message about the bigger dinner table, and print a new set of invitation messages using JavaScript (JS):

// Create an array of dinner guests
const dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Isaac Newton'];

// Print a message about the bigger dinner table
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

CSS (for styling) and TypeScript (TS) are similar to the HTML/JS example provided above. You can use the same CSS for styling.

JavaScript (JS) and Python are similar to TypeScript, where you need to adjust the syntax according to the programming language:

JavaScript (JS):

const guests = ['Albert Einstein', 'Leonardo da Vinci', 'Isaac Newton', 'Marie Curie', 'Nikola Tesla', 'Galileo Galilei'];

// Print a message that you can invite only two people
console.log("Sorry, we can invite only two people for dinner.");

// Remove guests one at a time until only two names remain
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining people
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Remove the last two names to have an empty list
guests.splice(0, 2);

// Print the empty list
console.log("Remaining guests: " + guests.join(', '));


/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */}

JS:

const destinations = [
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


{/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

 */}

Certainly! You can add a message indicating the number of people you are inviting to dinner to any of the programs from Exercises 14 through 18. Here's an example using JavaScript (JS):

JS:

const dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});

You can add a similar message in any of the provided programming languages, including TypeScript (TS), HTML, CSS, and Python, using the corresponding syntax. Just place the message at the beginning of your code to indicate the number of people you are inviting to dinner.


JavaScript (JS):

const dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});

Both of these examples indicate the number of people invited to dinner and send invitations to the guests. You can choose either TypeScript or JavaScript based on your preference.


{/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */}

JavaScript (JS):

const dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Marilyn Monroe'];

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// Send invitations
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us for a wonderful evening.`);
});



{/* Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */}

JavaScript (JS):

const mountains = ['Mount Everest', 'K2', 'Matterhorn', 'Kilimanjaro', 'Denali'];

// Print the list of mountains
console.log('List of Mountains:', mountains);

{/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */}

They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

write code on js only 

Certainly! Here's a JavaScript program that creates objects containing information about books, including their titles and authors:

// Define an array of book objects
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
];

// Loop through the array and print information about each book
books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log('-------------------');
});

In this JavaScript program, we define an array of book objects, where each object contains the title and author of a book. We then loop through the array to print information about each book.

You can modify the list of books and their properties as needed for your specific use case.












