// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components with error handling
    try { initNavigation(); } catch (e) { console.error('Navigation init failed:', e); }
    try { initSmoothScroll(); } catch (e) { console.error('SmoothScroll init failed:', e); }
    try { initHighlights(); } catch (e) { console.error('Highlights init failed:', e); }
    try { initModal(); } catch (e) { console.error('Modal init failed:', e); }
    try { initSlideshows(); } catch (e) { console.error('Slideshow init failed:', e); }
    try { updateYear(); } catch (e) { console.error('Year update failed:', e); }
});

// Mobile and Dynamic Navigation
function initNavigation() {
    generateNavigation();

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }
}

// Generate Navigation based on Config
function generateNavigation() {
    const navList = document.querySelector('.nav-links');
    if (!navList) return;

    // Determine current path depth to correctly link assets
    // Simple heuristic: if we are in a subfolder (page has ../), prefix is ../
    // logic: check if window.location.pathname is root or subfolder
    const isRoot = window.location.pathname.endsWith('index.html') &&
        (window.location.pathname.split('/').length <= 2 || window.location.pathname.includes('portfolio-site/index.html'));

    // Better approach: assume relative links in HTML are correct for Home/Contact.
    // But for generated links, we might need adjustments.
    // However, the HTML files already established a pattern. 
    // Let's use getPathPrefix() helper.
    const prefix = getPathPrefix();

    // Clear existing (except Home if we want to keep it, but easier to rebuild all)
    navList.innerHTML = '';

    // 1. Home Link
    const homeLi = document.createElement('li');
    homeLi.innerHTML = `<a href="${prefix}index.html">Home</a>`;
    navList.appendChild(homeLi);

    // 2. Category Links
    const categories = [
        { key: 'research', label: 'Research', url: 'research/index.html' },
        { key: 'mechanical', label: 'Mechanical Design', url: 'mechanical-design/index.html' },
        { key: 'photography', label: 'Photography', url: 'photography/index.html' },
        { key: 'music', label: 'Music', url: 'music/index.html' }
    ];

    categories.forEach(cat => {
        const projects = portfolioConfig.projects[cat.key] || [];
        const li = document.createElement('li');
        const catUrl = prefix + cat.url;

        if (projects.length > 1) {
            // Dropdown
            li.className = 'dropdown';
            let updateLinks = projects.map(p => `<a href="${prefix}${p.link}">${p.title}</a>`).join('');

            // Add "View All" link
            updateLinks = `<a href="${catUrl}"><strong>View All</strong></a>` + updateLinks;

            li.innerHTML = `
                <a href="${catUrl}" class="dropbtn">${cat.label} <span class="dropdown-arrow">▾</span></a>
                <div class="dropdown-content">
                    ${updateLinks}
                </div>
            `;
        } else {
            // Single Button
            li.innerHTML = `<a href="${catUrl}">${cat.label}</a>`;
        }
        navList.appendChild(li);
    });

    // 3. Contact Link
    const contactLi = document.createElement('li');
    contactLi.innerHTML = `<a href="${prefix}index.html#contact">Contact</a>`;
    navList.appendChild(contactLi);
}

// Helper to determine path prefix (./ or ../)
function getPathPrefix() {
    // If one of the category names is in the path, assume we are 1 level deep
    const path = window.location.pathname;
    if (path.includes('/research/') ||
        path.includes('/mechanical-design/') ||
        path.includes('/photography/') ||
        path.includes('/music/')) {
        return '../';
    }
    return '';
}


// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load Highlights
function initHighlights() {
    const highlightsGrid = document.getElementById('highlights-grid');

    // Only run if the element exists (i.e., on the home page)
    if (!highlightsGrid) return;

    if (!portfolioConfig.highlights || portfolioConfig.highlights.length === 0) {
        highlightsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No highlights yet.</p>';
        return;
    }

    portfolioConfig.highlights.forEach(item => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.onclick = () => window.location.href = item.link;

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="highlight-info">
                <span class="highlight-category">${item.category}</span>
                <h3>${item.title}</h3>
            </div>
        `;

        highlightsGrid.appendChild(card);
    });
}


// Image Modal
function initModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');

    // Add click event to all gallery images
    document.addEventListener('click', function (e) {
        if (e.target.closest('.gallery-item img')) {
            const img = e.target;
            modal.style.display = 'block';
            modalImg.src = img.dataset.full || img.src;
            captionText.innerHTML = img.alt;
        }
    });

    // Close modal
    close.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Update copyright year
function updateYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Lazy loading for images (optional enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Slideshow Logic
let slideIndices = {};

function initSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach((ss, index) => {
        const id = ss.id || `slideshow-${index + 1}`;
        ss.id = id;
        slideIndices[id] = 1;
        showSlides(1, id);
    });
}

// Check if functions are exposed globally for inline HTML calls
// Since we are in a module/file scope, we might need to attach to window if using inline onclick
window.plusSlides = function (n, slideshowId) {
    showSlides(slideIndices[slideshowId] += n, slideshowId);
};

window.currentSlide = function (n, slideshowId) {
    showSlides(slideIndices[slideshowId] = n, slideshowId);
};

function showSlides(n, slideshowId) {
    let i;
    const container = document.getElementById(slideshowId);
    if (!container) return;

    const slides = container.getElementsByClassName("mySlides");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndices[slideshowId] = 1 }
    if (n < 1) { slideIndices[slideshowId] = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndices[slideshowId] - 1].style.display = "block";
}
