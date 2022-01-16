const inputElement = document.querySelector('input');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function getAllowedNumberOfCharacters(event) {
    const insertedValue = event.target.value;
    const insertedValueLength = insertedValue.length;

    const remainingCharsAllowed = maxAllowedChars - insertedValueLength;
    remainingCharsElement.innerHTML = remainingCharsAllowed;
    if (remainingCharsAllowed <= 10) {
        remainingCharsElement.classList.add("chars-limit-warning");
    }
    else {
        remainingCharsElement.classList.remove("chars-limit-warning");
    }
}

inputElement.addEventListener('input', getAllowedNumberOfCharacters)