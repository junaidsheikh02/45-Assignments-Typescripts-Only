function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Process additional keyword arguments (options)
    for (const option of options) {
        const keys = Object.keys(option);
        for (const key of keys) {
            car[key] = option[key];
        }
    }

    return car;
}

// Call the function to create a car object with additional properties
const carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });

// Print the car object to verify the information
console.log(carInfo);




