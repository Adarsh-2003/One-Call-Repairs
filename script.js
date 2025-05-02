// Form handling
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for dropdowns
    const services = ['Refrigerator (Fridge)', 'Air Conditioners (AC)', 'Washing Machine (Top-Loading)','Washing Machine (Front-Loading)', 'Microwave Oven'];
    const types = ['Service', 'Installation', 'Maintenance', 'Repair'];
    const brands = ['Samsung', 'LG', 'Whirlpool', 'Haier', 'Godrej', 'IFB', 'Others'];

    // Populate dropdowns
    populateSelect('selectService', services);
    populateSelect('selectType', types);
    populateSelect('selectBrand', brands);

    // Service Form submission
    const serviceForm = document.getElementById('serviceForm');
    if (serviceForm) {
        serviceForm.addEventListener('submit', handleServiceSubmit);
    }

    // Contact Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Call Us button
    const callUsBtn = document.querySelector('.call-us-btn');
    if (callUsBtn) {
        callUsBtn.addEventListener('click', () => {
            window.location.href = 'tel:+919804637518';
        });
    }

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const servicesDropdown = document.querySelector('.services-dropdown');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle services dropdown on mobile
    if (window.innerWidth <= 768) {
        const servicesLink = servicesDropdown.querySelector('a');
        servicesLink.addEventListener('click', (e) => {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Function to populate select dropdowns
function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    if (!select) return;

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase().replace(/\s+/g, '-');
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

// Service Form submission handler
function handleServiceSubmit(event) {
    event.preventDefault();

    // Get form values
    const service = document.getElementById('selectService').value;
    const type = document.getElementById('selectType').value;
    const brand = document.getElementById('selectBrand').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const location = document.getElementById('location').value;
    const terms = document.getElementById('terms').checked;


    // Here you would typically send the data to your server
    // For now, we'll just log it to the console
    console.log({
        service,
        type,
        brand,
        name,
        contact,
        location,
        terms
    });

    // Reset form
    // event.target.reset();
    // alert('Submitted successfully, Expect a call within 15 minutes');
}

// Contact Form submission handler
function handleContactSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('feedbackName').value;
    const contact = document.getElementById('feedbackContact').value;
    const fridgeType = document.getElementById('feedbackFridgeType').value;
    const brandName = document.getElementById('feedbackBrandName').value;
    const message = document.getElementById('feedbackMessage').value;

    // Here you would typically send the data to your server
    // For now, we'll just log it to the console
    console.log({
        name,
        contact,
        fridgeType,
        brandName,
        message
    });

    // Reset form
    // event.target.reset();
    // alert('Feedback received');
}

// Services dropdown functionality
const servicesDropdown = document.querySelector('.services-dropdown');
if (servicesDropdown) {
    servicesDropdown.addEventListener('mouseenter', () => {
        // Add dropdown menu functionality here if needed
    });
} 