
const arrayOfgNum: number[] = [1, 2, 3, 4, 5, 6];

const arrayOfString: string[] = ["1", "2", "3", "4", "5", "6"];


const mapNumberArrayToStringArray: string[] = arrayOfgNum.map((num) => num.toString());
console.log(mapNumberArrayToStringArray);


type AreaOfNum = {
    height: number
    width: number
}
type height = AreaOfNum['height'];


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


type AreaOfString<T> = {
    [key in keyof T] : T[key];
}

const area1: Area{ height: string, width: number } = {
    height: "1",
    width: 2,
};