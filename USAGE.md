# Portfolio Website Usage Guide

This guide will help you customize and deploy your portfolio website.

## Quick Start (5 Minutes)

### Step 1: Personalize Your Information

Open `js/config.js` and update:
- Your name
- Email address
- Social media links (LinkedIn, GitHub, etc.)
- Hero section text

### Step 2: Add Your Content

Choose what you want to showcase and follow the relevant section below.

#### Adding Gallery Images

1. Place images in `assets/images/gallery/`
2. In `js/config.js`, add to the gallery array:

```javascript
gallery: [
    {
        src: "assets/images/gallery/my-photo.jpg",
        thumb: "assets/images/thumbnails/my-photo.jpg",  // Optional
        title: "Project Title",
        description: "Brief description"
    }
]
```

#### Adding Videos

1. Place video files in `assets/videos/`
2. In `js/config.js`, add to the videos array:

```javascript
videos: [
    {
        src: "assets/videos/my-video.mp4",
        title: "Video Title",
        description: "Video description"
    }
]
```

#### Adding Audio Files

1. Place audio files in `assets/audio/`
2. In `js/config.js`, add to the audio array:

```javascript
audio: [
    {
        src: "assets/audio/my-track.mp3",
        title: "Track Title",
        description: "Track description"
    }
]
```

#### Adding Documents

1. Place PDFs in `assets/documents/`
2. In `js/config.js`, add to the documents array:

```javascript
documents: [
    {
        src: "assets/documents/my-resume.pdf",
        title: "Resume",
        description: "My professional resume",
        icon: "📄"
    }
]
```

### Step 3: Test Locally

Open `index.html` in your web browser to preview your portfolio.

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings → Pages
4. Select "main" branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free & Drag-and-Drop)

1. Go to https://netlify.com
2. Sign up for free account
3. Drag and drop your portfolio folder
4. Get instant HTTPS URL

### Option 3: Vercel (Free & Git Integration)

1. Go to https://vercel.com
2. Sign up and connect your GitHub
3. Import your repository
4. Automatic deployment on every commit

### Option 4: Traditional Web Hosting

1. Get web hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Access via your custom domain

## Customization

### Changing Colors

Edit `css/styles.css` and modify the color variables:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;     /* Accent/link color */
    --accent-color: #e74c3c;        /* Highlight color */
}
```

### Modifying Layout

The website uses CSS Grid for layouts. Key sections to customize:

- `.gallery-grid`: Photo gallery layout
- `.video-grid`: Video section layout  
- `.document-list`: Document section layout

### Adding Sections

To add a new section:

1. Add HTML in `index.html` after existing sections
2. Style it in `css/styles.css`
3. Add navigation link in the header
4. (Optional) Add JavaScript functionality in `js/main.js`

## Content Guidelines

### Image Sizes
- **Gallery**: 1920x1080px recommended
- **Thumbnails**: 400x400px recommended
- **File size**: Under 2 MB per image

### Video Specs
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 or 1280x720
- **File size**: Under 50 MB

### Audio Specs
- **Format**: MP3
- **Bitrate**: 192-320 kbps
- **File size**: Under 15 MB

### Documents
- **Format**: PDF recommended
- **File size**: Under 10 MB

## Troubleshooting

### Images Not Displaying
- Check file paths in `config.js`
- Ensure files exist in correct folders
- Check browser console for errors (F12)

### Videos Not Playing
- Ensure MP4 format with H.264 codec
- Try reducing file size
- Check browser compatibility

### Mobile Menu Not Working
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure all files are loaded correctly

### Slow Loading
- Compress images and videos
- Use thumbnails for gallery
- Consider lazy loading for images
- Host large videos externally

## Best Practices

1. **Keep it Updated**: Regularly update with new work
2. **Optimize Media**: Always compress before uploading
3. **Test Everywhere**: Check on mobile, tablet, and desktop
4. **Backup Regularly**: Keep copies of your portfolio files
5. **Monitor Performance**: Use tools like PageSpeed Insights
6. **Accessibility**: Include alt text for images
7. **SEO**: Update meta tags in `index.html`

## Getting Help

- Check browser console (F12) for errors
- Review README files in asset folders
- Test in different browsers
- Validate HTML/CSS with W3C validators

## Next Steps

Consider adding:
- Contact form functionality
- Blog section
- Project detail pages
- Custom domain name
- Analytics (Google Analytics)
- Newsletter signup
- Social media integration

## Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Pages Guide](https://pages.github.com/)
- [Web Accessibility](https://www.w3.org/WAI/)
