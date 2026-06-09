const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => link.classList.remove('active'));
                const activeLink = document.querySelector(
                    `a[href="#${entry.target.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    },
    {
        rootMargin: '-20% 0px -70% 0px',
    }
);

sections.forEach((section) => observer.observe(section));