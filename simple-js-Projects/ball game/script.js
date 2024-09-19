let boll = document.querySelector("#boll");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    btn.innerHTML = "Up"
    boll.style.bottom = "200px";
    setTimeout(() => {
        removeClass();
    }, 400)
});

function removeClass() {
    boll.style.bottom = "0px";
}