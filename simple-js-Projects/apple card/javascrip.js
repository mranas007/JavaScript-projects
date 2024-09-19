
function greenapple() {
    let imgElement = document.querySelector("img");
    imgElement.src = "image/appleimg.png";
    imgElement.style.width="100%";
    imgElement.style.position="relative"
    imgElement.style.top="0"

    document.getElementsByTagName("h1")[0].innerHTML = "GREEN APPLE";

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#405F42"

    let boxColor = document.getElementsByClassName("fbox")[0];
    boxColor.style.backgroundColor = "#6A8948"
};


function yellowapple() {
    let imgElement = document.querySelector("img");
    imgElement.src = "image/yellowlogo.png";
    imgElement.style.width = "86%";
    imgElement.style.position = "relative";
    imgElement.style.top = "22px";

    document.getElementsByTagName("h1")[0].innerHTML = "YELLOW APPLE";

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#E7CD2A"

    let boxColor = document.getElementsByClassName("fbox")[0];
    boxColor.style.backgroundColor = "#e8bc1f"
}


function redapple() {
    let imgElement = document.querySelector("img");
    imgElement.src = "image/redlogo.png";
    imgElement.style.width = "77%";
    imgElement.style.position = "relative";
    imgElement.style.top = "25px";


    document.getElementsByTagName("h1")[0].innerHTML = "RED APPLE";

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#D22527"

    let boxColor = document.getElementsByClassName("fbox")[0];
    boxColor.style.backgroundColor = "#aa2e2f"
}


function blueapple() {
    let imgElement = document.querySelector("img")
    imgElement.src = "image/bluelogo.png";
    imgElement.style.width = "88%";
    imgElement.style.position = "relative";
    imgElement.style.top = "15px";

    document.getElementsByTagName("h1")[0].innerHTML = "BLUE APPLE";
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#325570"

    let boxColor = document.getElementsByClassName("fbox")[0];
    boxColor.style.backgroundColor = "#539dd6"
}


//----------------------------------Add to Cart button-----------------//
function mybutton() {
    let input = document.getElementById("input").value;
    let addNum = input * 100;
    if (input > 0) {
        alert(`You have successfuly Ordered ${input} Apples \n Your total Amount is ${addNum}`)
    } else {
        alert("Please Select your Quantity of Apples")
    }
}