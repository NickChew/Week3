// plays sound with keys lower or UPPER but no animation, animation when pressed with mouse but no sound!! //

//to detect mouse click//

noOfDrums = document.querySelectorAll(".drum").length;
    for(let i=0 ; i<noOfDrums ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            let butPresd= this.innerHTML;         
            makeSound(butPresd);
            btnAnimation(butPresd);
        });
    }

//detect keyboard press
  
document.addEventListener("keypress", function (event) {
    makeSound(event.code);
    btnAnimation(event.code);
});

//button animation//

function btnAnimation(currentKey) {
    let x = currentKey;
    let activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(() => {
          activeKey.classList.remove("pressed"); 
        },200);
}

//for sound effect//

function makeSound(butPresd) {
    switch (butPresd) {
           case "KeyA":
                 let clap = new Audio("sounds/clap.wav");
                clap.play();
            break;
            
            case "KeyS":
                    let hihat = new Audio("sounds/hihat.wav");
                    hihat.play();
                break;

            case "KeyD":
                    let kick = new Audio("sounds/kick.wav");
                    kick.play();
                break;
          
            case "KeyF":
                let openhat = new Audio("sounds/openhat.wav");
                openhat.play();
                break;
          
            case "KeyG":
                let boom = new Audio("sounds/boom.wav");
                boom.play();
                break;
          
            case "KeyH":
                let ride = new Audio("sounds/ride.wav");
                ride.play();
                break;
          
            case "KeyJ":
                let snare = new Audio("sounds/snare.wav");
                snare.play();
                break;
            
            case "KeyK":
                let tom = new Audio("sounds/tom.wav");
                tom.play();
                break;

            case "KeyL":
                let tink= new Audio("sounds/tink.wav");
                tink.play();
                break;
            
    }
}

// plays sound with keys lower or UPPER but no animation, animation when pressed with mouse but no sound!! //