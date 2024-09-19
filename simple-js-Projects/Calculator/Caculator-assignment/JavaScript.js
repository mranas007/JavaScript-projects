function appendToDislpay(value) {
    document.getElementById("display").value += value;
}
function clearLastCharacter() {
    let character = document.getElementById("display").value;
    document.getElementById("display").value = character.slice(0, -1)
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let displayElement = document.getElementById("display").value;
        let exprasion = eval(displayElement);
        if (exprasion > 0) {
            document.getElementById("display").value = exprasion;
        }else{
            document.getElementById("display").value = "please insert your number"
        }

    } catch (error) {
        document.getElementById("display").value = "Error"
    }
}