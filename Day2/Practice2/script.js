// Practice 2
const submitBtn = document.getElementById('submitBtn')
const input = document.getElementById('toDoInput')
const list = document.getElementById('list')
const removeBtn = document.getElementById('removeBtn')
const supriseBtn =  document.getElementById('supriseBtn')
const allListItems = document.querySelectorAll('li')
const closeBtn = document.getElementById('closeBtn')
const openBtn = document.getElementById('openBtn')

// createElement generates a new element
submitBtn.addEventListener('click', () => {
    // store the new element in a variable
    let newItem = document.createElement('li')
    // make any changes to the new element (adding the text that is in the input to the new tags text)
    newItem.textContent = input.value
    // appendChild method adds new item to the page so we can see it on the browser
    list.appendChild(newItem)
})

// removeChild method removes a specified child element
removeBtn.addEventListener('click', () => {
    // target the last li element it can find
    let lastItem = document.querySelector('li:last-child')
    // remove the last li element from the ul
    list.removeChild(lastItem)
})

supriseBtn.addEventListener ('click', () => {
    heading.textContent="!!SUPRISE!!"
    setTimeout(() => {
        heading.textContent = ''
    }, 1000);
})

// ADD EVENT TO MULTIPLE ELEMENTS
// using the forEach array method to apply the same event listener to multiple items
// return an array of all li elements
// set at top - const allListItems = document.querySelectorAll('li');

// loop through the array of li elements using the forEach method
allListItems.forEach((listItem) => {
    // the 'listItem' parameter is a reference to each individual item in the array
    listItem.addEventListener('click', (event) => {
        // removing the element that triggered the event (event.target) and removing it from the ul tag
        list.removeChild(event.target)
    })
})

// EVENT BUBBLING
// making use of event bubbling to add a hover effect to each li element whilst only applying the event to the ul tag
list.addEventListener('mouseover', (event) => {
    // gets the textContent of the element that triggered the event (each li tag in the ul) and changing it to uppercase
    event.target.textContent = event.target.textContent.toUpperCase()
})

list.addEventListener('mouseout', (event) => {
    // does the same as the above code but changes the text to lowercase when the mouse leaves the element
    event.target.textContent = event.target.textContent.toLowerCase()
})
    //when click on close button displays nothing or closes button
closeBtn.addEventListener('click', () => {
    closeBtn.parentNode.style.display = 'none'
})
    //when click on open button displays or opens button
openBtn.addEventListener('click', () =>{
    openBtn.previousElementSibling.style.display = 'block'
})
