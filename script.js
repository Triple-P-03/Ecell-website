// Loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Interactive RBU ECELL text color change on mouse movement
document.addEventListener('mousemove', (e) => {
    const rbuText = document.getElementById('rbuText');
    if (rbuText) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Calculate hue based on mouse position
        const hue1 = Math.floor(200 + (x * 60)); // Blue to cyan range
        const hue2 = Math.floor(30 + (y * 60));  // Orange to yellow range
        
        // Create dynamic gradient based on mouse position
        const gradient = `linear-gradient(${x * 360}deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 80%, 55%))`;
        
        rbuText.style.background = gradient;
        rbuText.style.webkitBackgroundClip = 'text';
        rbuText.style.backgroundClip = 'text';
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileNewsletterBtn = document.getElementById('mobileNewsletterBtn');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
        // Show menu
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        // Add slide-down animation
        setTimeout(() => {
            mobileMenu.style.transform = 'translateY(0)';
            mobileMenu.style.opacity = '1';
        }, 10);
    } else {
        // Hide menu
        mobileMenu.style.transform = 'translateY(-10px)';
        mobileMenu.style.opacity = '0';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }, 200);
    }
});

// Initialize mobile menu styles
mobileMenu.style.transform = 'translateY(-10px)';
mobileMenu.style.opacity = '0';
mobileMenu.style.transition = 'all 0.2s ease-out';

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateY(-10px)';
        mobileMenu.style.opacity = '0';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }, 200);
    });
});

// Mobile newsletter button functionality
if (mobileNewsletterBtn) {
    mobileNewsletterBtn.addEventListener('click', () => {
        openNewsletterModal();
        // Close mobile menu
        mobileMenu.style.transform = 'translateY(-10px)';
        mobileMenu.style.opacity = '0';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }, 200);
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.transform = 'translateY(-10px)';
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }, 200);
        }
    }
});

// Newsletter Modal
const newsletterBtn = document.getElementById('newsletterBtn');
const floatingNewsletterBtn = document.getElementById('floatingNewsletterBtn');
const newsletterModal = document.getElementById('newsletterModal');
const closeModal = document.getElementById('closeModal');
const newsletterForm = document.getElementById('newsletterForm');

// Function to open newsletter modal
function openNewsletterModal() {
    newsletterModal.classList.remove('hidden');
    newsletterModal.style.opacity = '0';
    setTimeout(() => {
        newsletterModal.style.opacity = '1';
    }, 10);
}

// Function to close newsletter modal
function closeNewsletterModal() {
    newsletterModal.style.opacity = '0';
    setTimeout(() => {
        newsletterModal.classList.add('hidden');
    }, 300);
}

// Event listeners for newsletter buttons
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', openNewsletterModal);
}

floatingNewsletterBtn.addEventListener('click', openNewsletterModal);

closeModal.addEventListener('click', closeNewsletterModal);

newsletterModal.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
        closeNewsletterModal();
    }
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Add a nice success animation
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Subscribed!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
        closeNewsletterModal();
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            e.target.reset();
        }, 500);
    }, 1500);
});

// Show/hide floating button based on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 200) {
        floatingNewsletterBtn.style.opacity = '1';
        floatingNewsletterBtn.style.transform = 'translateY(0)';
    } else {
        floatingNewsletterBtn.style.opacity = '0';
        floatingNewsletterBtn.style.transform = 'translateY(20px)';
    }
    
    lastScrollTop = scrollTop;
});

// Initialize floating button as hidden
floatingNewsletterBtn.style.opacity = '0';
floatingNewsletterBtn.style.transform = 'translateY(20px)';
floatingNewsletterBtn.style.transition = 'all 0.3s ease';

// Smooth Scrolling for Navigation Links
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

// Simple Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Navbar shrinking and active link functionality
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('home');
    const scrollPosition = window.scrollY;
    
    // Shrink navbar after hero section
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        if (scrollPosition > heroHeight * 0.8) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    }
    
    // Active navigation link (only for single page)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length > 0) {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-orange-500');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-orange-500');
            }
        });
    }
});

// Add more sections dynamically
function addSection(id, content) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = id;
    section.className = 'min-h-screen py-20';
    section.innerHTML = content;
    main.appendChild(section);
}

