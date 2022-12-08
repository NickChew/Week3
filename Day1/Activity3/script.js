//activity 3
const boxInput = document.getElementsByTagName('input')[0];
const changeColourBtn = document.getElementsByClassName('changeBtn')[0];
const mainHeading = document.getElementById('header');

changeColourBtn.addEventListener('click', () => {
    mainHeading.style.color = boxInput.value
});
console.log(changeColourBtn)

