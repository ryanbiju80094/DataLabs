// Accordion: toggle pipeline output descriptions
document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('.output-accordion-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            const panelId = this.getAttribute('aria-controls');
            const panel = panelId ? document.getElementById(panelId) : null;
            this.setAttribute('aria-expanded', !expanded);
            if (panel) {
                panel.hidden = expanded;
            }
        });
    });
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active state to navigation links based on scroll (only when multiple sections exist)
    const sections = document.querySelectorAll('#page1, #page2');
    const navLinksArray = document.querySelectorAll('.nav-link');
    
    if (sections.length > 0 && navLinksArray.length > 0) {
        function updateActiveNav() {
            let current = '';
            const scrollPosition = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }
});
