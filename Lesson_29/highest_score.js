var score = new Array();
for(var i =0; i<=4 ;i++){
    score[i] = parseInt(prompt("Enter Score:"));
}

function highest_score(s){
    max = s[0];
    for (var j=0; j<=s.length; j++){
        if(s[j] > max){
            max = s[j];
        }
    }
    return max;
}
var result = highest_score(score);
document.write("Highest Score is "+result+"<br>");