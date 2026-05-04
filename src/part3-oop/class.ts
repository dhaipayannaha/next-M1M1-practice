//oop - class - object
// class Animal {
//      name: string;
//     apecies: string;
//      sound: string;

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
    //  name: string;
    // apecies: string;
    //  sound: string;

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name
        // this.apecies = species
        // this.sound = sound
    }

    makeSound = () => {
        return (`${this.name} makes this sound: ${this.sound}`)
    }
}   

const dog = new Animal('Buddy', 'Dog', 'Woof');
const cat = new Animal("kitty", "Cat", "Meow");

console.log(dog.name);
console.log(cat.makeSound());
