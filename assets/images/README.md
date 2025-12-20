# Images

This folder contains image assets for the portfolio website.

## Folder Structure

- **gallery/**: Full-size images displayed in the gallery
- **thumbnails/**: (Optional) Smaller versions of gallery images for faster loading

## Supported Formats

- JPG/JPEG
- PNG
- GIF
- WebP
- SVG

## Best Practices

### Gallery Images
- **Recommended size**: 1920x1080px or similar (Full HD)
- **File size**: Keep under 1-2 MB per image for good performance
- **Naming**: Use descriptive names without spaces (e.g., `sunset-beach.jpg`)

### Thumbnails
- **Recommended size**: 400x400px (square) or proportional
- **File size**: Keep under 200 KB
- **Naming**: Match the gallery image name (e.g., `sunset-beach.jpg`)

## Adding Images

1. Place your images in the `gallery/` folder
2. (Optional) Create thumbnails and place in `thumbnails/` folder
3. Update `js/config.js` with image information:

```javascript
gallery: [
    {
        src: "assets/images/gallery/your-image.jpg",
        thumb: "assets/images/thumbnails/your-image.jpg",  // Optional
        title: "Image Title",
        description: "Image description"
    }
]
```

## Optimization Tips

- Compress images before uploading using tools like:
  - TinyPNG (https://tinypng.com)
  - ImageOptim
  - Squoosh (https://squoosh.app)
- Use WebP format for better compression (with JPG fallback)
- Create responsive images for different screen sizes if needed
