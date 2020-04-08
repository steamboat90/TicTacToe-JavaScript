
var player = "X";
var winner = "-";


var winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];



function findWinner(){
    for(var i = 0; i < 8; i++){
        if(document.getElementById(winConditions[i][0].toString()).innerHTML === document.getElementById(winConditions[i][1].toString()).innerHTML 
        && document.getElementById(winConditions[i][0].toString()).innerHTML === document.getElementById(winConditions[i][2].toString()).innerHTML
        && document.getElementById(winConditions[i][0].toString()).innerHTML === "X"){
            document.getElementById(winConditions[i][0].toString()).style.backgroundColor = "green";
            document.getElementById(winConditions[i][1].toString()).style.backgroundColor = "green";
            document.getElementById(winConditions[i][2].toString()).style.backgroundColor = "green";
            winner = "X";
        }
        else if(document.getElementById(winConditions[i][0].toString()).innerHTML === document.getElementById(winConditions[i][1].toString()).innerHTML 
        && document.getElementById(winConditions[i][0].toString()).innerHTML === document.getElementById(winConditions[i][2].toString()).innerHTML
        && document.getElementById(winConditions[i][0].toString()).innerHTML === "O"){
            document.getElementById(winConditions[i][0].toString()).style.backgroundColor = "green";
            document.getElementById(winConditions[i][1].toString()).style.backgroundColor = "green";
            document.getElementById(winConditions[i][2].toString()).style.backgroundColor = "green";
            winner = "O";
        }
    }
}


function changeText(text){
    document.getElementById("p1").innerHTML = text;
}

function switchPlayer(){
    if(player === "X"){
        return "O";
    }
    else if(player === "O"){
        return "X";
    }
}


function addClickHandler(c){
    document.getElementById(c.toString()).onclick = function(){
        if(document.getElementById(c.toString()).innerHTML === "" && winner === "-"){
            document.getElementById(c.toString()).innerHTML = player;
            player = switchPlayer();
            findWinner();
        }
    }
}


changeText("Tic Tac Toe - Reload 2 Replay");
for(var cell = 1; cell < 10; cell++){
    addClickHandler(cell);
}
