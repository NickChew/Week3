// Activity 1
const toggleBtn = document.querySelector('#toggleBtn')
const toggleImg = document.getElementsByClassName('toggleImg')[0]

toggleBtn.addEventListener('click', () => {
    if(toggleImg.style.display === "none"){
        toggleImg.style.display = "block"
    } else {
        toggleImg.style.display = "none"
    }    
})


// Activity 2
const updateImg = document.getElementById('updateImg');
const imageInput = document.getElementById('imageInput');
const displayedImg = document.querySelectorAll('.displayedImg')[0];

updateImg.addEventListener('click', () => {
    displayedImg.src = imageInput.value
    imageInput.value = ""
})