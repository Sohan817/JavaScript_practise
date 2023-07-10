
const student = [
    {
        name : "Sohan",
        age : 26,
        cgpa : 3.40
    },
    {
        name : "Suborna",
        age : 24,
        cgpa : 3.95
    },
    {
        name : "Rahim",
        age : 27,
        cgpa : 2.40
    },
    {
        name : "Karim",
        age : 28,
        cgpa : 2.65
    }
];
//Traditional Function
// const newArray = student.filter(function(x){
//     return x.cgpa>3;
// }).map(function(y){
//     return y.name;
// })
// console.log(newArray);

//Arrow Function

const studentNmae = () =>student.filter((x)=>x.cgpa>3).map((y)=>y.name);
console.log(studentNmae());
