//clipboard event
//oncopy,oncut,onpaste

const inputs = document.querySelector("input");
const ps = document.querySelector("p");
inputs.addEventListener("copy",function(){
    //console.log("You have copied");
    ps.innerHTML = "You have copied";
});
inputs.addEventListener("cut",function(){
    //console.log("You have cutted");
    ps.innerHTML = "You have cutted";
});
inputs.addEventListener("paste",function(){
    //console.log("You have pasted");
    ps.innerHTML = "You have pasted";
});