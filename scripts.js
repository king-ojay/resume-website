// Toggle navbar visibility on mobile devices
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

// Modal functionality
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeButton = document.querySelector(".close-button");

// Open modal
openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
