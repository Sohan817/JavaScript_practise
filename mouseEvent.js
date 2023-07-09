//mouse event didn't work with
//--<html>,<head>,<meta>,<title><br><style><script><iframe><param><base><bdo>

//mouse event work with
// 1.onclick
// 2.dblclick
// 3.mousedown
// 4.mouseup
// 5.mouseenter
// 6.mouseleave
// 7.mousemove
// 8.mouseover
// console.clear()
// const div = document.querySelector("div");
// div.addEventListener("click", function(e){
//     //console.log("Mouse has clicked");
//     //console.log(e);
//     //console.log(e.target);
//     //get id name
//     //console.log(e.target.id);
//     //get class name
//     //console.log(e.target.className);
//     //get inner html element
//     //console.log(e.target.innerHTML);
//     //get text content
//     //console.log(e.target.textContent);
// });
// div.addEventListener("dblclick", function(){
//     console.log("Mouse has double clicked");
// });
// div.addEventListener("mousedown", function(){
//     console.log("Mouse has down");
// });
// div.addEventListener("mouseup", function(){
//     console.log("Mouse has up");
// });
// div.addEventListener("mouseenter", function(){
//     console.log("Mouse has entered");
// });
// div.addEventListener("mouseleave", function(){
//     console.log("Mouse has leave");
// });
// div.addEventListener("mousemove", function(e){
//     //console.log("Mouse has moved");
//     //get x and y axis valuse base on window
//     //console.log("clientX = "+e.clientX+" clientY = "+e.clientY);
//     //get x and y axis valuse base on element
//     console.log("offsetX = "+e.offsetX+" offsetY = "+e.offsetY);
// });
// div.addEventListener("mouseover", function(){
//     console.log("Mouse has over");
// });

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
Array.from(buttons).map((button)=>
    button.addEventListener("click",function(e){
        console.log(e.target.innerText);
    })
);
