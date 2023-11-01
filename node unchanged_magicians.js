"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const modifiedMagicians = [];
    for (const magician of magicians) {
        modifiedMagicians.push(`the Great ${magician}`);
    }
    return modifiedMagicians;
}
// Create an array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn & Teller"];
// Call makeGreat with a copy of the array and store the modified names
const greatMagicians = makeGreat([...magicianNames]);
// Call the function to show original magicians
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
