// script.js
const text = "Welcome To My World";
const span = document.querySelector('h1 span');
let index = 0;

function typeText() {
    if (index < text.length) {
        span.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the speed by changing the timeout value
    }
}

typeText();
