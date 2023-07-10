function Sum(x,y,z){
    return console.log(x+y+z);
}
const number1 = [1,2,3,4];
//Sum(...number);

const number2 = [5,6,7,8];

//Concat two array using spread operator
number = [...number1,...number2];
console.log(number);

//concat two object
 let p1 = {
    name : "shohan",
    age : 26
 };
 let p2 ={
    nationality : "Bangladeshi",
    occupation : "Unemployed"
 };

 let p = {...p1,...p2};
 console.log(p);