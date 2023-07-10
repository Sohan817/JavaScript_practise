//Handling Error try,catch,finally,throw

try{
    alert("Hi Everyone");
    alert(x);
    alert("Bye Everyone");
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert("Bye Everyone");
}