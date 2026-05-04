"use strict";
//oop - class - object
// class Animal {
//      name: string;
//     apecies: string;
//      sound: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name: string, species: string, sound: string) {
//         this.name = name
//         this.apecies = species
//         this.sound = sound
//     }
//     makeSound = () => {
//         return (`${this.name} makes this sound: ${this.sound}`)
//     }
// }   
class Animal {
    name;
    species;
    sound;
    //  name: string;
    // apecies: string;
    //  sound: string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name
        // this.apecies = species
        // this.sound = sound
    }
    makeSound = () => {
        return (`${this.name} makes this sound: ${this.sound}`);
    };
}
const dog = new Animal('Buddy', 'Dog', 'Woof');
const cat = new Animal("kitty", "Cat", "Meow");
console.log(dog.name);
console.log(cat.makeSound());
//# sourceMappingURL=class.js.map