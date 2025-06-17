// Translations
const translations = {
    fr: {
        'menu-home': 'Accueil',
        'menu-products': 'Produits',
        'menu-videos': 'Vidéos',
        'menu-contact': 'Contact',
        'hero-subtitle': 'Sucette glacée 🧊 & Boissons - La Fraîcheur Ultime ',
        'cta-discover': 'Découvrir',
        'products-title': 'La Gamme Glacée',
        'products-intro': 'POLO بولو - La référence incontournable des produits rafraîchissants. Découvrez nos sucettes glacées aux saveurs délicieuses, prêtes à consommer pour une fraîcheur instantanée!',
        'badge-frozen': 'Glacée',
        'videos-title': 'Découvrez POLO en Action',
        'cta-title': 'Prêt pour une explosion de fraîcheur?',
        'cta-subtitle': 'Contactez-nous pour commander nos produits',
        'cta-call-now': 'Appelez maintenant',
        'footer-tagline': 'Sucette glacée & Boissons ',
        'footer-rights': 'Tous droits réservés.',
        'contact-title': 'Contactez-nous',
        'company-desc': 'Sucette glacée & Boissons',
        'phone-label': 'Téléphone',
        'location-label': 'Localisation',
        'view-map': 'Voir sur la carte',
        'open-maps': 'Ouvrir dans Google Maps'
    },
    ar: {
        'menu-home': 'الرئيسية',
        'menu-products': 'المنتجات',
        'menu-videos': 'الفيديوهات',
        'menu-contact': 'اتصل بنا',
        'hero-subtitle': 'مصاصات مجمدة 🧊 ومشروبات - الانتعاش المطلق   ',
        'cta-discover': 'اكتشف',
        'products-title': 'المجموعة المجمدة',
        'products-intro': 'POLO بولو - المرجع الأساسي للمنتجات المنعشة. اكتشف مصاصاتنا المجمدة بنكهات لذيذة، جاهزة للاستهلاك لانتعاش فوري!',
        'badge-frozen': 'مجمدة',
        'videos-title': 'اكتشف POLO في العمل',
        'cta-title': 'مستعد لانفجار من الانتعاش؟',
        'cta-subtitle': 'اتصل بنا لطلب منتجاتنا',
        'cta-call-now': 'اتصل الآن',
        'footer-tagline': 'مصاصات مجمدة ومشروبات',
        'footer-rights': 'جميع الحقوق محفوظة.',
        'contact-title': 'اتصل بنا',
        'company-desc': 'مصاصات مجمدة ومشروبات',
        'phone-label': 'الهاتف',
        'location-label': 'الموقع',
        'view-map': 'عرض على الخريطة',
        'open-maps': 'فتح في خرائط جوجل'
    },
    en: {
        'menu-home': 'Home',
        'menu-products': 'Products',
        'menu-videos': 'Videos',
        'menu-contact': 'Contact',
        'hero-subtitle': 'Ice Lollies 🧊 & Beverages - The Ultimate Freshness ',
        'cta-discover': 'Discover',
        'products-title': 'The Frozen Range',
        'products-intro': 'POLO بولو - The essential reference for refreshing products. Discover our frozen lollipops with delicious flavors, ready to eat for instant freshness!',
        'badge-frozen': 'Frozen',
        'videos-title': 'Discover POLO in Action',
        'cta-title': 'Ready for an explosion of freshness?',
        'cta-subtitle': 'Contact us to order our products',
        'cta-call-now': 'Call now',
        'footer-tagline': 'Ice lollies & Beverages ',
        'footer-rights': 'All rights reserved.',
        'contact-title': 'Contact us',
        'company-desc': 'Ice lollies & Beverages',
        'phone-label': 'Phone',
        'location-label': 'Location',
        'view-map': 'View on map',
        'open-maps': 'Open in Google Maps'
    }
};

// DOM Elements
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-list a');
const magicButton = document.getElementById('magicButton');
const ctaButton = document.querySelector('.cta-button');
const langBtns = document.querySelectorAll('.lang-btn');

// Current language
let currentLang = 'fr';

// Language switcher
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translated elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Preloader with enhanced animation
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide');
        initAnimations();
        setupVideoPlayers();
    }, 2500);
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for CTA button
ctaButton.addEventListener('click', () => {
    const target = document.querySelector('#products');
    target.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// Magic button confetti effect
magicButton.addEventListener('click', () => {
    createConfetti();
    // Vibrate on mobile if supported
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
});

// Enhanced confetti creation
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    const shapes = ['circle', 'square', 'triangle'];
    const confettiCount = 60;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 15 + 10;
        
        confetti.className = 'confetti-piece';
        confetti.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            right: ${magicButton.offsetLeft + 35}px;
            bottom: ${window.innerHeight - magicButton.offsetTop + 35}px;
            border-radius: ${shape === 'circle' ? '50%' : '0'};
            transform: ${shape === 'triangle' ? 'rotate(45deg)' : 'none'};
            animation-duration: ${Math.random() * 2 + 2}s;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Setup Video Players - Simplified
function setupVideoPlayers() {
    const videos = document.querySelectorAll('.video-player');
    
    videos.forEach(video => {
        // Pause other videos when one plays
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if (v !== video) v.pause();
            });
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.product-card, .video-card, .contact-item').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    const heroLogo = document.querySelector('.hero-logo');
    
    if (heroImage && heroContent) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
    }
    
    if (heroLogo) {
        heroLogo.style.transform = `translateY(${scrolled * -0.2}px) rotate(${scrolled * 0.1}deg) scale(${1 - scrolled * 0.0003})`;
    }
});

// Dynamic theme color
const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.querySelector('meta[name="theme-color"]').content = colors[colorIndex];
}, 5000);

// Product card hover effect
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});

// Touch interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    productCards.forEach(card => {
        let touchStartX = 0;
        let touchStartY = 0;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        card.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const diffX = touchX - touchStartX;
            const diffY = touchY - touchStartY;
            
            const rotateY = diffX * 0.1;
            const rotateX = diffY * -0.1;
            
            card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = '';
        });
    });
}

// Performance optimization - Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// Ripple effect for buttons on mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('button, .product-card, .video-card').forEach(element => {
        element.addEventListener('touchstart', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: translate(${x}px, ${y}px) scale(0);
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: translate(var(--x), var(--y)) scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('Back online');
});

window.addEventListener('offline', () => {
    console.log('Gone offline');
});