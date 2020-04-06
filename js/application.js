
function changeText(text){
    document.getElementById("p1").innerHTML = text;
}

function addClickHandler(){
    document.getElementsByClassName("grid-container").onclick = function(){
        document.getElementsByClassName("grid-item").innerHTML = "X";
        alert("X");
    }
}

changeText("Tic Tac Toe");
