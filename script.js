const inputNumber = document.getElementById("inputNumber");

const appendToDisplay = (input) => {
    inputNumber.value += input;
}

const result = () => {
    try {
        inputNumber.value = eval(inputNumber.value);
    }catch(error) {
        inputNumber.value = "Error";
    }
}

const clearDisplay = () => {
    inputNumber.value = "";
}


