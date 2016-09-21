/**
 * Created by Binny Gandhi on 14-09-2016.
 */

var enterInput;
var displayInput;

$(document).ready(function () {
    enterInput = document.getElementById('enterInput');
    displayInput = document.getElementById('displayInput');
});

function numbers(input) {
    enterInput.style.borderColor = "#ccc";
    var currentLastCharacter = displayInput.innerHTML.slice(-1);
    var currentFirstCharacter = enterInput.innerHTML.charAt(0);

    if ("+-*/%".indexOf(currentLastCharacter) < 0) {
        displayInput.innerHTML = '';
    }
    if (input == '.') {
        fractionNumbers(input);
    } else {
        if ("+-*/%".indexOf(currentFirstCharacter) < 0) {
            enterInput.innerHTML = input.innerHTML;
        } else {
            enterInput.innerHTML += input.innerHTML;
        }
        displayInput.innerHTML += input.innerHTML;
    }
}

function fractionNumbers(input) {
    enterInput.innerHTML += input.innerHTML;
    displayInput.innerHTML += input.innerHTML;
}

function operators(input) {
    displayInput.innerHTML = displayInput.innerHTML + input.innerHTML;
    enterInput.innerHTML = input.innerHTML;
}

function clearScreen() {
    enterInput.innerHTML = '';
    displayInput.innerHTML = '';
}

function calculateResult() {
    var result;
    try {
        result = parseFloat(eval(displayInput.innerText));
        enterInput.innerHTML = result;
        displayInput.innerHTML = result;
    } catch (err) {
        displayInput.innerHTML = "Incorrect Input";
        enterInput.style.borderColor = "#A94442";
    }


}