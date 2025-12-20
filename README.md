# Kevin Cotellesso Portfolio Website

A modern, responsive portfolio website framework designed to showcase creative work across multiple mediums including photos, videos, audio, and documents.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multi-Media Support**: Display photos, videos, audio files, and PDF documents
- **Organized Asset Structure**: Clean folder organization for easy content management
- **Modal Image Viewer**: Click on gallery images for full-size viewing
- **Smooth Navigation**: Smooth scrolling and mobile-friendly navigation menu
- **Easy Customization**: Simple configuration file for quick updates
- **No Build Process Required**: Pure HTML, CSS, and JavaScript - ready to host

## 📁 Folder Structure

```
kevin-cotellesso-portfolio-site/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── config.js          # Portfolio configuration (edit this!)
│   └── main.js            # Main JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── gallery/       # Full-size gallery images
│   │   └── thumbnails/    # Thumbnail versions (optional, for faster loading)
│   ├── videos/            # Video files (MP4 recommended)
│   ├── audio/             # Audio files (MP3, WAV, etc.)
│   └── documents/         # PDF and other documents
└── README.md              # This file
```

## 🚀 Getting Started

### 1. Add Your Content

#### Images
- Place full-size images in `assets/images/gallery/`
- (Optional) Create thumbnails and place in `assets/images/thumbnails/`
- Supported formats: JPG, PNG, GIF, WebP

#### Videos
- Place video files in `assets/videos/`
- Recommended format: MP4 (H.264 codec for best compatibility)

#### Audio
- Place audio files in `assets/audio/`
- Supported formats: MP3, WAV, OGG

#### Documents
- Place PDF and other documents in `assets/documents/`

### 2. Configure Your Portfolio

Edit `js/config.js` to add your content:

```javascript
const portfolioConfig = {
    // Update personal information
    name: "Your Name",
    email: "your.email@example.com",
    
    // Add gallery images
    gallery: [
        {
            src: "assets/images/gallery/photo1.jpg",
            thumb: "assets/images/thumbnails/photo1.jpg",
            title: "My Photo",
            description: "Description here"
        }
    ],
    
    // Add videos, audio, and documents similarly
};
```

### 3. Host Your Portfolio

This is a static website that can be hosted on:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Simple deployment with Git integration
- **Traditional Web Hosting**: Upload files via FTP

#### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Layout
Modify grid layouts, spacing, and responsive breakpoints in `css/styles.css`

### Functionality
Extend features by editing `js/main.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technical Details

- Pure HTML5, CSS3, and JavaScript (ES6+)
- No frameworks or build tools required
- Responsive CSS Grid and Flexbox layouts
- CSS animations for smooth interactions
- Vanilla JavaScript for all functionality

## 📄 License

This project is available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📧 Contact

For questions or support, please reach out through the contact information provided in the portfolio.