let input = document.getElementById('inputBox')
let submitBtn = document.getElementById('submitBtn')
let displayText = document.getElementById('displayValue')

submitBtn.addEventListener('click', (event) => {
    console.log(event)
    displayText.textContent = input.value
    input.value = ""
})

document.addEventListener('keypress', (event) => {
    console.log(event)
})

