// Initial list of guests
const guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print a message indicating the number of people you are inviting to dinner
const numInvited: number = guests.length;
console.log(`I am inviting ${numInvited} people to dinner.`);

// Print a message saying you can invite only two people for dinner
console.log("I can invite only two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    const removedGuest: string | undefined = guests.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

// Print a message to the two people still on your list
for (const guest of guests) {
    console.log(`${guest}, you're still invited to dinner.`);
}

// Remove the last two names from your list to have an empty list
guests.length = 0;
console.log("My guest list is now empty:", guests);
