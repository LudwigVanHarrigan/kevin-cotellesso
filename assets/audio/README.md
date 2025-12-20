# Audio

This folder contains audio assets for the portfolio website.

## Supported Formats

- **MP3** (Recommended) - Best browser compatibility
- WAV - Uncompressed, high quality
- OGG - Good compression, open format
- M4A/AAC - Good quality and compression

## Best Practices

- **Recommended format**: MP3 (320 kbps or 192 kbps)
- **File size**: Keep files reasonable size (under 10-15 MB)
- **Naming**: Use descriptive names without spaces (e.g., `piano-composition.mp3`)
- **Metadata**: Include proper ID3 tags (title, artist, album)

## Adding Audio Files

1. Place your audio files in this folder
2. Update `js/config.js` with audio information:

```javascript
audio: [
    {
        src: "assets/audio/your-audio.mp3",
        title: "Audio Track Title",
        description: "Track description"
    }
]
```

## Audio Use Cases

This section is perfect for:
- Music compositions
- Podcasts
- Voice-over demos
- Sound design samples
- Audio recordings
- Interviews

## Optimization Tips

- Convert audio to MP3 if in other formats
- Use appropriate bitrate:
  - **320 kbps**: High quality music
  - **192 kbps**: Good quality, smaller file
  - **128 kbps**: Acceptable for voice/podcasts
- Normalize audio levels for consistent playback
- Add fade-ins and fade-outs where appropriate

## Tools for Audio Processing

- **Audacity** (free, open-source)
- **Adobe Audition**
- **GarageBand** (Mac)
- **Online converters**: CloudConvert, Online Audio Converter

## Audio Player Features

The website's audio player includes:
- Play/Pause controls
- Volume adjustment
- Time scrubbing
- Current time / Duration display
- Download option (browser dependent)
