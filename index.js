/**
 * Created by Binny Gandhi on 14-09-2016.
 */

var enterInput;
var displayInput;
var resultBool = false;
var operatorBool = false;
var errorBool = false;

$(document).ready(function () {
    enterInput = document.getElementById('enterInput');
    displayInput = document.getElementById('displayInput');
});

function simpleFunction(input) {
    enterInput.style.borderColor = "#ccc";
    switch (input.innerHTML) {
        case 'AC':
            clearScreen();
            break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            if (resultBool) {
                enterInput.innerHTML = '';
                displayInput.innerHTML = '';
            } else if (operatorBool) {
                enterInput.innerHTML = '';
            }
            enterInput.innerHTML += input.innerHTML;
            displayInput.innerHTML += input.innerHTML;
            resultBool = false;
            operatorBool = false;
            break;

        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            if (errorBool) {
                clearScreen();
            }
            errorBool = false;
            resultBool = false;
            operatorBool = true;
            displayInput.innerHTML += input.innerHTML;
            enterInput.innerHTML = input.innerHTML;
            break;

        case '=':
            calculateResult();
            break;
    }
}

function clearScreen() {
    enterInput.innerHTML = '';
    displayInput.innerHTML = '';
}

function calculateResult() {
    var result;
    try {
        result = parseFloat(eval(displayInput.innerText));
        if (!isFinite(result) || isNaN(result)) {
            errorBool = true;
        }
        enterInput.innerHTML = result;
        displayInput.innerHTML = result;
        resultBool = true;
    } catch (err) {
        displayInput.innerHTML = "Incorrect Input";
        enterInput.innerHTML = '';
        enterInput.style.borderColor = "#A94442";
        errorBool = true;
    }
}