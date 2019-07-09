var firstOperand = 0;
var secondOperand = 0;
const defaultValue = "0";
var currentFunc;

var divideFunction = function (left, right) {
    return Number(left) / Number(right);

}
var multiplyFunction = function (left, right) {
    return Number(left) * Number(right);

}
var addFunction = function (left, right) {
    return Number(left) + Number(right);

}
var subtractFunction = function (left, right) {
    return Number(left) - Number(right);

}

var outputArea = document.querySelector('.output');
var divideArea = document.querySelector('.divide');
var multiplyArea = document.querySelector('.multiply');
var addArea = document.querySelector('.add');
var subtractArea = document.querySelector('.subtract');
var equalsArea = document.querySelector('.equals');
var cancelArea = document.querySelector('.cancel');
var backwardsArea= document.querySelector('.backwards');

document.querySelectorAll('.number').forEach(function (element) {
    element.addEventListener('click', function () {
        if (outputArea.innerText === defaultValue) {
            outputArea.innerText = "";
        }

        let operandsBuffer = outputArea.innerText + event.target.innerText;
        outputArea.innerText = operandsBuffer;
    });
});

divideArea.addEventListener('click', function (event) {
    firstOperand = outputArea.innerText;
    currentFunc = divideFunction;
    outputArea.innerText = defaultValue;
});

multiplyArea.addEventListener('click',function (event) {
    firstOperand = outputArea.innerText;
    currentFunc = multiplyFunction;
    outputArea.innerText = defaultValue;
});

addArea.addEventListener('click',function (event) {
    firstOperand = outputArea.innerText;
    currentFunc = addFunction;
    outputArea.innerText = defaultValue;
});

subtractArea.addEventListener('click',function (event) {
    firstOperand = outputArea.innerText;
    currentFunc = subtractFunction;
    outputArea.innerText = defaultValue;
});

equalsArea.addEventListener('click',function (event) {
    secondOperand = outputArea.innerText;

    if (currentFunc != null) {
        let result = currentFunc.apply(this, [firstOperand, secondOperand])
        outputArea.innerText = result;
    }
});

cancelArea.addEventListener('click',function (event) {
    firstOperand = 0;
    secondOperand = 0;
    currentFunc = null;
    outputArea.innerText = defaultValue;
});




