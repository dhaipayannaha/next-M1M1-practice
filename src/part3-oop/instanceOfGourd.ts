// oop instance Of type guard

class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    sleep(numOfHours: number) {
        return (`${this.name} is sleeping for ${numOfHours} hours a day`)
    }


}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    doStudy(numOfHours: number) {
        return (`${this.name} is studying for ${numOfHours} hours a day`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(clusNumber: number) {
        return (`${this.name} is taking ${clusNumber} classes`)
    }
}


// function gourd
const isStudent = (user: Person)  => {
    return user instanceof Student
} // you can try this type of function for teacher


const getUserInfo = (user: Person) =>{
    if(isStudent(user)){
        return user.doStudy(5)
    } else if (user instanceof Teacher){
        return user.takeClass(5)
    }else{
        return user.sleep(5)
    }
}

    

const student1 = new Student("John")
const teacher1 = new Teacher("Jane")
const person1 = new Person("Rahul")

console.log(getUserInfo(person1))
console.log(getUserInfo(student1))
console.log(getUserInfo(teacher1))


// class is used as type thats why as a type we yos class name



