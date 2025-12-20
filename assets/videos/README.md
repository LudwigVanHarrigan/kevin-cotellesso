# Videos

This folder contains video assets for the portfolio website.

## Supported Formats

- **MP4** (Recommended) - H.264 codec with AAC audio
- WebM - VP9 codec
- OGG - Theora codec

## Best Practices

- **Recommended format**: MP4 with H.264 codec (best browser compatibility)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **File size**: Compress videos to keep under 50 MB when possible
- **Duration**: Consider shorter clips for better user experience
- **Naming**: Use descriptive names without spaces (e.g., `project-demo.mp4`)

## Adding Videos

1. Place your video files in this folder
2. Update `js/config.js` with video information:

```javascript
videos: [
    {
        src: "assets/videos/your-video.mp4",
        title: "Video Title",
        description: "Video description"
    }
]
```

## Optimization Tips

- Compress videos before uploading using tools like:
  - HandBrake (free, open-source)
  - FFmpeg
  - CloudConvert (online)
- Use video encoding settings:
  - Codec: H.264
  - Bitrate: 2-5 Mbps for HD
  - Audio: AAC, 128-192 kbps
- Consider hosting large videos on platforms like:
  - YouTube (embed links)
  - Vimeo (embed links)
  - Cloud storage with direct links

## Video Controls

Videos will display with built-in browser controls allowing users to:
- Play/Pause
- Adjust volume
- Fullscreen viewing
- Seek through video
