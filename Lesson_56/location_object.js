console.clear();

var locationVar = document.querySelector(".location-div");

var p1 = locationVar.children[0];
p1.textContent = location.href;

var p1 = locationVar.children[1];
p1.textContent = location.protocol;

var p1 = locationVar.children[2];
p1.textContent = location.hostname;

var p1 = locationVar.children[3];
p1.textContent = location.port;

var p1 = locationVar.children[4];
p1.textContent = location.pathname;

var buttonV = document.querySelector("button");
buttonV.addEventListener("click", function(){
    location.assign("https://www.youtube.com/");
});
