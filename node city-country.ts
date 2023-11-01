function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("Paris", "France");
const location3 = cityCountry("New York", "USA");

console.log(location1);
console.log(location2);
console.log(location3);


Lahore, Pakistan
Paris, France
New York, USA



