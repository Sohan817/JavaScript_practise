const number = [10,20,30,40,50];
// const squreNumber = [];

// for(let x=0; x<number.length; x++){
//     console.log(number[x]);
// }
// number.forEach(num);
// function num(x){
//     console.log(x);
// }
// number.forEach(num);
// function num(x){
//     squreNumber.push(x*x);
    
// }
// console.log(squreNumber);

number.forEach(num);
function num(x,index,arr){
    arr[index] = x+5;
}
console.log(number);