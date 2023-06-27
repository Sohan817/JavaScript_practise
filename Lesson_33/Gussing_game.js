var num = new Array()
w = 0;
l = 0;
for(var i = 0; i<=4; i++){
    num[i] = parseInt(prompt("Enter the Number :"));
    var random_number = Math.floor(Math.random()*5)+1;
    if(num[i] == random_number){
        document.write("You have won <br>");
        w++;
    }
    else{
        document.write("You have lost" + "Random Number Was "+random_number +"<br>");
        l++;
    }
}
document.write("You have won "+w+" times" +"<br>"+ "You have lose "+l+"times");