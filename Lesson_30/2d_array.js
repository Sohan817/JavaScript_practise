var playerInfo = [
["Tamim",12],
["Liton",30],
["Santo",56],
["Sakib",44],
["Musfiq",34]];

function highest_score(playerInfo){
    var highest_scoreer = playerInfo[0][0];
    var score = playerInfo[0][1];
    for(var i = 1; i < playerInfo.length; i++){
            if(playerInfo[i][1] > score){
                score = playerInfo[i][1];
                highest_scoreer = playerInfo[i][0];
            }     
    }
    return highest_scoreer;
}
var result = highest_score(playerInfo);

document.write("Highest Score = "+result);
