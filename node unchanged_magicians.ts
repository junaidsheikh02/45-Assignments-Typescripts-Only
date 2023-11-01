function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];

    for (const magician of magicians) {
        modifiedMagicians.push(`the Great ${magician}`);
    }

    return modifiedMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller"];

// Call makeGreat with a copy of the array and store the modified names
const greatMagicians: string[] = makeGreat([...magicianNames]);

// Call the function to show original magicians
console.log("Original Magicians:");
showMagicians(magicianNames);

// Call the function to show great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
