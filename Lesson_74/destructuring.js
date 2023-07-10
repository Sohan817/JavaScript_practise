//Array Destructuring 
const numbers = [10,20,30,40,50];
//const [num1,num2,num3,num4,num5] = numbers;
const [num1,num2,...z] = numbers
console.log(z);

//Swap Variables
let a =20, b= 10;

[a,b] = [b,a]
console.log(a,b);

//Object Destructuring
// const studentInfo = {
//     id : 123,
//     name : "sohan",
//     cgpa : 3.40
// }
// const {id,name} = studentInfo;
//console.log(id);
// Nasted Object Destructuring 
const studentInfo = {
    id : 123,
    name : "sohan",
    cgpa : 3.40,
    language : {
        native : "Bangla",
        begineer : "English"
    }
}
const {id,name,language} = studentInfo;
console.log(language.native);

//function parameter Destructure

function student({id,name}){
    console.log(`${id},${name}`);
}
const student_Info = {
    id : 123,
    name : "sohan",
}
student(student_Info);