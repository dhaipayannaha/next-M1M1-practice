let anything: any;

anything = "Mezba";

const kgToGMConverter = (input: string | number) : string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `Coverted output is: ${Number(value) * 1000}`;
    }
}

const result1 = kgToGMConverter(10) as number;
const result2 = kgToGMConverter("10 kg");

// In this case, as number or as string is a type assertion. It indicates that I am explicitly specifying the expected type of the value.

console.log(result1);
console.log(result2);
