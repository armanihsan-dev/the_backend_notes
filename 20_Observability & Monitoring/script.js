const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

let clickedLink = null;

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        clickedLink = link;
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((l) => l.classList.remove('active'));
                const active = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (active) {
                    active.classList.add('active');
                    clickedLink = null;
                }
            }
        });
    },
    { rootMargin: '-20% 0px -70% 0px' }
);

sections.forEach((section) => observer.observe(section));
