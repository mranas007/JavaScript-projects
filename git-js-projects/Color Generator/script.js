let button = document.querySelector("#button");
let button2 = document.querySelector("#button2");

let span = document.querySelector('#span');
let main = document.querySelector(".main");
let hexColor;
button.addEventListener('click', excuteMyFunction);
function excuteMyFunction() {
    hexColor = `#${Math.random().toString(16).slice(2, 8)}`
    span.innerHTML = hexColor
    main.style.backgroundColor = hexColor
}

button2.addEventListener("click", copyColor)
function copyColor() {
    navigator.clipboard.writeText(hexColor);
}
