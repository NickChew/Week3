

let x=0;
let y=0;
let pContent = document.getElementById ("clickinganywhere");

document.addEventListener ( 'click', () => {
    x= event.clientX;
    y= event.clientY;
    pContent.innerHTML = "X:= " + x + ", Y:= " + y;
})

//alternate method not working yet

// const coordP = document.getElementById('test')

// document.addEventListener('click', (event) => {
//     coordP.textContent = x: ${event.clientX} y: ${event.clientY};

// })