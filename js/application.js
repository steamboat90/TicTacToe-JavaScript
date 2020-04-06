
function changeText(text){
    document.getElementById("p1").innerHTML = text;
    document.getElementsByClassName("grid-item").addEventListener("mouseover", alert());
}

function addClickListener(){
    //document.getElementById("top").addEventListener("mouseover", changeText(4));
    document.getElementsByClassName("grid-item").addEventListener("onclick", alert());
}

changeText("Tic Tac Toe");
