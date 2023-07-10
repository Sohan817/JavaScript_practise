document.querySelector("#btn-id").addEventListener("click",function(){
    var val = document.querySelector("#numInput").value;
    console.log(val);
    try{
        if(val<5){
            throw "Number is too low";
        }
        else if(val>10){
            throw "Number is too high";
        }
    }catch(error){
        console.log(error);
    }
});