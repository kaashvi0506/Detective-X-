let inventory = [];

function collectClue(clue){

    if(inventory.includes(clue)){
        return;
    }

    inventory.push(clue);

    const li = document.createElement("li");
    li.innerHTML = "✓ " + clue;

    document
        .getElementById("inventoryList")
        .appendChild(li);

    alert("Clue Found: " + clue);

    if(inventory.length === 4){
        document
            .getElementById("solveBtn")
            .disabled = false;

        alert(
            "You found all clues! Solve the case."
        );
    }
}

function solveCase(){

    let answer = prompt(
        "Who stole the Crimson Diamond?\n\n"+
        "Type:\n"+
        "butler\n"+
        "maid\n"+
        "heir"
    );

    answer = answer.toLowerCase();

    if(answer === "heir"){

        alert(
            "🏆 CASE SOLVED!\n\n"+
            "The Heir stole the diamond "+
            "to claim the family fortune."
        );

    }else{

        alert(
            "❌ Wrong suspect.\n\n"+
            "The criminal escaped!"
        );
    }
}

let seconds = 900;

function updateTimer(){

    let mins =
        Math.floor(seconds/60);

    let secs =
        seconds%60;

    if(secs < 10){
        secs = "0"+secs;
    }

    document
        .getElementById("time")
        .innerHTML =
        mins + ":" + secs;

    if(seconds <= 0){

        alert(
            "⏰ GAME OVER!\n"+
            "The thief escaped."
        );

        location.reload();
    }

    seconds--;
}

setInterval(updateTimer,1000);
updateTimer();
