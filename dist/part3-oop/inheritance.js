"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parents {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(sleepHours) {
        return (`${this.name} sleeps for ${sleepHours} hours a day`);
    }
}
class Student extends Parents {
}
const student1 = new Student("Naha", 23, "Dhaka");
// console.log(student1.getSleep(15));
class Teacher extends Parents {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address); // this super means parents constructor
        this.designation = designation;
    }
    getSleep(sleepHours) {
        return (`${this.name} sleeps for ${sleepHours} hours a day`);
    }
    takeClass(numberOfClass) {
        return (`${this.name} is taking ${numberOfClass} classes a day`);
    }
}
const teacher1 = new Teacher("Mr. Rahul", 45, "Dhaka", "Lecturer");
console.log(teacher1.takeClass(5));
//# sourceMappingURL=inheritance.js.map