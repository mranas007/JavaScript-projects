let noBtn = document.querySelector("#noBtn");
let okBtn = document.querySelector("#okBtn");
let title = document.querySelector("#title");
let img = document.querySelector(".imagCon img");

// to change the content if okay button cliked
okBtn.addEventListener("click", () => {
    makeChange();
});

//make the "no" Button to change the place
noBtn.addEventListener("mouseover", (e) => {
    makeMove(e);
});

//make the "no" Button to change the place
const makeMove = (e) => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// to change the content if okay button cliked
const makeChange = () => {
    title.innerHTML = "thanks for being friend.";
}