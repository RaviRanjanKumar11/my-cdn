// Typing Effect
function typeText(element, text, speed = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    element.innerHTML = "";
    type();
}

// Fade-In Effect
function fadeInElement(element, duration = 1000) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100);
}

window.myCDNAnimations = { typeText, fadeInElement };
