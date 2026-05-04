class Parents {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(sleepHours: number) {
        return (`${this.name} sleeps for ${sleepHours} hours a day`)
    }

}



class Student extends Parents {}


const student1 = new Student("Naha", 23, "Dhaka")

// console.log(student1.getSleep(15));






class Teacher extends Parents {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)  // this super means parents constructor
        this.designation = designation

    }

    getSleep(sleepHours: number) {
        return (`${this.name} sleeps for ${sleepHours} hours a day`)
    }

    takeClass(numberOfClass: number) {
        return (`${this.name} is taking ${numberOfClass} classes a day`)
    }

}

const teacher1 = new Teacher("Mr. Rahul", 45, "Dhaka", "Lecturer")

console.log(teacher1.takeClass(5));