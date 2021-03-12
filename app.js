let score = [0,1,2,3,4,5,6];
var turn;
// team 1 details
var team1 = {
    name: "India",
    runs: [],
    score: 0
}
var team2 = {
    name: "Srilanka",
    runs: [],
    score: 0
}

window.onload = () => {
    // Decide who is going to bat first 
    selectTurn();
    //Update the text of the button
    updateButtonText();
    //update the Initial text
    updateScore();
    //update team names
    updateNames();
}
// doubt
let selectTurn = () => {
    turn = Math.round(Manth.random())+1;
}

let updateButtonText = () => {
    var button = document.getElementById('striker-button');
    var result = document.getElementById('result');
    result.style.visibility = "";
    // check if game is over or not
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
    
    //check if mathc is draw
    result.textContent = team1.score === team2.score ? `It is a draw` : `${team1.score>team2.score ? team1.name : team2.name} Wins`;
    }
    else {
        turn = team1.runs.length === 6 ? 2: team2.runs.length === 6 ? 1: turn;
        button.textContent = `${turn === 1 ? team1.name: team2.name} Batting`;

    }
}

let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
}

let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

function ButtonClick() {
    var runs = score[Math.floor(Math.randon()*score.length)];
    runs = runs === 5 ? "W" : runs;
    if(turn === 1){
        team1.runs.push(runs);
        team1.score = calculateScore(team1.runs);
    }
    else {
        team2.runs.push(runs);
        team2.score = calculateScore(team2.runs);
    }

    updateButtonText();
    updateScore();
}

function calculateScore(runs) {
    return runs.map( num => {
        return num == 'W' ? 0: num;
    }).reduce((total,num) => total+num );
}

function updateRuns() {
    var teamOne = document.getElementById('team-1-round-runs').children;
    var teamTwo = document.getElementById('team-2-round-runs').children;
    team1.runs.forEach((runs,index) => {
        teamOne[index].textContent = runs;
    })
    team2.runs.forEach((runs,index) => {
        teamTwo[index].textContent = runs;
    })
}