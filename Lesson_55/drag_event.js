const divs = document.querySelector("div");
const ps = document.querySelector("p");
ps.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("text",e.target.id);
});
divs.addEventListener("dragover",function(e){
    e.preventDefault();
});
divs.addEventListener("drop",function(e){
    const id = e.dataTransfer.getData("text");
    divs.appendChild(document.getElementById(id));
});