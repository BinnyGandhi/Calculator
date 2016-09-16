/**
 * Created by Binny Gandhi on 14-09-2016.
 */

var displayInput;

$(document).ready(function () {
    displayInput = $('#displayInput');
});

$(document).keypress(function (e) {
    if (e.which == 13) {
        calculateResult();
    }
});

function display(input) {
    displayInput.val(displayInput.val() + input.innerText);
}

function clearScreen() {
    displayInput.val('');
}

function calculateResult() {
    displayInput.val(eval(displayInput.val()));
}