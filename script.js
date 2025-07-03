

// FAQ Toggle
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.avantage-card, .formation-item, .testimonial-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// WhatsApp Button Enhancement
function initWhatsAppButton() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add click tracking if needed
            console.log('WhatsApp button clicked');
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Form Validation (if needed)
function initFormValidation() {
    // Add form validation logic here if forms are added later
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
}

// Performance Optimization
function initPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Analytics Tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Add analytics tracking here
    console.log('Event tracked:', eventName, eventData);
}

// Hero Mobile Reorganization
function initHeroMobileReorganization() {
    const heroContainer = document.querySelector('.hero-container');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    function reorganizeHero() {
        if (window.innerWidth <= 768) {
            // On mobile: move image after title
            if (heroContent && heroImage && heroTitle) {
                // Create a wrapper for title and image
                const titleImageWrapper = document.createElement('div');
                titleImageWrapper.className = 'title-image-wrapper';
                
                // Move title and image to wrapper
                heroTitle.parentNode.insertBefore(titleImageWrapper, heroTitle);
                titleImageWrapper.appendChild(heroTitle);
                titleImageWrapper.appendChild(heroImage);
                
                // Move subtitle and CTA after the wrapper
                if (heroSubtitle) {
                    heroContent.appendChild(heroSubtitle);
                }
                if (heroCta) {
                    heroContent.appendChild(heroCta);
                }
            }
        } else {
            // On desktop: restore original structure
            if (heroContainer && heroContent && heroImage) {
                // Move image back to container
                heroContainer.appendChild(heroImage);
                
                // Move subtitle and CTA back to content
                if (heroSubtitle) {
                    heroContent.appendChild(heroSubtitle);
                }
                if (heroCta) {
                    heroContent.appendChild(heroCta);
                }
            }
        }
    }
    
    // Initial reorganization
    reorganizeHero();
    
    // Reorganize on window resize
    window.addEventListener('resize', reorganizeHero);
}

// Coach Mobile Reorganization
function initCoachMobileReorganization() {
    const coachContent = document.querySelector('.coach-content');
    const coachImage = document.querySelector('.coach-image');
    const coachInfo = document.querySelector('.coach-info');
    const coachTitle = document.querySelector('.coach-info h2');
    
    function reorganizeCoach() {
        if (window.innerWidth <= 768) {
            // On mobile: move title before image
            if (coachContent && coachImage && coachInfo && coachTitle) {
                // Create a wrapper for title and image
                const titleImageWrapper = document.createElement('div');
                titleImageWrapper.className = 'coach-title-image-wrapper';
                
                // Move title and image to wrapper
                coachTitle.parentNode.insertBefore(titleImageWrapper, coachTitle);
                titleImageWrapper.appendChild(coachTitle);
                titleImageWrapper.appendChild(coachImage);
                
                // Move the rest of coach info after the wrapper
                const coachInfoChildren = Array.from(coachInfo.children);
                coachInfoChildren.forEach(child => {
                    if (child !== coachTitle) {
                        coachInfo.appendChild(child);
                    }
                });
            }
        } else {
            // On desktop: restore original structure
            if (coachContent && coachImage && coachInfo) {
                // Move image back to original position
                coachContent.insertBefore(coachImage, coachInfo);
                
                // Move title back to coach-info
                if (coachTitle && coachTitle.parentNode.className === 'coach-title-image-wrapper') {
                    coachInfo.insertBefore(coachTitle, coachInfo.firstChild);
                }
            }
        }
    }
    
    // Initial reorganization
    reorganizeCoach();
    
    // Reorganize on window resize
    window.addEventListener('resize', reorganizeCoach);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initFAQ();
    initSmoothScrolling();
    initAnimations();
    initWhatsAppButton();
    initHeaderScroll();
    initFormValidation();
    initMobileMenu();
    initPerformanceOptimizations();
    initHeroMobileReorganization();
    initCoachMobileReorganization();
    
    // Track page load
    trackEvent('page_view', {
        page: 'landing_page',
        timestamp: new Date().toISOString()
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.avantage-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
    
    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add floating animation to WhatsApp button
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                whatsappButton.style.transform = 'translateY(0)';
            }, 500);
        }, 3000);
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Add error reporting logic here
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log('Page load time:', loadTime + 'ms');
    
    // Track performance metrics
    trackEvent('performance', {
        load_time: loadTime,
        user_agent: navigator.userAgent
    });
}); 