// js BOM
// popup_boxes-alert,confirm,prompt

// function makeConfirmation(){
//     var values = confirm("Are you want to delete?");
//     if(values){
//         console.log("Deleted");
//     }else{
//         console.log("Not Deleted");
//     }
// }
// makeConfirmation();
function welcomeMessage(){
    var h1 = document.createElement("h1");
    var text;
    var name = prompt("Enter Your Name:");
    if(name == null || name == ""){
        text = "No name found"
    }
    else{
        text = "Welcome "+name;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomeMessage()