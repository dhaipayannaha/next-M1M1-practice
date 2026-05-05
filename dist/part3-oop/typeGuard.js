"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
console.log(add(2, 2));
console.log(add(1, '2'));
console.log(add('1', 2));
console.log(add('1', '2'));
const getUserInfo = (user) => {
    if ("role" in user) {
        console.log(`this is ${user.name} and he is a admin`);
    }
    else {
        console.log(`this is ${user.name} and he is a normal user`);
    }
};
getUserInfo({ name: "John" });
getUserInfo({ name: "Jane", role: "admin" });
//# sourceMappingURL=typeGuard.js.map