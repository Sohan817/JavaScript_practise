// number = [2,4,6,8,10];
// squreArray = [];
// number.forEach(function(x){
//     squreArray.push(x*x);
// });
// console.log(squreArray);

//map
number = [2,4,6,8,10];
squreArray = number.map(function(x){
    return x*x;
});
console.log(squreArray);

//filter
num = [2,4,6,8,10,60,45,23,65];
newArray = num.filter(function(x){
    return x>10;
});
console.log(newArray);