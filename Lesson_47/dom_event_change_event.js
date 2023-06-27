console.clear()
// var inputVar = document.querySelector("input[name=name]");

// inputVar.addEventListener("change",changeHandler);

// function changeHandler(e){
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     //console.log(e.target.id);
//     console.log(e.target.value);

// var programs = document.querySelectorAll("input[name=program]");
// // console.log(programs)
// Array.from(programs).map((program)=>{
//     program.addEventListener("change",programHandler);
// });

// function programHandler(e){
//     if(e.target.checked){
//         console.log("chccked");
//         console.log(e.target.value);
//     }
// }
var departments = document.querySelector("#department");
departments.addEventListener("change",departmentHandler);
function departmentHandler(e){
    console.log("checked");
    console.log(e.target.value);
}