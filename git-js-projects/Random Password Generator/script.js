let clickToDisplay = document.querySelector('#button');
let copy = document.querySelector('#copy');
let passwordDisplay = document.querySelector('#password');

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let intiger = "1234567890";
let spacailCharSet = '!@#$%&*()_/|';
let length = 12;

let allChar = upperCase + lowerCase + intiger + spacailCharSet;

clickToDisplay.addEventListener('click', passwordGenerate);
function passwordGenerate() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += intiger[Math.floor(Math.random() * intiger.length)];
    password += spacailCharSet[Math.floor(Math.random() * spacailCharSet.length)];
    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    };
    passwordDisplay.value = password;
}

copy.addEventListener('click', copyText)
function copyText() {
    passwordDisplay.select()
    document.execCommand('copy')
}

let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearDisplay);
function clearDisplay() {
    passwordDisplay.value = '';
}
