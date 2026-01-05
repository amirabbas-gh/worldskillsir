# WorldSkills Iran Website

A modern, refactored website showcasing Iran's participation in WorldSkills competitions, featuring the achievements of Iranian competitors and promoting skill development.

## 🎯 Overview

This website serves as the platform for WorldSkills Iran, highlighting:

- Team Iran's achievements in WorldSkills Lyon 2024
- Information about the Iran National Skills competition
- Contact information and social media presence
- Beautiful visual elements showcasing the spirit of skills development

## ✨ Features

- **Modern Architecture**: Refactored with ES6+ modules and component-based structure
- **Responsive Design**: Works seamlessly across all devices
- **Interactive Video Background**: Engaging video player with controls
- **Dynamic Content**: Competitor data loaded from JSON configuration
- **Modern CSS**: CSS custom properties (variables) for easy theming
- **Accessibility**: Improved semantic HTML and ARIA labels
- **Performance**: Optimized images with lazy loading
- **SEO Optimized**: Proper meta tags and semantic structure

## 🏗️ Project Structure

```
worldskillsir/
├── src/                   # Source code and assets
│   ├── css/               # CSS architecture
│   │   ├── components/    # Component-specific styles
│   │   │   ├── header.css
│   │   │   ├── main.css
│   │   │   ├── result.css
│   │   │   └── footer.css
│   │   ├── animation.min.css  # WOW.js animations
│   │   ├── responsive.css    # Responsive styles
│   │   ├── variables.css     # CSS custom properties
│   │   ├── base.css          # Reset and base styles
│   │   └── main.css          # Main stylesheet (imports all)
│   ├── js/                # JavaScript modules
│   │   ├── modules/       # ES6+ modules
│   │   │   ├── videoPlayer.js
│   │   │   ├── scrollAnimation.js
│   │   │   ├── wowAnimation.js
│   │   │   └── competitors.js
│   │   ├── main.js        # Application entry point
│   │   └── wow.min.js     # WOW.js library
│   ├── fonts/             # Font files
│   │   ├── Acorn-*.woff2, *.ttf, *.woff
│   │   └── Montserrat-*.ttf
│   ├── images/            # Image assets
│   │   ├── competitors/   # Competitor photos
│   │   └── *.png, *.jpg, *.svg, *.jpeg
│   ├── videos/            # Video files
│   │   └── video.mp4
│   └── data/              # Data configuration
│       ├── competitors.json
│       └── config.json
├── index.html             # Main HTML file
├── favicon.svg            # Site favicon
├── package.json           # Project configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser with ES6 module support
- A local web server (for development)

### Installation

1. Clone or download the repository
2. No build process required - this is a static site

### Running Locally

#### Option 1: Using npm (if you have Node.js installed)

```bash
npm install
npm start
```

#### Option 2: Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 3: Using PHP

```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Key Files

### HTML

- `index.html` - Main HTML file with semantic structure and accessibility improvements

### CSS Architecture

- `src/css/variables.css` - Design tokens (colors, fonts, spacing, etc.)
- `src/css/base.css` - Reset and base element styles
- `src/css/components/` - Component-specific stylesheets
- `src/css/main.css` - Main stylesheet that imports all modules

### JavaScript Modules

- `src/js/main.js` - Application entry point
- `src/js/modules/videoPlayer.js` - Video playback controls
- `src/js/modules/scrollAnimation.js` - Scroll-based animations
- `src/js/modules/wowAnimation.js` - WOW.js initialization
- `src/js/modules/competitors.js` - Dynamic competitor rendering

### Data

- `src/data/competitors.json` - Competitor information
- `src/data/config.json` - Site configuration

## 🎨 Customization

### Colors

Edit `src/css/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #434343;
  --color-accent: #cc9b7e;
  /* ... */
}
```

### Competitors

Edit `src/data/competitors.json` to add or modify competitor information.

### Site Configuration

Edit `src/data/config.json` to update social media links, site metadata, etc.

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties
- **JavaScript (ES6+)** - Modern JavaScript with modules
- **WOW.js** - Scroll animations library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a refactored version of the original project. The structure has been improved for:

- Better maintainability
- Easier customization
- Modern development practices
- Improved performance

## 📝 License

© WorldSkills Iran. All rights reserved.

Designed and developed in the 47th WorldSkills Competition Web Camp 2024

## 👤 Credits

**Original Design & Development**: Amirabbas Ghasemi (2024)

## 🔗 Links

- Website: [worldskills.ir](https://worldskills.ir)
- Instagram: [@worldskillsiran](https://instagram.com/worldskillsiran)
- LinkedIn: [WorldSkills Iran](https://www.linkedin.com/company/worldskills-iran/)
- National Skills: [skill.irantvto.ir](https://skill.irantvto.ir)

---

**Note**: This is a refactored version with improved project structure, modern JavaScript (ES6+ modules), organized CSS with variables, and better code organization. The original functionality is preserved while making the codebase more maintainable and scalable.
