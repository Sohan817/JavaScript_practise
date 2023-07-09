//focuseEvent
// 1.onblur
// 2.onfocus
// 3.onfocusin
// 4.onfocusout
const inputs = document.querySelector("input");
inputs.addEventListener("blur",function(e){
    //console.log("blur is occured");
    // inputs.style.backgroundColor = "transparent";
    // inputs.style.padding = "1rem";
    console.log(e.target.value);
    inputs.value = e.target.value.toUpperCase();
});
// inputs.addEventListener("focus",function(){
//     //console.log("focus is occured");
//     inputs.style.backgroundColor = "orange";
//     inputs.style.padding = "2rem";
// });
// inputs.addEventListener("focusin",function(){
//     console.log("focusin is occured");
// });

// inputs.addEventListener("focusout",function(){
//     console.log("focusout is occured");
// });


