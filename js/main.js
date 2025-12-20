// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSmoothScroll();
    initGallery();
    initVideos();
    initAudio();
    initDocuments();
    initModal();
    updateYear();
});

// Mobile Navigation
function initNavigation() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
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

// Load Gallery
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (portfolioConfig.gallery.length === 0) {
        galleryGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No gallery items yet. Add images to the config.js file.</p>';
        return;
    }

    portfolioConfig.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Use thumbnail if available, otherwise use main image
        const imgSrc = item.thumb || item.src;
        
        galleryItem.innerHTML = `
            <img src="${imgSrc}" alt="${item.title}" data-full="${item.src}">
            <div class="overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Load Videos
function initVideos() {
    const videoGrid = document.getElementById('video-grid');
    
    if (portfolioConfig.videos.length === 0) {
        videoGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No videos yet. Add videos to the config.js file.</p>';
        return;
    }

    portfolioConfig.videos.forEach(item => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        videoItem.innerHTML = `
            <video controls>
                <source src="${item.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="video-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        videoGrid.appendChild(videoItem);
    });
}

// Load Audio
function initAudio() {
    const audioList = document.getElementById('audio-list');
    
    if (portfolioConfig.audio.length === 0) {
        audioList.innerHTML = '<p style="text-align: center;">No audio files yet. Add audio to the config.js file.</p>';
        return;
    }

    portfolioConfig.audio.forEach(item => {
        const audioItem = document.createElement('div');
        audioItem.className = 'audio-item';
        
        audioItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <audio controls>
                <source src="${item.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        
        audioList.appendChild(audioItem);
    });
}

// Load Documents
function initDocuments() {
    const documentList = document.getElementById('document-list');
    
    if (portfolioConfig.documents.length === 0) {
        documentList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No documents yet. Add documents to the config.js file.</p>';
        return;
    }

    portfolioConfig.documents.forEach(item => {
        const documentItem = document.createElement('div');
        documentItem.className = 'document-item';
        
        documentItem.innerHTML = `
            <div class="icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.src}" target="_blank" rel="noopener noreferrer">View Document</a>
        `;
        
        documentList.appendChild(documentItem);
    });
}

// Image Modal
function initModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');

    // Add click event to all gallery images
    document.addEventListener('click', function(e) {
        if (e.target.closest('.gallery-item img')) {
            const img = e.target;
            modal.style.display = 'block';
            modalImg.src = img.dataset.full || img.src;
            captionText.innerHTML = img.alt;
        }
    });

    // Close modal
    close.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
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
