# Documents

This folder contains document assets (PDFs, etc.) for the portfolio website.

## Supported Formats

- **PDF** (Recommended) - Universal format, best compatibility
- DOC/DOCX - Microsoft Word documents
- TXT - Plain text files
- Other document formats supported by browsers

## Best Practices

- **Recommended format**: PDF for best compatibility
- **File size**: Keep PDFs optimized (under 10 MB when possible)
- **Naming**: Use descriptive names without spaces (e.g., `resume-2024.pdf`)
- **Security**: Remove sensitive information before uploading
- **Accessibility**: Ensure PDFs are properly tagged for accessibility

## Adding Documents

1. Place your document files in this folder
2. Update `js/config.js` with document information:

```javascript
documents: [
    {
        src: "assets/documents/your-document.pdf",
        title: "Document Title",
        description: "Document description",
        icon: "📄"  // Emoji icon for visual representation
    }
]
```

## Document Use Cases

This section is perfect for:
- Resumes/CVs
- Portfolio PDFs
- Case studies
- Published articles
- Whitepapers
- Certifications
- Press kits
- Project documentation

## Icon Options

Use relevant emoji icons to represent different document types:
- 📄 - General document
- 📑 - Resume/CV
- 📊 - Report/Analysis
- 📋 - Case study
- 📰 - Article/Publication
- 🎓 - Certificate/Academic
- 📖 - Portfolio/Book
- 📁 - Collection/Archive

## Optimization Tips

### For PDFs:
- Use PDF compression tools:
  - Adobe Acrobat (Reduce File Size)
  - Smallpdf (https://smallpdf.com)
  - PDF Compressor
- Optimize images within PDFs
- Remove unnecessary metadata
- Use appropriate resolution (150-300 DPI for web)

### For Other Documents:
- Convert to PDF for better compatibility
- Ensure fonts are embedded
- Test opening in different browsers
- Consider providing multiple format options

## Security Considerations

- Remove personal information like:
  - Home address (if not necessary)
  - Phone numbers (use professional contact only)
  - Social security numbers
  - Private email addresses
- Watermark sensitive documents if needed
- Use password protection for confidential content
- Consider hosting sensitive docs on secure platforms

## Viewing Behavior

Documents will open in a new browser tab/window, allowing users to:
- View in browser (if supported)
- Download to their device
- Print if needed
