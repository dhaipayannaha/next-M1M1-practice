let name: string = 'kolim';
const age: number = 67;
let isPassed: boolean = true
// console.log(name, age, isPassed)

let score: number[] = [45, 56, 34, 56, 98];
let playear: string[] = ['dippo', 'kolim', 'bosundhora']
console.log(score, playear);


const student: [string, number, boolean] = ['kuddus', 56, true];
console.log(student)

const show = (): void => {
    console.log('kolim is going')
}

const names = (name: string): string => {
    return `${name}`
}

console.log(names('kolim'))
console.log(names('rahim'))
show()
