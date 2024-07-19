let currentIndex = 0;
const services = ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"];

function rotateText() {
    currentIndex = (currentIndex + 1) % services.length;
    document.getElementById('slide-text').innerText = services[currentIndex];
}

setInterval(rotateText, 7000);

function toggleMenu() {
    // Implementation for toggling the dropdown menu
}
