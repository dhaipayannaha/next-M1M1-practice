type Student = {
    name: string,
    age: number,
    isEnrolled: boolean,
    course: string[],
    score: number[],
    info: [string, number, boolean]
}


let student: Student = {
    name: 'kolim',
    age: 67,
    isEnrolled: true,
    course: ['math', 'physics', 'chemistry'],
    score: [45, 56, 34],
    info: ['kolim', 67, true]
}

console.log(student)