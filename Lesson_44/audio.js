var len = document.querySelectorAll(".myButton").length;

for(var i= 0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });
}
function audioPlay(text){
    switch(text){
        case("A"):
            var audio = new Audio("Audios/A.mp3");
            audio.play();
            break;
        case("B"):
            var audio = new Audio("Audios/B.mp3");
            audio.play();
            break;
        case("C"):
            var audio = new Audio("Audios/C.mp3");
            audio.play();
            break;
    }
}