# DataLabs Website

A professional landing page and demo website for DataLabs - Reality-as-a-Service.

## Overview

This is a two-page website showcasing DataLabs' mission to convert videos into structured, digestible forms of data for AI training. The website features:

- **Page 1**: Landing page with heading, slogan, description, video demo, and contact information
- **Page 2**: Detailed explanation of how it works, why it matters, dataset outputs, and call to action

## Features

- Clean, modern, professional design
- Smooth scrolling navigation
- Responsive layout (mobile-friendly)
- Interactive elements and animations
- Integration of demo screenshots showing video analysis capabilities

## File Structure

```
datalabs.world/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Navigation and interactivity
├── assets/             # Demo images
│   ├── Gemini_Generated_Image_1fm0ve1fm0ve1fm0-d0cfec21-c845-467c-a47d-cf3853bc76e9.png
│   ├── Gemini_Generated_Image_1fm0ve1fm0ve1fm0-2-f3d29120-800c-419c-866e-63accae89e3e.png
│   └── Gemini_Generated_Image_1fm0ve1fm0ve1fm0-3-33e16905-6741-4867-bc41-ff34c3aa58b4.png
└── README.md           # This file
```

## Usage

Simply open `index.html` in a web browser. No build process or server required - it's a static website.

### Local Development

You can use any local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

- **Colors**: Edit CSS variables in `styles.css` (root `:root` section)
- **Content**: Modify text in `index.html`
- **Images**: Replace images in `assets/` folder and update paths in HTML
- **Styling**: Adjust styles in `styles.css`

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with CSS Grid and Flexbox support.

## Deploy to GitHub Pages

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `datalabs-world` or `datalabs.world`).
2. Do **not** initialize with a README (you already have one).
3. In your project folder, add the remote and push:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. On GitHub: **Settings → Pages** → under "Build and deployment", set **Source** to **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**. Save.
6. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` after a minute or two.

## Contact

Ryan Biju Sebastian - rb2143@cam.ac.uk