// Add Offerings Section
addSection('offerings', `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 geometric-pattern">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Offerings</h2>
            <p class="text-xl text-gray-600">Discover opportunities that will shape your entrepreneurial journey</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div class="fade-in">
                <h3 class="text-3xl font-bold mb-8 text-gradient">Internships</h3>
                <div class="space-y-6">
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-code text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Full Stack Development</h4>
                                <p class="text-gray-600">6 months • ₹15,000/month</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Work with cutting-edge technologies and build scalable web applications.</p>
                    </div>
                    
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-mobile-alt text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Mobile App Development</h4>
                                <p class="text-gray-600">4 months • ₹12,000/month</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Create innovative mobile solutions for Android and iOS platforms.</p>
                    </div>
                    
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-chart-line text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Digital Marketing</h4>
                                <p class="text-gray-600">3 months • ₹10,000/month</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Learn growth hacking and digital marketing strategies for startups.</p>
                    </div>
                </div>
            </div>
            
            <div class="fade-in">
                <h3 class="text-3xl font-bold mb-8 text-gradient">Funding Opportunities</h3>
                <div class="space-y-6">
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-seedling text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Seed Funding</h4>
                                <p class="text-gray-600">Up to ₹5 Lakhs</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Early-stage funding for promising startup ideas with strong potential.</p>
                    </div>
                    
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-rocket text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Growth Capital</h4>
                                <p class="text-gray-600">₹5-50 Lakhs</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Scale your validated business model with substantial growth funding.</p>
                    </div>
                    
                    <div class="glass-effect rounded-xl p-6 hover-scale">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                                <i class="fas fa-handshake text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">Angel Investment</h4>
                                <p class="text-gray-600">₹10 Lakhs+</p>
                            </div>
                        </div>
                        <p class="text-gray-700">Connect with angel investors and venture capitalists in our network.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);

// Add About Section
addSection('about', `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dots-pattern">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">About Our Team</h2>
            <p class="text-xl text-gray-600">Meet the passionate individuals driving innovation at RBU ECELL</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Rahul Sharma</h3>
                <p class="text-gray-600 mb-2">President & Founder</p>
                <p class="text-sm text-gray-500 mb-4">Leading innovation and entrepreneurship initiatives</p>
                <a href="https://linkedin.com/in/rahulsharma" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">🏆 Best Startup Award 2023</div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Priya Patel</h3>
                <p class="text-gray-600 mb-2">Vice President</p>
                <p class="text-sm text-gray-500 mb-4">Driving community engagement and partnerships</p>
                <a href="https://linkedin.com/in/priyapatel" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">🌟 Young Entrepreneur 2023</div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Arjun Kumar</h3>
                <p class="text-gray-600 mb-2">Technical Lead</p>
                <p class="text-sm text-gray-500 mb-4">Overseeing technical projects and mentorship</p>
                <a href="https://linkedin.com/in/arjunkumar" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">💻 Tech Innovation Award</div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Sneha Gupta</h3>
                <p class="text-gray-600 mb-2">Marketing Head</p>
                <p class="text-sm text-gray-500 mb-4">Building brand presence and outreach programs</p>
                <a href="https://linkedin.com/in/snehagupta" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">📈 Marketing Excellence 2023</div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Vikash Singh</h3>
                <p class="text-gray-600 mb-2">Operations Manager</p>
                <p class="text-sm text-gray-500 mb-4">Ensuring smooth operations and event management</p>
                <a href="https://linkedin.com/in/vikashsingh" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">🎯 Operations Excellence</div>
            </div>
            
            <div class="glass-effect rounded-xl p-6 text-center hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                     alt="Team Member" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-xl font-semibold mb-2">Anita Rao</h3>
                <p class="text-gray-600 mb-2">Finance Head</p>
                <p class="text-sm text-gray-500 mb-4">Managing funding and financial strategies</p>
                <a href="https://linkedin.com/in/anitarao" target="_blank" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                    <i class="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                </a>
                <div class="mt-2 text-xs text-gray-400">💰 Financial Leadership Award</div>
            </div>
        </div>
    </div>
`);

// Add Events Section
addSection('events', `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hexagon-pattern">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p class="text-xl text-gray-600">Join us for exciting events that will accelerate your entrepreneurial journey</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div class="glass-effect rounded-xl overflow-hidden hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                     alt="Startup Pitch Competition" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center mb-2">
                        <span class="orange-gradient text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                        <span class="ml-2 text-gray-500 text-sm">March 15, 2024</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Startup Pitch Competition</h3>
                    <p class="text-gray-600 mb-4">Present your innovative ideas to industry experts and win funding up to ₹10 lakhs. Open to all students with groundbreaking startup concepts.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-gray-500 text-sm">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            RBU Auditorium
                        </div>
                        <button class="orange-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">Register Now</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-effect rounded-xl overflow-hidden hover-scale fade-in">
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                     alt="Tech Workshop" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center mb-2">
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Workshop</span>
                        <span class="ml-2 text-gray-500 text-sm">March 22, 2024</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">AI & Machine Learning Workshop</h3>
                    <p class="text-gray-600 mb-4">Learn cutting-edge AI technologies and their applications in startups. Hands-on session with industry professionals.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-gray-500 text-sm">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            Tech Lab, Block A
                        </div>
                        <button class="orange-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">Join Workshop</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-effect rounded-xl p-6 hover-scale fade-in">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-users text-white"></i>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg font-semibold">Networking Meetup</h4>
                        <p class="text-gray-600 text-sm">April 5, 2024</p>
                    </div>
                </div>
                <p class="text-gray-700 text-sm">Connect with fellow entrepreneurs and industry mentors.</p>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover-scale fade-in">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-lightbulb text-white"></i>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg font-semibold">Innovation Hackathon</h4>
                        <p class="text-gray-600 text-sm">April 12-14, 2024</p>
                    </div>
                </div>
                <p class="text-gray-700 text-sm">48-hour coding marathon to solve real-world problems.</p>
            </div>
            
            <div class="glass-effect rounded-xl p-6 hover-scale fade-in">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg font-semibold">Entrepreneurship Bootcamp</h4>
                        <p class="text-gray-600 text-sm">April 20-22, 2024</p>
                    </div>
                </div>
                <p class="text-gray-700 text-sm">Intensive 3-day program covering startup fundamentals.</p>
            </div>
        </div>
    </div>
`);

// Add More Section
addSection('more', `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 waves-pattern">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p class="text-xl text-gray-600">Celebrating achievements, successful ventures, and our growing ecosystem</p>
        </div>
        
        <!-- Achievements Section -->
        <div class="mb-20 fade-in">
            <h3 class="text-3xl font-bold text-center mb-12 text-gradient">Achievements</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center glass-effect rounded-xl p-6 hover-scale">
                    <div class="text-4xl font-bold text-orange-500 mb-2">500+</div>
                    <div class="text-gray-600">Active Members</div>
                </div>
                <div class="text-center glass-effect rounded-xl p-6 hover-scale">
                    <div class="text-4xl font-bold text-orange-500 mb-2">50+</div>
                    <div class="text-gray-600">Startups Launched</div>
                </div>
                <div class="text-center glass-effect rounded-xl p-6 hover-scale">
                    <div class="text-4xl font-bold text-orange-500 mb-2">₹2Cr+</div>
                    <div class="text-gray-600">Funding Raised</div>
                </div>
                <div class="text-center glass-effect rounded-xl p-6 hover-scale">
                    <div class="text-4xl font-bold text-orange-500 mb-2">100+</div>
                    <div class="text-gray-600">Events Organized</div>
                </div>
            </div>
        </div>
        
        <!-- Funded Ventures Section -->
        <div class="mb-20 fade-in">
            <h3 class="text-3xl font-bold text-center mb-12 text-gradient">Funded Ventures & Startups</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="glass-effect rounded-xl p-6 hover-scale">
                    <div class="flex items-center mb-4">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="EduTech Startup" class="w-16 h-16 rounded-lg object-cover">
                        <div class="ml-4">
                            <h4 class="text-xl font-semibold">EduTech Solutions</h4>
                            <p class="text-gray-600">Ed-Tech Platform</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">AI-powered learning platform serving 10,000+ students across India.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-green-500 font-semibold">₹25L Funded</span>
                        <span class="text-gray-500 text-sm">Series A</span>
                    </div>
                </div>
                
                <div class="glass-effect rounded-xl p-6 hover-scale">
                    <div class="flex items-center mb-4">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="FinTech Startup" class="w-16 h-16 rounded-lg object-cover">
                        <div class="ml-4">
                            <h4 class="text-xl font-semibold">PayEasy</h4>
                            <p class="text-gray-600">FinTech Solution</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">Digital payment solution for small businesses and merchants.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-green-500 font-semibold">₹15L Funded</span>
                        <span class="text-gray-500 text-sm">Seed Round</span>
                    </div>
                </div>
                
                <div class="glass-effect rounded-xl p-6 hover-scale">
                    <div class="flex items-center mb-4">
                        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="HealthTech Startup" class="w-16 h-16 rounded-lg object-cover">
                        <div class="ml-4">
                            <h4 class="text-xl font-semibold">HealthBot</h4>
                            <p class="text-gray-600">HealthTech AI</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">AI-powered health diagnosis and consultation platform.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-green-500 font-semibold">₹30L Funded</span>
                        <span class="text-gray-500 text-sm">Pre-Series A</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Incubation Section -->
        <div class="fade-in">
            <h3 class="text-3xl font-bold text-center mb-12 text-gradient">Incubation Program</h3>
            <div class="glass-effect rounded-2xl p-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h4 class="text-2xl font-bold mb-6">RBU Startup Incubator</h4>
                        <p class="text-gray-700 mb-6">Our state-of-the-art incubation facility provides everything you need to transform your idea into a successful business.</p>
                        
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-8 h-8 orange-gradient rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <span class="text-gray-700">24/7 Co-working Space</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-8 h-8 orange-gradient rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <span class="text-gray-700">Mentorship from Industry Experts</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-8 h-8 orange-gradient rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <span class="text-gray-700">Access to Funding Networks</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-8 h-8 orange-gradient rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <span class="text-gray-700">Legal & Compliance Support</span>
                            </div>
                        </div>
                        
                        <button class="mt-8 orange-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                            Apply for Incubation
                        </button>
                    </div>
                    
                    <div>
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                             alt="Incubation Space" class="rounded-xl shadow-2xl">
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Made By Section -->
        <div class="mt-20 text-center fade-in">
            <div class="glass-effect rounded-xl p-8 inline-block">
                <p class="text-gray-600 mb-2">Made with ❤️ by</p>
                <h4 class="text-2xl font-bold text-gradient">RBU ECELL Development Team</h4>
                <p class="text-gray-500 text-sm mt-2">Empowering entrepreneurs, one line of code at a time</p>
            </div>
        </div>
    </div>
`);

// Re-observe new fade-in elements
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}, 100);
