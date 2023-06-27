var myVar = document.querySelector("#head");

myVar.addEventListener("mouseover",myFunction);

function myFunction(){
    myVar.classList.add("my-style");
}
myVar.addEventListener("mouseout",myFunction1);

function myFunction1(){
    myVar.classList.remove("my-style");
}
