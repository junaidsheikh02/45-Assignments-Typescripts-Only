class Animal {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): string {
      return 'Animal speaks';
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    speak(): string {
      return 'Woof!';
    }
  }
  
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    speak(): string {
      return 'Meow!';
    }
  }
  
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  const outputElement = document.getElementById('output')!;
  outputElement.innerHTML = `
    <p>${dog.name} says: ${dog.speak()}</p>
    <p>${cat.name} says: ${cat.speak()}</p>
  `;
  