interface User {
    name: string;
    age: number;
}

interface Role {
    role: 'admin' | 'user' | 'editor';
}

type UserWithRole = User & Role;
interface iUserWithRoll extends User, Role {}

const user: iUserWithRoll = {
    name: "Mezba",
    age: 25,
    role: 'admin'
}

// console.log(user);

// interface is working for object, that means spacial object like array object, function. but interface can not work for primitive type data. thats main reason is it started with object formet and type started  = sign. interface mostly use in oop.


interface Friends {
    [index: number] : string
}

const friends: Friends = ["A", "B", "C", "D"];

// console.log(friends);


interface add {
    (num1: number, num2: number) : number
}

const addNumber: add = (num1, num2) => {
    return num1 + num2;
}

// console.log(addNumber(10, 20));


// when we will face array and function then we will use interface as as type