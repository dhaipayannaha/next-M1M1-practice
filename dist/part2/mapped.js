"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayOfgNum = [1, 2, 3, 4, 5, 6];
const arrayOfString = ["1", "2", "3", "4", "5", "6"];
const mapNumberArrayToStringArray = arrayOfgNum.map((num) => num.toString());
console.log(mapNumberArrayToStringArray);
// type AreaOfString ={
//     height: string
//     width: string
// }
// type AreaOfString = {
//     [key in "height" | "width"] : string;
// }
// type AreaOfString = {
//     [key in keyof AreaOfNum] : string;
// }
// type AreaOfString<T> = {
//     [key in keyof T] : string;
// }
// type AreaOfString<T> = {
//     [key in keyof T] : T[key];
// }
// const area1: Area{ height: string, width: number } = {
//     height: "1",
//     width: 2,
// };
//# sourceMappingURL=mapped.js.map