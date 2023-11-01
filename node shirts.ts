function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`This shirt is size ${size} and has the message: '${message}'`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt("Medium");

// Make a small shirt with a different message
makeShirt("Small", "TypeScript is awesome!");






