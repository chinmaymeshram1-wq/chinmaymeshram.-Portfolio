// 1. Dynamic Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'glass');
    } else {
        navbar.classList.remove('scrolled', 'glass');
    }
});

// 3. Typing Animation
const words = ["Student.", "Programmer.", "Learner.", "Arduino Enthusiast.", "Electronics Lover."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 120);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    let loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 60);
    };
    setTimeout(loopDeleting, 1500); // pause before delete
};

typingEffect();

// 4. TSParticles Config (Direct load)
tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "transparent"
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#10b981" },
        links: {
            color: "#10b981",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: { enable: true, area: 800 },
            value: 60
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
});

// 5. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-pop');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Element stays revealed after first scroll
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// 6. Achievement Modal Logic
function openModal(element) {
    const modal = document.getElementById("achievementModal");
    const fullImg = document.getElementById("fullImg");
    const clickedImg = element.querySelector('img');
    
    fullImg.src = clickedImg.src;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeModal() {
    const modal = document.getElementById("achievementModal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // Restore scrolling
}
