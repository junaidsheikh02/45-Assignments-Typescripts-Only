"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Changing;
Guest;
List: You;
just;
heard;
that;
one;
of;
your;
guests;
can;
t;
make;
the;
dinner,
    so;
you;
need;
to;
send;
out;
a;
new set;
of;
invitations.You;
ll;
have;
to;
think;
of;
someone;
to;
invite.
;
const dinnerGuests = ["Albert Einstein", "Oprah Winfrey", "Leonardo da Vinci"];
const guestWhoCantMakeIt = "Albert Einstein"; // The guest who can't make it
// Remove the guest who can't make it from the guest list
const updatedGuests = dinnerGuests.filter(person => person !== guestWhoCantMakeIt);
// Add a new guest to the list
const newGuest = "Marie Curie";
updatedGuests.push(newGuest);
// Print new invitations to the updated guest list
updatedGuests.forEach(person => {
    console.log(`Dear ${person}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
});
