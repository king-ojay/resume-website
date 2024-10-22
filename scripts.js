// Toggle navbar visibility on mobile devices
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    // Toggle display style between 'block' and 'none'
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
