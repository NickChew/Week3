 // Function to roll the dice give img to number and display

let total=0;
let rndNo1=0;
let score=0;
// let tscore = document.getElementById("total-score");

function rollTheDice() {
    rndNo1 = Math.floor(Math.random() * 6) + 1;   
    document.querySelector(".img1").setAttribute("src","dice" + rndNo1 + ".png");
    if (rndNo1 !==1 && score <20){
        total= (rndNo1+total);
        score=total;
        document.querySelector("p.score").innerHTML = "score="+score;
    }
    else if (score >=20){
        document.querySelector("p.score").innerHTML = "Winner";
        document.querySelector(".img1").setAttribute("src","winner.png");
        total=0;
        score=0;
    }
    else if (rndNo1=1){ 
        document.querySelector("p.score").innerHTML = "Rolled a one!";
        document.querySelector(".img1").setAttribute("src","loser.png");
        total=0;
        score=0;
    }
    
}
    
