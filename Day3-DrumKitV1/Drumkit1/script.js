 // <!-- Works but not with mouse -->

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {                                       // plays sound according to keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));   // performs transition when key pressed
document.addEventListener('keydown', playSound);

const clickdBtn = document.getElementById(`clickdBtn`);
    
  // <!-- Works but not with mouse -->
  // Need to add mouse event listener click when pressing button then play sound
  // clickdBtn.addEventListener(`click`, data-key);
  //  if (clickdBtn = (audio === key)){
  //   playSound(e)
  //  }
