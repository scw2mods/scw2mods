# 🎮 SCW2 Mods Showcase

> Complete collection of mods for Strip Club Wars 2

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://scw2mods.github.io)

## 📋 About

Modern static website showcasing all available mods for **Strip Club Wars 2**. This project provides an intuitive interface to discover, search, and download community-created mods.

**🔗 Live Site:** [https://scw2mods.github.io](https://scw2mods.github.io)

## ✨ Features

- 🔍 **Instant Search** - Quickly find the mod you're looking for
- 🏷️ **Category Filters** - Gameplay, Graphics, Interface, Audio, Utilities
- 📊 **Multiple Sorting** - By name, date, or popularity
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Optimized Performance** - Fast loading with lazy image loading
- 🎨 **Modern Interface** - Dark gaming design with neon accents
- 🔗 **Easy Sharing** - URLs with parameters to share filters and mods

## 🛠️ Tech Stack

- **HTML5** - Semantic and accessible structure
- **CSS3** - Grid/Flexbox for responsive layout
- **Vanilla JavaScript** - No dependencies, lightweight code
- **JSON** - Mods data storage
- **GitHub Pages** - Free and reliable hosting

## 📁 Project Structure

```
scw-mods/
├── index.html              # Main page
├── css/
│   ├── style.css          # Main styles
│   └── components.css     # Component styles
├── js/
│   ├── app.js             # Main logic
│   ├── data.js            # Data management
│   └── utils.js           # Utility functions
├── data/
│   └── mods.json          # Mods database
├── assets/
│   ├── images/            # Images and screenshots
│   └── icons/             # Icons
├── README.md              # Documentation
├── CONTRIBUTING.md        # Contribution guide
└── .gitignore            # Ignored files
```

## 🚀 Installation & Local Development

### Prerequisites

- A local web server (e.g., Live Server for VS Code, Python SimpleHTTPServer, etc.)
- Git

### Clone the project

```bash
git clone https://github.com/scw2mods/scw2mods.github.io.git
cd scw2mods.github.io
```

### Run locally

**Option 1: VS Code Live Server**
1. Install the "Live Server" extension
2. Right-click on `index.html` → "Open with Live Server"

**Option 2: Python**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**Option 3: Node.js**
```bash
npx http-server -p 8000
```

## 📝 Adding a New Mod

### 1. Prepare assets

Add mod screenshots to `assets/images/mods/`:
```
assets/images/mods/
├── my-mod-1.jpg
├── my-mod-2.jpg
└── my-mod-icon.png
```

### 2. Edit data/mods.json

Add an entry to the `mods` array:

```json
{
  "id": "my_mod",
  "name": "My Awesome Mod",
  "slug": "my-awesome-mod",
  "version": "1.0",
  "author": "YourName",
  "description": "Short mod description (max 150 characters)",
  "longDescription": "Detailed description explaining all features...",
  "category": "gameplay",
  "tags": ["tag1", "tag2", "tag3"],
  "status": "stable",
  "compatibility": {
    "gameVersion": "1.0+",
    "dependencies": [],
    "conflicts": []
  },
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "media": {
    "screenshots": ["my-mod-1.jpg", "my-mod-2.jpg"],
    "video": null,
    "icon": "my-mod-icon.png"
  },
  "links": {
    "download": "https://github.com/user/repo/releases",
    "source": "https://github.com/user/repo",
    "docs": "https://github.com/user/repo/wiki",
    "issues": "https://github.com/user/repo/issues"
  },
  "stats": {
    "downloads": 0,
    "stars": 0,
    "lastUpdate": "2025-12-07"
  },
  "installation": "Installation instructions...",
  "changelog": [
    {
      "version": "1.0",
      "date": "2025-12-07",
      "changes": ["Initial release"]
    }
  ]
}
```

### 3. Test locally

Verify the mod displays correctly locally before committing.

### 4. Commit and push

```bash
git add .
git commit -m "Add mod: My Awesome Mod"
git push origin main
```

The site will be automatically updated on GitHub Pages in 2-3 minutes.

## 🎨 Customization

### Colors

Colors are defined in `css/style.css` via CSS variables:

```css
:root {
    --color-bg-dark: #0a0a0a;      /* Main background */
    --color-bg-card: #1a1a1a;      /* Card background */
    --color-accent: #00ff88;        /* Accent color */
    --color-text: #ffffff;          /* Main text */
    --color-text-muted: #a0a0a0;   /* Secondary text */
}
```

### Categories

Modify categories in `data/mods.json`:

```json
"categories": [
  {"id": "new_category", "name": "New Category", "icon": "🎯"}
]
```

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### How to contribute

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## 👥 Authors

- **SCW2 Community** - *Initial development*

## 🙏 Acknowledgments

- All mod creators from the SCW2 community
- Project contributors
- The open source community

## 📞 Support

- 🐛 **Report a bug**: [Issues](https://github.com/scw2mods/scw2mods.github.io/issues)
- 💬 **Discussions**: [Discussions](https://github.com/scw2mods/scw2mods.github.io/discussions)
- 📧 **Email**: contact@scw2mods.fr

---

**Made with ❤️ by the SCW2 community**
