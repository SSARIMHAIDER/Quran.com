
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 80);
    }
});

// Add floating animation to tech items
function addFloatingAnimation() {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('floating');
    });
}

// Create floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    .tech-item:hover {
        animation-play-state: paused;
    }
`;
document.head.appendChild(style);

// Initialize floating animation
window.addEventListener('load', addFloatingAnimation);

// Add scroll reveal effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.tech-card, .tutorial-card, .project-item');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

// Add reveal animation CSS
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .tech-card, .tutorial-card, .project-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(revealStyle);

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial check for elements in view
window.addEventListener('load', revealOnScroll);

// Add particle effect to background
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    
    document.body.appendChild(particleContainer);
    
    // Create individual particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00ffff';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random();
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
        
        particleContainer.appendChild(particle);
    }
}

// Add twinkle animation
const twinkleStyle = document.createElement('style');
twinkleStyle.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(twinkleStyle);

// Initialize particles
window.addEventListener('load', createParticles);
