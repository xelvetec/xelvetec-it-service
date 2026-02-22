
document.addEventListener('DOMContentLoaded', function() {
// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items first
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open current if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
// Netlify form handling
    const bookingForm = document.querySelector('form[name="termin"]');
    const formConfirmation = document.getElementById('formConfirmation');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            const email = this.elements['email'].value;
            const phone = this.elements['telefon'].value;
            
            // Validate at least one contact method is provided
            if (!email && !phone) {
                e.preventDefault();
                alert('Bitte geben Sie mindestens eine Kontaktmöglichkeit an (E-Mail oder Telefon)');
                return;
            }
            
            // Show custom confirmation after successful submission
            bookingForm.classList.add('hidden');
            formConfirmation.classList.remove('hidden');
            formConfirmation.classList.add('animate-fade-in');
            
            // Replace icons
            feather.replace();
            
            // Scroll to confirmation
            formConfirmation.scrollIntoView({ behavior: 'smooth' });
            
            // Redirect to home after 3 seconds
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        });
    }
// Initialize AOS animations
    document.addEventListener('DOMContentLoaded', () => {
        AOS.init({
            duration: 1500,
            offset: 100,
            delay: 200,
            once: true
        });
    });

    // Animate icons when they come into view
    document.addEventListener('aos:in', ({ detail }) => {
        if (detail.classList.contains('pulse-icon')) {
            detail.style.animation = 'pulse 2s infinite';
        }
    });
// Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Initialize first testimonial
    showTestimonial(0);
    // GSAP Animations with Lenis integration
    gsap.registerPlugin(ScrollTrigger);

    // Connect GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Fade-in elements
gsap.utils.toArray('.gsap-fade-in').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Slide-up elements
    gsap.utils.toArray('.gsap-slide-up').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    // Hero text animation
    gsap.from(".hero-section h1 span", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".hero-section p, .hero-section .flex", {
y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Service card animations
    gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});