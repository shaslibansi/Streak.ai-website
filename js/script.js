// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburgerBtn');
    var menu = document.getElementById('mobileMenu');
    var overlay = document.getElementById('mobileOverlay');
    var closeBtn = document.getElementById('mobileMenuClose');

    function openMobileMenu() {
        menu.classList.add('open');
        hamburger.classList.add('active');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        menu.classList.remove('open');
        hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (menu.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking a nav link inside it
    if (menu) {
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});

// Feature Tabs
function setActiveTab(tabNum) {
    document.querySelectorAll('.feature-card').forEach(function(card) {
        card.classList.remove('active');
        card.classList.remove('border-charcoal');
        card.classList.add('border-transparent');
    });

    var activeCard = document.querySelector('[data-tab="' + tabNum + '"]');
    if (activeCard) {
        activeCard.classList.add('active');
        activeCard.classList.remove('border-transparent');
    }
}

document.querySelectorAll('.feature-card').forEach(function(card) {
    card.addEventListener('click', function() {
        var tabNum = this.getAttribute('data-tab');
        setActiveTab(tabNum);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target && this.getAttribute('href') !== '#') {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// FAQ Accordion
function toggleFAQ(button) {
    var item = button.parentElement;
    var answer = item.querySelector('.faq-answer');
    var icon = button.querySelector('.faq-icon');
    var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

    document.querySelectorAll('.faq-item').forEach(function(other) {
        if (other !== item) {
            var otherAnswer = other.querySelector('.faq-answer');
            var otherIcon = other.querySelector('.faq-icon');
            if (otherAnswer) otherAnswer.style.maxHeight = '0px';
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    if (isOpen) {
        answer.style.maxHeight = '0px';
        if (icon) icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
}

document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        toggleFAQ(this);
    });
});

// Coming Soon Sidebar
function openComingSoon() {
    document.getElementById('sidebarOverlay').classList.add('active');
    document.getElementById('sidebarPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeComingSoon() {
    document.getElementById('sidebarOverlay').classList.remove('active');
    document.getElementById('sidebarPanel').classList.remove('active');
    document.body.style.overflow = '';
}

// App Store buttons
document.addEventListener('DOMContentLoaded', function() {
    var appStoreBtns = [
        'appStoreNav',
        'appStoreMobile',
        'appStoreHero',
        'appStoreFooter'
    ];

    appStoreBtns.forEach(function(id) {
        var btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', openComingSoon);
        }
    });

    // Sidebar overlay and close button
    var overlay = document.getElementById('sidebarOverlay');
    var closeBtn = document.getElementById('sidebarClose');

    if (overlay) overlay.addEventListener('click', closeComingSoon);
    if (closeBtn) closeBtn.addEventListener('click', closeComingSoon);
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});
