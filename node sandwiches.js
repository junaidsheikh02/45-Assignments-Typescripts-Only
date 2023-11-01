"use strict";
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some items.");
    }
    else {
        console.log("Your sandwich contains the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log();
}
// Call the function with different numbers of arguments
makeSandwich("Bread", "Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Baguette", "Chicken", "Cheese");
makeSandwich(); // Empty sandwich
