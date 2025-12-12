# Unused Files Archive

This folder contains files that are no longer used in the project but are kept for reference or backup purposes.

## Contents

### Scripts
- **script.js** - Original monolithic JavaScript file (1198 lines, 46.64 KB)
  - Replaced by modular architecture (7 files: config, utils, language, theme, modal, render-calculator, app)
  - Kept as backup reference

- **convert-to-webp.ps1** - First version of batch WebP converter (had syntax errors)
- **convert-webp.ps1** - Working WebP batch converter script
  - Successfully converted 12 files and saved 53.6 MB

### Original Images (replaced by WebP)

#### Animated GIFs → WebP
- **baraju-ep6.gif** (16.24 MB) → baraju-ep6.webp (4.13 MB) - **74.6% smaller**
- **baraju-ep5.gif** (14.21 MB) → baraju-ep5.webp (2.63 MB) - **81.5% smaller**
- **nussa-movie.gif** (12.18 MB) → nussa-movie.webp (2.96 MB) - **75.7% smaller**
- **jumbo-trailer.gif** (10.64 MB) → jumbo-trailer.webp (2.3 MB) - **78.4% smaller**
- **jumbo-teaser.gif** (9.94 MB) → jumbo-teaser.webp (2.56 MB) - **74.2% smaller**

**Total GIF savings: 48.62 MB → 14.58 MB (70.1% reduction)**

#### Static PNGs → WebP
- **asset-course-pack.png** (1.4 MB) → asset-course-pack.webp (0.1 MB) - **92.6% smaller**
- **kitbash-cyberpunk.png** (1.36 MB) → kitbash-cyberpunk.webp (0.13 MB) - **90.4% smaller**
- **course.png** (1.16 MB) → course.webp (0.09 MB) - **92.3% smaller**
- **asset-management.png** (1.03 MB) → asset-management.webp (0.07 MB) - **93.5% smaller**
- **line-art.png** (0.42 MB) → line-art.webp (0.04 MB) - **90.8% smaller**

**Total PNG savings: 5.37 MB → 0.43 MB (92% reduction)**

## Total Project Optimization
- **Files converted:** 12
- **Space saved:** 53.6 MB (from ~70 MB to ~17 MB)
- **Overall reduction:** 76.6%
- **Page load improvement:** Significant reduction in mobile load time

## WebP Browser Support
- Chrome 23+ (2012)
- Firefox 65+ (2019)
- Edge 18+ (2018)
- Safari 14+ (2020)
- Opera 12.1+ (2012)

**Coverage:** 95%+ of global users

## Fallback Implementation
All WebP images in HTML use `<picture>` element with fallback:
```html
<picture>
    <source srcset="path/to/image.webp" type="image/webp">
    <img src="path/to/image.png" alt="Description">
</picture>
```

## Notes
- Original files kept for backup/reference
- Can be safely deleted if storage space needed
- WebP versions are production-ready
- Conversion quality: 85/100 (excellent quality with significant compression)

---
**Last Updated:** December 12, 2025
**Archived by:** Bio-Link Project Refactor
