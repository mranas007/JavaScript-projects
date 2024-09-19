const boxes = document.querySelectorAll(".box");
const contOfBox = document.querySelector("#container");
const palyAgain = document.querySelector(".play-again");
const popUpNotification = document.querySelector(".notifications-container");

let check = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((clickedButton) => {
    clickedButton.addEventListener('click', () => {
        if (check) {
            clickedButton.innerHTML = "X";
            check = false;
        } else {
            clickedButton.innerHTML = "O";
            check = true;
        }
        clickedButton.disabled = true;
        clickedButton.style.cursor = "auto";
        clickedButton.style.color = "black"
        checkWinner()
    })
})

const checkWinner = () => {
    for (let elem of winPatterns) {

        const pos1Val = boxes[elem[0]].innerText;
        const pos2Val = boxes[elem[1]].innerText;
        const pos3Val = boxes[elem[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                setTimeout(() => blockBtn(), 200)
            }

        };

    };
};

// popUp the winner massege
const blockBtn = () => {
    boxes.forEach((btn) => {
        btn.disabled = true;
        btn.style.color = "black";
        btn.style.cursor = "auto";
    });
    popUpNotification.style.top = "40%";
    setTimeout(() => contOfBox.style.opacity = "0", 100);
};

// reset the game and play again 
palyAgain.addEventListener('click', () => {
    contOfBox.style.opacity = "1";
    popUpNotification.style.top = "-100%";
    btn.disabled = false;
    check = true;
    boxes.forEach((boxe) => {
        boxe.innerHTML = "";
    });
});