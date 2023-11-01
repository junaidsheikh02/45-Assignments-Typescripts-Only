"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Create an array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn & Teller"];
// Call makeGreat to modify the array
makeGreat(magicianNames);
// Call the function to show magicians
showMagicians(magicianNames);
