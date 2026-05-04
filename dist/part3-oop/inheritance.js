"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep() {
        return (`${this.name} sleeps for ${this.age} hours a day`);
    }
}
const student1 = new Student("Naha", 23, "Dhaka");
console.log(student1.getSleep());
//# sourceMappingURL=inheritance.js.map