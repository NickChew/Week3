
let heading = document.getElementById('heading')

heading.addEventListener('mouseover', () => {           // when mouse is over change to hello world
    heading.textContent = "Hello World"
})

heading.addEventListener('mouseout', () => {            // when mouse is not over change back
    heading.textContent = "JS DOM"
})


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