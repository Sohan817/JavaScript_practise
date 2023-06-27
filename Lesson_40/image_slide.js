var photo = ["images/1.jpg","images/2.jpg","images/3.jpg"];
var myPhoto = document.querySelector("img");

count = 0;
function next(){
    count++;
    if(count >= photo.length){
        count = 0;
        myPhoto.src = photo[count];
    }
    else{
        myPhoto.src = photo[count];
    }
}
function prev(){
    count--;
    if(count < 0){
        count = photo.length-1;
        myPhoto.src = photo[count];
    }
    else{
        myPhoto.src = photo[count];
    }
}