
const button = document.querySelector('#addToDo');
const textArea = document.querySelector('.text');
const input = document.querySelector('#addTask');
let checkLenght = 0
button.addEventListener("click", () => {

    if (input.value == '') {
        alert("Please Add something in your task input");
    } else {
        checkLenght += 1 
        textArea.style.background = 'linear-gradient(93deg, rgba(5, 112, 201, 1) 0%, rgba(227, 255, 166, 1) 100%)';

        let mySpan = document.createElement('span');
        mySpan.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        textArea.appendChild(mySpan);
        input.value = '';
        mySpan.querySelector("i").addEventListener('click', remove);
        function remove() {
            mySpan.remove();
            checkLenght -= 1

            if(checkLenght == 0){
                textArea.style.background = 'transparent';
                return;
            }
        };
    };
});