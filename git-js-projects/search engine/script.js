const search = document.querySelector("#search");
const storeItem = document.querySelector("#storeItem");
const product = document.querySelectorAll(".card");
const pname = document.querySelector(".card h3");

search.addEventListener("keyup", () => {
    const searchText = search.value.toUpperCase()
    for (let i = 0; i < product.length; i++) {
        let match = product[i].querySelector(".card h3");
        if (match) {
            let textValue = match.innerHTML || match.textContent;
            if (textValue.toUpperCase().indexOf(searchText) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
});