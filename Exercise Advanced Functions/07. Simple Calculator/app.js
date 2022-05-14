function calculator() {
    let numOne;
    let numTwo;
    let resultElement;
    function init(selector1, selector2, resultSelector) {
        numOne = document.querySelector(selector1);
        numTwo = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        resultElement.value = Number(numOne.value) + Number(numTwo.value);
    }
    function subtract() {
        resultElement.value = Number(numOne.value) - Number(numTwo.value);
    }

    return obj = {
        init,
        add,
        subtract,
    };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
