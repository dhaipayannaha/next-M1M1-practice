"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithObj = (value) => {
    return [value];
};
const createArrayWithGenerics = (value) => {
    return [value];
};
const result1 = createArrayWithGenerics('apple');
const result2 = createArrayWithGenerics(123);
const result3 = createArrayWithGenerics(true);
const result4 = createArrayWithGenerics({ id: 1, name: 'John' });
//tuple must be two value.
const creatArrayWithTuple = (value1, value2) => {
    return [value1, value2];
};
const result5 = creatArrayWithTuple(1, 'apple');
const result6 = creatArrayWithTuple(true, 123);
const addStudentToCourse = (syudentInfo) => {
    return {
        course: 'next Level',
        ...syudentInfo
    };
};
const student1 = {
    id: 1,
    name: 'John',
    hasPen: true
};
const student2 = {
    id: 2,
    name: 'Jane',
    hasPen: false,
    hasCar: true,
};
const result7 = addStudentToCourse(student1);
const result8 = addStudentToCourse(student2);
console.log(result7);
console.log(result8);
//# sourceMappingURL=genericsFunction.js.map