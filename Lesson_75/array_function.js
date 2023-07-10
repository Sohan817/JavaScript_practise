// find()

let numbers = [1,5,3,4,7];

let first_number = numbers.find((x) => x%2===0 );
let first_index = numbers.findIndex((x) => x%2===0 );

console.log(first_number);
console.log(first_index);

//Find() on object;

const student = [
    {
        id : 123,
        cgpa : 2.4
    },
    {
        id : 124,
        cgpa : 3.4
    },
    {
        id : 125,
        cgpa : 4.4
    }
]
console.log(student.find((x) => x.cgpa > 3));