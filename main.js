// main.js - Primary JavaScript for Magical Kenya Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initBookingForm();
    initNavbar();
    initImageCarousels();
    initWeatherWidget();
    initNewsletterForm();
    initTestimonialSlider();
    addSmoothScrolling();
    initMobileMenu();
    setupLazyLoading();
    addAnimationObservers();
});

// 1. Booking Form Handling
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            if (validateBookingForm()) {
                // Simulate form submission
                const submitBtn = bookingForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
                
                // In a real app, you would send data to your server here
                setTimeout(() => {
                    showAlert('success', 'Booking request submitted successfully! We will contact you shortly.');
                    bookingForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Proceed to Payment';
                }, 1500);
            }
        });
    }
}

function validateBookingForm() {
    const requiredFields = ['fullName', 'email', 'package', 'date'];
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    // Email validation
    const emailField = document.getElementById('email');
    if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

// 2. Navbar Effects
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// 3. Image Carousels/Galleries
function initImageCarousels() {
    // Initialize destination carousel
    const destinationCarousel = document.querySelector('#destinationCarousel');
    if (destinationCarousel) {
        new bootstrap.Carousel(destinationCarousel, {
            interval: 5000,
            wrap: true
        });
    }
    
    // Initialize testimonial carousel
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 7000,
            pause: 'hover'
        });
    }
}

// 4. Weather Widget (using mock data - replace with real API in production)
function initWeatherWidget() {
    const weatherContainer = document.querySelector('.weather-container');
    if (!weatherContainer) return;
    
    // Mock data - replace with actual API call
    const weatherData = {
        'Nairobi': { temp: 23, condition: 'Partly Cloudy', humidity: '60%', icon: 'cloud-sun' },
        'Mombasa': { temp: 28, condition: 'Sunny', humidity: '75%', icon: 'sun' },
        'Maasai Mara': { temp: 25, condition: 'Clear', humidity: '55%', icon: 'sun' }
    };
    
    Object.keys(weatherData).forEach(location => {
        const data = weatherData[location];
        const weatherCard = document.createElement('div');
        weatherCard.className = 'col-md-4 mb-4';
        weatherCard.innerHTML = `
            <div class="weather-card card h-100">
                <div class="card-body text-center">
                    <h3>${location}</h3>
                    <div class="weather-icon my-3">
                        <i class="bi bi-${data.icon} display-4"></i>
                    </div>
                    <div class="display-4 mb-2">${data.temp}°C</div>
                    <p class="text-muted">${data.condition}</p>
                    <p>Humidity: ${data.humidity}</p>
                </div>
            </div>
        `;
        weatherContainer.appendChild(weatherCard);
    });
}

// 5. Newsletter Subscription
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                // Simulate subscription
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Subscribing...';
                
                setTimeout(() => {
                    showAlert('success', 'Thanks for subscribing to our newsletter!');
                    emailInput.value = '';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Subscribe';
                }, 1500);
            } else {
                emailInput.classList.add('is-invalid');
                showAlert('danger', 'Please enter a valid email address');
            }
        });
    }
}

// 6. Testimonial Slider
function initTestimonialSlider() {
    // This would be replaced with actual testimonials from your database
    const testimonials = [
        {
            name: "Sarah Johnson",
            text: "Our safari experience was beyond amazing! The guides were knowledgeable and we saw the Big Five!",
            rating: 5
        },
        {
            name: "Michael Brown",
            text: "The coastal retreat was exactly what we needed. Beautiful beaches and excellent service.",
            rating: 4
        }
    ];
    
    const testimonialContainer = document.getElementById('testimonialContainer');
    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'testimonial-item';
            testimonialElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <div class="testimonial-rating mb-3 text-warning">${stars}</div>
                        <p class="testimonial-text">"${testimonial.text}"</p>
                        <p class="testimonial-author">- ${testimonial.name}</p>
                    </div>
                </div>
            `;
            testimonialContainer.appendChild(testimonialElement);
        });
    }
}

// 7. Smooth Scrolling for Anchor Links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 8. Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.navbar-toggler');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
}

// 9. Lazy Loading Images
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// 10. Animation on Scroll
function addAnimationObservers() {
    const animateElements = document.querySelectorAll('.fade-in, .slide-up, .slide-left');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(el => animationObserver.observe(el));
    } else {
        // Fallback for older browsers
        animateElements.forEach(el => el.classList.add('animate'));
    }
}

// Helper function to show alerts
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.alert-container') || document.body;
    container.prepend(alertDiv);
    
    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(alertDiv);
        alert.close();
    }, 5000);
}

// Sample API Integration (for production)
async function fetchTourPackages() {
    try {
        const response = await fetch('/api/tour-packages');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tour packages:', error);
        return [];
    }
}

// Sample function to populate packages from API
async function loadTourPackages() {
    const packageSelect = document.getElementById('package');
    if (!packageSelect) return;
    
    const packages = await fetchTourPackages();
    if (packages.length > 0) {
        packageSelect.innerHTML = '<option value="">Choose a package</option>' + 
            packages.map(pkg => 
                <option value="${pkg.id}">${pkg.name} - $${pkg.price}</option>
            ).join('');
    }
}

// Call this when needed
// loadTourPackages();