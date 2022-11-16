let form = document.forms[0];
let email = form.email;
let addBtn = form.addBtn;
let errMsg = document.querySelector('.error-msg');
let correctMsg = document.querySelector('.correct-msg');
let addedMsg = document.querySelector('.added-msg');
let validFormat = /^\w+@\w+\.com$/;

// Verify that the email is formatted correctly.
function isCorrect(str) {
    return validFormat.test(str);
}

// Give a hint
// error message
function errHint() {
    addedMsg.classList.remove('display');
    correctMsg.classList.remove('display');
    errMsg.classList.add('display');
}
// correct format message
function correctHint() {
    addedMsg.classList.remove('display');
    errMsg.classList.remove('display');
    correctMsg.classList.add('display');
}
// successfully added message
function addedHint() {
    errMsg.classList.remove('display');
    correctMsg.classList.remove('display');
    addedMsg.classList.add('display');
}

// clear all hint 
function clear() {
    errMsg.classList.remove('display');
    correctMsg.classList.remove('display');
    addedMsg.classList.remove('display');
}

// Test if the input field is empty
function isEmpty(inputEle) {
    return inputEle.value === '' ? true: false;
}

addBtn.addEventListener('click', function (evt) {
    if (isCorrect(email.value)) {
        addedHint();
        return;
    }
    errHint();
});

email.addEventListener('input', () => {
    if (isEmpty(email)) clear();
});

email.addEventListener('change', function () {
    if (isEmpty(email)) return;
    if (isCorrect(email.value)) {
        correctHint();
        return;
    }
    errHint();
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
});