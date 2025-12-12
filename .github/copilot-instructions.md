# GitHub Copilot Instructions for Bio-Link Landing Page Project

## Project Overview
This is a bilingual (English/Indonesia) bio-link landing page for RAF Pictures - 3D Render & Animation services. The project features a glassmorphism design with dark mode support and interactive components.

## Tech Stack
- **HTML5** - Semantic markup
- **TailwindCSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No frameworks, modular architecture
- **CSS Custom Properties** - For theming and design tokens

## Project Structure
```
/
├── index.html              # Main landing page
├── renderfarm.html         # Renderfarm calculator page
├── assets/
│   ├── icons/              # Flag icons (us.png, id.png), UI icons
│   └── images/             # Branding, previews, thumbnails
├── css/
│   ├── core/               # tokens.css, main.css, animation.css
│   ├── components/         # button.css, modal.css
│   └── responsive/         # mobile.css, tablet.css, desktop.css
└── js/
    └── script.js           # Main JavaScript (modular architecture)

```

## Key Features Implemented

### 1. **Language Switcher (Bilingual Support)**
- **Location**: Top right, next to dark mode toggle
- **Languages**: English (default), Indonesia
- **Flag Icons**: `/assets/icons/us.png` and `/assets/icons/id.png`
- **Implementation**:
  - `LanguageManager` in `script.js` handles all translations
  - Uses `data-i18n` attributes on HTML elements
  - Saves language preference to localStorage
  - Integrates with WhatsApp order messages
  
### 2. **Dark Mode Toggle**
- **Location**: Top right corner
- **Styling**: Glass morphism with subtle drop shadow in day mode
- **Theme**: Persists in localStorage
- **Images**: Updates logo and home icon based on theme

### 3. **Animated Components**
- **Watch Full Video button**: Hover zoom animation (scale 1.08)
- **Bio link cards**: Hover scale and transform effects
- **Subscribe button**: Bell ring animation on hover
- **Home button**: Pulse animation on hover

### 4. **Modal System**
- **Portfolio Modal**: 
  - Desktop: 50% screen width
  - Mobile: Fullscreen with landscape orientation lock
- **Video Preview Modal**: Shows GIF preview before YouTube embed
- **Subscribe Modal**: Email subscription form
- **Commission Modal**: Contact form for work inquiries
- **Course Discount Modal**: Shows promotional code

### 5. **Renderfarm Calculator**
- **Features**:
  - Render engine selection (Cycles/Eevee)
  - Resolution presets + custom resolution input
  - Frame count input
  - Price calculation
  - WhatsApp order integration with language support

## Design System

### Colors (CSS Variables in tokens.css)
- Glass morphism effects with backdrop blur
- Light/Dark mode variants
- Shadow layers for depth

### Typography
- Font: Poppins (Google Fonts)
- Weight range: 300-700

### Spacing & Sizing
- Consistent button sizes (38px for language switcher, 40px for others)
- Border radius tokens for consistency
- Responsive breakpoints: mobile (768px), tablet (1024px), desktop (1200px+)

## JavaScript Architecture

### Modular Structure (script.js)
1. **CONFIG** - Constants, translations, video data
2. **Utils** - Helper functions (DOM, localStorage, formatting)
3. **LanguageManager** - Translation system
4. **ThemeManager** - Dark mode handling
5. **ModalManager** - Modal open/close logic
6. **RenderCalculator** - Price calculation logic
7. **FilterManager** - Links/Assets toggle
8. **FormSubmission** - Formspree integration
9. **ModalSetup** - Modal initialization helpers
10. **UIInteractions** - Button handlers, YouTube modals
11. **App** - Main initialization
12. **Lifecycle** - Event listeners

### Key Functions
- `LanguageManager.translatePage()` - Updates all `[data-i18n]` elements
- `ThemeManager.apply(isDark)` - Applies light/dark theme
- `ModalManager.open/close()` - Handles modal animations
- `RenderCalculator.orderViaWhatsapp()` - Generates WhatsApp message in selected language

## Translation System

### How to Add Translations
1. Add key-value pairs to `CONFIG.TRANSLATIONS` in both `en` and `id` objects
2. Add `data-i18n="key_name"` attribute to HTML element
3. Translations auto-update on language switch

### Current Translation Keys
- Profile & navigation elements
- Section titles (Addon, Course, Services, Works, Portfolio, Assets)
- Card titles and descriptions
- Modal content (titles, descriptions, buttons)
- Form labels and placeholders
- WhatsApp message template
- Footer text

## Important Notes

### Styling Guidelines
- Use glass morphism patterns: `var(--color-glass-bg)` + `backdrop-filter: blur()`
- Maintain consistent shadows: light mode uses soft shadows, dark mode deeper
- Button hover states should have smooth transitions (0.3s ease)
- All interactive elements need hover, active, and focus states

### Modal Guidelines
- Always include close button (X) in top-right
- Use `modal-open` class for display state
- Background click should close modal
- ESC key should close modal
- Prevent body scroll when modal is open

### Language Integration
- All user-facing text must have translation keys
- WhatsApp messages must use language-specific templates
- Form validation messages should be translated
- Dynamic content (calculations, dates) should respect locale

### Responsive Behavior
- Portfolio modal: desktop (50vw), mobile (fullscreen landscape)
- Navigation switches to stack on mobile
- Card grid adjusts columns based on screen size
- Modals adapt padding and sizing for mobile

## Common Tasks

### Adding a New Modal
1. Create HTML structure with `id` and `modal-content` class
2. Add close button with event handler
3. Register in `ModalSetup.setupModal()`
4. Add translations for modal content

### Adding a New Translation
1. Add to `CONFIG.TRANSLATIONS.en` and `CONFIG.TRANSLATIONS.id`
2. Add `data-i18n="key"` to HTML element
3. Test language switching

### Updating WhatsApp Template
1. Modify keys in `CONFIG.TRANSLATIONS[lang].whatsapp_*`
2. Update `RenderCalculator.orderViaWhatsapp()` message format

## Testing Checklist
- [ ] Language switcher updates all text
- [ ] Dark mode toggle works and persists
- [ ] All modals open/close correctly
- [ ] Portfolio modal fullscreen works on mobile
- [ ] WhatsApp message uses correct language
- [ ] Form submissions work (Formspree)
- [ ] Animations are smooth (no jank)
- [ ] Responsive design works on all breakpoints
- [ ] Images load correctly (logo variants, flags)
- [ ] localStorage persists theme and language

## External Dependencies
- TailwindCSS CDN
- Font Awesome 6.5.2
- Google Fonts (Poppins)
- Formspree (form handling)

## Future Improvements (Optional)
- Add more languages
- Implement animation preferences (reduced motion)
- Add loading states for async operations
- Optimize image delivery (WebP, lazy loading)
- Add analytics integration
- Implement service worker for offline support

---
**Last Updated**: December 11, 2025
**Maintainer**: RAF Pictures Development Team
