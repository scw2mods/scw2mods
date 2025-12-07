# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Static website showcasing mods for the game **Strip Club Wars 2**, hosted on GitHub Pages. Vanilla architecture (HTML/CSS/JS) without frameworks to maintain simplicity and performance.

## Essential Commands

### Development server
```bash
# Start local server
python3 -m http.server 8000
# Access: http://localhost:8000

# Alternative with npx
npx http-server -p 8000
```

### Git (GitHub Pages deployment)
```bash
# Add a new mod
git add .
git commit -m "feat: Add [Name] mod"
git push origin main
# Site updates automatically in 2-3 minutes
```

**Commit conventions:**
- All commit messages must be in English
- Follow conventional commits format (feat:, fix:, refactor:, etc.)

### Validation
```bash
# Validate JSON mods (online)
# https://jsonlint.com/
```

## Architecture

### Data structure: `data/mods.json`
Central file containing:
- **site**: Site metadata (title, version, lastUpdated)
- **categories**: List of categories with id, name, icon
- **mods**: Array of objects representing each mod

### Mod schema
Required fields: `id`, `name`, `version`, `author`, `description`, `longDescription`, `category`, `status`, `links.download`

Important fields:
- `id`: Unique identifier in snake_case
- `slug`: URL-friendly version for sharing
- `category`: Must match a defined category
- `status`: "stable", "beta" or "alpha"
- `tags`: Array for filtering and search
- `media.screenshots`: Relative paths from `assets/images/mods/`

### JavaScript logic (`js/`)
- **data.js**: `ModsManager` class for loading and managing JSON data
- **app.js**: `ModsApp` class - main logic (rendering, filters, modal)
- **utils.js**: Utility functions (date formatting, lazy loading, URL params)

### CSS (`css/`)
- **style.css**: CSS variables (colors, spacing), base styles, responsive
- **components.css**: Specific components (cards, modal, filters)

BEM convention for CSS classes.

### Important CSS variables
```css
--color-bg-dark: #0a0a0a      /* Main background */
--color-bg-card: #1a1a1a      /* Card background */
--color-accent: #00ff88       /* Neon accent color */
```

## Mod addition workflow

1. **Download file**: Copy mod zip to `downloads/`
   - Format: `mod_name_vX.Y.zip`
   - Size: Usually 10-100KB
   - Convert Windows paths (D:\...) to WSL (/mnt/d/...)

2. **Assets**: Add screenshots to `assets/images/mods/`
   - Format: Optimized JPG/PNG < 500KB
   - Resolution: 1920x1080 or 1280x720
   - Naming: `mod-name-1.jpg`, `mod-name-2.jpg`

3. **JSON**: Add entry to `data/mods.json` → `mods` array
   - Use relative paths for download: `downloads/mod_name_vX.Y.zip`

4. **Validation**: Test locally with HTTP server

5. **Git**: Commit and push to `main`

## Important points

### When modifying JSON
- **Always validate** JSON syntax (no trailing commas)
- Respect indentation (2 spaces)
- Check image paths (relative to `assets/images/mods/`)
- Update `site.lastUpdated` for significant changes

### Relative paths (CRITICAL)
**NEVER use absolute paths** (starting with `/`) in JSON or HTML.

The site is deployed in two contexts:
- **Local**: `http://localhost:8000/` (root)
- **GitHub Pages**: `https://username.github.io/scw2mods/` (subfolder)

✅ **Good** (relative paths):
```json
"download": "downloads/mod_v1.0.zip"
"screenshots": ["mod-screenshot.jpg"]
```

❌ **Bad** (absolute paths):
```json
"download": "/downloads/mod_v1.0.zip"
"screenshots": ["/assets/images/mods/screenshot.jpg"]
```

Relative paths work in both contexts automatically.

### Performance
- Images lazy-loaded via Intersection Observer (`utils.js`)
- Real-time client-side filtering/search
- No external dependencies (CDN)

### Shareable URLs
The site supports GET parameters to share filters and mods:
- `?category=gameplay`: Filter by category
- `?mod=varied-dialogues`: Directly open a mod

These parameters are handled in `applyURLParams()` and `updateURL()`.

## Deployment

The site is automatically deployed on **GitHub Pages** with each push to `main`.
Repository name: `scw2mods.github.io` (or similar for direct URL).

Configuration: Settings → Pages → Branch `main` → `/root`

## Compatibility

- Modern browsers (ES6+)
- Mobile-first responsive design
- Breakpoints: 320px, 768px, 1024px, 1440px
