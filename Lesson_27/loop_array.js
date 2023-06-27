var num = new Array();
for( i = 0; i<=4 ;i++){
    num[i] = parseInt(prompt("Enter Number:"));
}
var sum = 0;
for(var i = 0; i <= 4; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log(sum);