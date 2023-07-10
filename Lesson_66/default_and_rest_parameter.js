//Default Parameter
const Number=(x = 2)=>{
    console.log(x);
}
Number();
Number(3);

//Rest Parameter
const Number1=(x,y,...z)=>{
    console.log('x = '+x+', y = '+y+',z ='+z);
}
Number1(3,4,6,9,10);
