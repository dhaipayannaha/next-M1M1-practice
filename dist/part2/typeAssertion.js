"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Mezba";
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Coverted output is: ${Number(value) * 1000}`;
    }
};
const result1 = kgToGMConverter(10);
const result2 = kgToGMConverter("10 kg");
// In this case, as number or as string is a type assertion. It indicates that I am explicitly specifying the expected type of the value.
console.log(result1);
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map