"use strict";
//oop - class - object
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    apecies;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.apecies = species;
        this.sound = sound;
    }
}
const dog = new Animal('Buddy', 'Dog', 'Woof');
console.log(dog.name);
//# sourceMappingURL=class.js.map