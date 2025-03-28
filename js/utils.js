// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Toast Notification Function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Apply saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}


// Function to Copy Text to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("Copied to clipboard!", "success");
    });
}

// Function to Change Background Color Randomly
function randomBackground() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Loading Spinner
function showLoader(duration = 2000) {
    const loader = document.createElement('div');
    loader.className = "loader";
    document.body.appendChild(loader);
    setTimeout(() => loader.remove(), duration);
}


function addRippleEffect(event) {
    let btn = event.currentTarget;
    let circle = document.createElement("span");
    let size = Math.max(btn.offsetWidth, btn.offsetHeight);
    let x = event.clientX - btn.offsetLeft - size / 2;
    let y = event.clientY - btn.offsetTop - size / 2;
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
}



window.myCDN.addRippleEffect = addRippleEffect;


// Export Functions
window.myCDN = { toggleDarkMode, showToast, copyToClipboard, randomBackground, scrollToTop, showLoader };

