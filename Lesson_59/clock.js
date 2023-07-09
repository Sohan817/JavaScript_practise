var clock = document.querySelector(".clock-btn");
var para = document.querySelector(".pid");
clock.addEventListener("click",startClock);

function startClock(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    minutes = Format(minutes);
    second = Format(second);
    var time = hour +":"+minutes+":"+second;
    para.textContent = time;

    setInterval(startClock, 1000);
}

function Format(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}