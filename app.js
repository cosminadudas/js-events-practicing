let inputElement = document.querySelector('input');


function getAllowedNumberOfCharacters(event) {
    let insertedValue = event.target.value;

    let insertedValueLength = insertedValue.length;
    let remainingCharsElement = document.getElementById('remaining-chars');
    let remainingCharsAllowed = 60 - insertedValueLength;
    remainingCharsElement.innerHTML = remainingCharsAllowed;
    if (remainingCharsAllowed <= 10) {
        remainingCharsElement.classList.add("chars-limit-warning");
    }
    else {
        remainingCharsElement.classList.remove("chars-limit-warning");
    }
}

inputElement.addEventListener('input', getAllowedNumberOfCharacters)