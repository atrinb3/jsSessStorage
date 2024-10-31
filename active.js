// Select all sections and navigation links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to update active link based on section in view
function updateActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Event listener for scrolling
window.addEventListener('scroll', updateActiveLink);