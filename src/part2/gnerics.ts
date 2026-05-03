

//usercase 1
// const friends: string[] = ['Mezba', 'John', 'Doe', 'Jane']
const friends: Array<string> = ['Mezba', 'John', 'Doe', 'Jane']

// const rollNumbers: number[] = [1, 2, 3, 4, 5]
const rollNumbers: Array<number> = [1, 2, 3, 4, 5]

// const isElligiable: boolean[] = [true, false, true, false]
const isElligiable: Array<boolean> = [true, false, true, false]


//usecase 2
type GenericArray = Array<number>
const point : GenericArray = [1, 2, 3, 4, 5];

// usecase 3

type GenericArray3<value> = Array<value>
type GenericArray4<T> = Array<T>

const userName : GenericArray4<string> = ['mezba', 'john', 'doe', 'jane'];
const rollNumbers3 : GenericArray3<number> = [1, 2, 3, 4, 5];
const isElligiable3 : GenericArray3<boolean> = [true, false, true, false];


//usecase 4
type coordinates<x, y> = [x, y]

const point1 : coordinates<number, number> = [1, 2]
const point2 : coordinates<string, string> = ['1', '2']


//usecase 5


// const userList: GenericArray<{
//     name: string,
//     age: number
// }> = [
//     {
//         name: 'John',
//         age: 25
//     },
//     {
//         name: 'Jane',
//         age: 26
//     }
// ]