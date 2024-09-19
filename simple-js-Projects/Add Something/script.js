let elements = []

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const textArea = document.querySelector("#textArea");
const clearBtn = document.querySelector("#clearBtn");

btn.addEventListener('click', () => {
    if (input.value != "") {
        elements.unshift({ listItem: input.value })
        input.value = "";
        textArea.innerHTML = "";
        elements.forEach((elem) => {
            textArea.innerHTML += `<li>${elem.listItem}</li> <br>`;
        });
    }
});

clearBtn.addEventListener('click', () => {
    textArea.innerHTML = "";
})
