document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("operator");
    const resultParagraph = document.getElementById("result");
    const calculateButton = document.getElementById("calculate");

    calculateButton.addEventListener("click", function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorSelect.value;

        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Cannot divide by zero";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operator";
        }

        resultParagraph.textContent = "Result: " + result;
    });
});
