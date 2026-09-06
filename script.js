// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const sectionId = this.getAttribute('href');

        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

  // Typing effect

        const text = "Computer Science Student";
        const typingElement = document.getElementById("typing-text");

        let index = 0;

        function typeText() {

            if (index < text.length) {

                typingElement.textContent += text.charAt(index);

                index++;

                setTimeout(typeText, 100);

            }

        }

        typeText();

    // Scroll reveal effect

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});