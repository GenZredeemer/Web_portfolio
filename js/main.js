/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-top');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = {
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false
};

// Check if ScrollReveal is available, otherwise use intersection observer
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.section__header', sr);
    ScrollReveal().reveal('.about__stat-box', { ...sr, interval: 100 });
    ScrollReveal().reveal('.resume__item', { ...sr, origin: 'left', interval: 100 });
    ScrollReveal().reveal('.project__card', { ...sr, interval: 100 });
    ScrollReveal().reveal('.hobby__card', { ...sr, interval: 100 });
    ScrollReveal().reveal('.contact__detail', { ...sr, interval: 100 });
} else {
    // Fallback using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll(
        '.section__header, .about__stat-box, .resume__item, .project__card, .hobby__card, .contact__detail'
    );

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(el);
    });
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*==================== TYPING ANIMATION ====================*/
const typingText = document.querySelector('.home__education');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    typingText.style.opacity = '1';
    
    let charIndex = 0;
    const typingSpeed = 100;
    
    function typeText() {
        if (charIndex < text.length) {
            typingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeText, 1500);
}

/*==================== SKILL BARS ANIMATION ====================*/
const skillBars = document.querySelectorAll('.skill__percentage');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
        skillsObserver.observe(bar);
    }, 100);
});

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && subject && message) {
            // Create mailto link
            const mailtoLink = `mailto:yash.datar@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showFormMessage('Message sent successfully! Your email client should open.', 'success');
            
            // Reset form
            contactForm.reset();
        } else {
            showFormMessage('Please fill in all fields.', 'error');
        }
    });
}

function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form__message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form__message form__message--${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: 500;
        animation: fadeInUp 0.5s ease;
        ${type === 'success' ? 
            'background: linear-gradient(135deg, rgba(72, 187, 120, 0.1), rgba(56, 161, 105, 0.1)); color: #2f855a; border: 1px solid #48bb78;' : 
            'background: linear-gradient(135deg, rgba(245, 101, 101, 0.1), rgba(229, 62, 62, 0.1)); color: #c53030; border: 1px solid #f56565;'
        }
    `;
    
    contactForm.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => messageElement.remove(), 500);
    }, 5000);
}

/*==================== PARALLAX EFFECT ====================*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home__img-wrapper');
    
    parallaxElements.forEach(el => {
        const speed = 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/*==================== CURSOR EFFECT (Optional Enhancement) ====================*/
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
    
    // Hide cursor on mobile
    if (window.innerWidth < 768) {
        cursor.style.display = 'none';
    }
};

// Uncomment to enable cursor effect
// createCursorFollower();

/*==================== DARK MODE TOGGLE (Future Enhancement) ====================*/
const darkModeToggle = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    toggleBtn.className = 'dark-mode-toggle';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        z-index: var(--z-tooltip);
        transition: transform 0.3s ease;
        display: none;
    `;
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = toggleBtn.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
    
    toggleBtn.addEventListener('mouseenter', () => {
        toggleBtn.style.transform = 'scale(1.1)';
    });
    
    toggleBtn.addEventListener('mouseleave', () => {
        toggleBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(toggleBtn);
};

// Uncomment to enable dark mode toggle
// darkModeToggle();

/*==================== LOADING ANIMATION ====================*/
window.addEventListener('load', () => {
    // Remove loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

/*==================== LAZY LOADING IMAGES ====================*/
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

/*==================== SCROLL PROGRESS INDICATOR ====================*/
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transform-origin: 0%;
        transform: scaleX(0);
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight);
        progressBar.style.transform = `scaleX(${scrolled})`;
    });
};

createScrollProgress();

/*==================== FADE IN ON SCROLL ====================*/
const fadeElements = document.querySelectorAll('.section');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

/*==================== CONSOLE MESSAGE ====================*/
console.log('%c👋 Welcome to Yash Datar\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('%c💼 Looking for opportunities? Let\'s connect!', 'color: #f093fb; font-size: 14px;');

/*==================== PREVENT RIGHT CLICK ON IMAGES (Optional) ====================*/
// Uncomment if you want to protect images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => e.preventDefault());
// });

/*==================== EASTER EGG ====================*/
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rotate 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 You found the secret code! You\'re awesome!');
        }, 2000);
    }
});

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    scrollHeader();
    scrollUp();
    scrollActive();
}, 10));

/*==================== EXPORT FOR MODULE USE ====================*/
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showFormMessage,
        debounce,
        createScrollProgress,
        darkModeToggle
    };
}
