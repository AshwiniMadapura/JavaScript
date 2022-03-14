// first divide the problem into modules

// 1. There are 2 football teams, so keep 2 scores for each

let teamScoreOne =0;
let teamScoreTwo =0;
let isGameStopped = false;


// 2. when team1 button clicked, display team1 score

function handleTeamOneClick(){
    teamScoreOne=teamScoreOne+1;
    alert(teamScoreOne +' is Team A score')

}
// 3. when team2 button clicked, display team2 score
function handleTeamTwoClick(){
    teamScoreTwo=teamScoreTwo+1;
    alert(teamScoreTwo +' is Team B score')
    
}
// 4. when do we finish/stop the game?
function handleStopGame(){
    isGameStopped= true;

    if (isGameStopped==true){
        teamScoreOne=0;
        teamScoreTwo=0;
    }
    alert('Both team A and B scores are now 0')

}