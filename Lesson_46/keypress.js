c = 0;
document.querySelector("#ta").addEventListener("keypress",function(event){
    var text = event.key;
    c++;
    document.querySelector("p").innerHTML = "You have Pressed "+text+" "+c;
});