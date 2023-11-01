"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Animal speaks';
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return 'Woof!';
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return 'Meow!';
    }
}
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');
const outputElement = document.getElementById('output');
outputElement.innerHTML = `
    <p>${dog.name} says: ${dog.speak()}</p>
    <p>${cat.name} says: ${cat.speak()}</p>
  `;
