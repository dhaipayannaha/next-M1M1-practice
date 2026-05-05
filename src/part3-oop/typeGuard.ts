



type Alphanumarics = number | string



const add = (num1: Alphanumarics, num2: Alphanumarics): Alphanumarics => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }
    else {
        return num1.toString() + num2.toString()
    }
}

console.log(add(2, 2));
console.log(add(1, '2'));
console.log(add('1', 2));
console.log(add('1', '2'));


//in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin";
}


const getUserInfo = (user: NormalUser | AdminUser) => {

    if("role" in user){
        console.log(`this is ${user.name} and he is a admin`)
    }
    else{
        console.log(`this is ${user.name} and he is a normal user`)
    }

}

getUserInfo({name: "John"})
getUserInfo({name: "Jane", role: "admin"})