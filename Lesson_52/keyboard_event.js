//keyboardevent
// 1.keydown
// 2.keypress
// 3.keyup-key,keyCode,code,shiftkey,cltkey,repeat
const textarea = document.querySelector('textarea');
textarea.addEventListener("keydown",function(e){
    if(e.repeat){
        alert("Do not repeat");
    }
});
// textarea.addEventListener("keypress",function(){
//     console.log("Key has pressed");
// });
// textarea.addEventListener("keyup",function(e){
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.code);
//     if(e.shiftKey){
//         console.log("shift"+e.key);
//     };
// });

