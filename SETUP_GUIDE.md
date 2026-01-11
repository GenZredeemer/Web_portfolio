# 🎨 Personal Website Setup Guide

Welcome! This guide will help you set up and customize your new personal portfolio website.

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Customization Steps](#customization-steps)
3. [File Structure Explained](#file-structure-explained)
4. [Frontend Components](#frontend-components)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

---

## ⚡ Quick Start

### Step 1: Open the Website
1. Navigate to the project folder
2. Double-click `index.html` to open it in your browser
3. You should see your portfolio website!

### Step 2: Start Customizing
Follow the customization steps below to make it your own.

---

## ✏️ Customization Steps

### 1. Update Your Personal Information

**Edit `index.html`** and find these sections:

#### Home Section (Lines ~73-100)
```html
<h1 class="home__name">Yash Datar</h1>
<h3 class="home__education">Developer | Creator | Innovator</h3>
<p class="home__description">
    Welcome to my universe! I'm passionate about...
</p>
```
👉 **Replace** "Yash Datar" with your name and update the description

#### About Section (Lines ~120-150)
```html
<h3 class="about__title">Hey there! 👋</h3>
<p class="about__description">
    I'm Yash Datar, a passionate developer...
</p>
```
👉 **Update** with your own story and interests

#### Contact Information (Lines ~550-590)
```html
<a href="mailto:yash.datar@example.com">yash.datar@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<span>Your City, Country</span>
```
👉 **Replace** with your actual contact details

#### Social Media Links (Find all instances)
```html
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
<a href="https://twitter.com/yourusername" target="_blank">
```
👉 **Update** with your actual social media profiles

### 2. Add Your Photo

**Option A: Use the same filename**
- Replace `assets/images/IMG_0632.jpg` with your photo
- Keep the name as `IMG_0632.jpg`
- Done! No code changes needed.

**Option B: Use a different filename**
1. Add your photo to `assets/images/`
2. Edit `index.html` line ~96:
   ```html
   <img src="assets/images/YOUR_PHOTO.jpg" alt="Your Name">
   ```

**Photo Tips:**
- Use a square image (e.g., 800x800px)
- JPG or PNG format
- Keep file size under 500KB for faster loading
- Professional or semi-professional headshot works best

### 3. Update Skills

Find the Skills section in `index.html` (Lines ~165-200):

```html
<div class="skill">
    <div class="skill__header">
        <i class="fab fa-html5"></i>
        <span>HTML/CSS</span>
    </div>
    <div class="skill__bar">
        <div class="skill__percentage" style="width: 90%"></div>
    </div>
</div>
```

👉 **Change:**
- Icon class (find icons at [fontawesome.com](https://fontawesome.com/icons))
- Skill name
- Percentage width (0-100%)

**Add More Skills:**
Copy the entire `<div class="skill">...</div>` block and paste below existing skills.

### 4. Add Your Resume/Experience

#### Update Education (Lines ~230-250)
```html
<h4>Bachelor's Degree in Computer Science</h4>
<span class="resume__organization">University Name</span>
<span class="resume__date">2020 - 2024</span>
```
👉 **Replace** with your actual education

#### Update Work Experience (Lines ~255-290)
Add or remove `<div class="resume__item">` blocks as needed.

#### Add Your Resume PDF
1. Export your resume as a PDF
2. Save it as `assets/resume.pdf`
3. The download button will automatically work!

### 5. Showcase Your Projects

Find the Projects section (Lines ~310-380):

```html
<div class="project__card">
    <div class="project__img">
        <i class="fas fa-globe project__icon"></i>
    </div>
    <div class="project__content">
        <h3 class="project__title">Personal Portfolio</h3>
        <p class="project__description">
            A modern, responsive portfolio website...
        </p>
        <div class="project__tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
        <div class="project__links">
            <a href="#" class="project__link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="#" class="project__link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

**To Add More Projects:**
1. Copy the entire `<div class="project__card">...</div>`
2. Paste it below existing projects
3. Update the content

**Project Icons:**
- `fa-globe` - Website
- `fa-shopping-cart` - E-commerce
- `fa-robot` - AI/Bot
- `fa-mobile-alt` - Mobile app
- `fa-gamepad` - Game
- Find more at [fontawesome.com](https://fontawesome.com/icons)

### 6. Update Hobbies

Edit the Hobbies section (Lines ~390-450):

```html
<div class="hobby__card">
    <div class="hobby__icon">
        <i class="fas fa-tv"></i>
    </div>
    <h3 class="hobby__title">TV Shows</h3>
    <p class="hobby__description">
        Big fan of How I Met Your Mother...
    </p>
</div>
```

👉 Add or remove hobby cards as needed!

### 7. Customize Colors

Edit `css/styles.css` (Lines 1-40) to change the color scheme:

```css
:root {
    --primary-color: #667eea;      /* Purple - Main buttons, accents */
    --primary-alt: #764ba2;        /* Dark purple - Hover states */
    --secondary-color: #f093fb;    /* Pink - Gradients, highlights */
    --title-color: #1a202c;        /* Almost black - Headings */
    --text-color: #4a5568;         /* Gray - Body text */
}
```

**Popular Color Schemes:**

**Blue & Orange:**
```css
--primary-color: #3b82f6;
--primary-alt: #2563eb;
--secondary-color: #f97316;
```

**Green & Teal:**
```css
--primary-color: #10b981;
--primary-alt: #059669;
--secondary-color: #14b8a6;
```

**Pink & Purple:**
```css
--primary-color: #ec4899;
--primary-alt: #db2777;
--secondary-color: #a855f7;
```

Use [coolors.co](https://coolors.co/) to find color palettes!

---

## 📁 File Structure Explained

```
Personal-Website/
│
├── index.html              # Main HTML file - All content here
│   └── Contains: Navigation, Home, About, Resume, Projects, 
│       Hobbies, Contact, Footer sections
│
├── css/
│   └── styles.css          # All styling and animations
│       └── CSS Variables (colors, fonts)
│       └── Layout styles (grid, flexbox)
│       └── Animations (fade, slide, float)
│       └── Responsive design (mobile, tablet, desktop)
│
├── js/
│   └── main.js             # All interactive features
│       └── Mobile menu toggle
│       └── Smooth scrolling
│       └── Active link highlighting
│       └── Scroll animations
│       └── Contact form handling
│       └── Scroll progress bar
│
├── assets/
│   ├── images/
│   │   └── IMG_0632.jpg    # Your profile photo
│   └── resume.pdf          # Your downloadable resume (add this)
│
├── public/                 # Old files - can be deleted if not needed
│
├── README.md               # Documentation
├── SETUP_GUIDE.md         # This file
└── .gitignore             # Git ignore rules
```

---

## 🎨 Frontend Components

### What Each Technology Does:

#### HTML (index.html)
**Purpose:** Structure and content of your website

**Key Sections:**
- `<header>` - Navigation bar at top
- `<section class="home">` - Hero/landing section
- `<section class="about">` - About me with skills
- `<section class="resume">` - Education & experience
- `<section class="projects">` - Project showcase
- `<section class="hobbies">` - Personal interests
- `<section class="contact">` - Contact form & links
- `<footer>` - Bottom footer with social links

#### CSS (css/styles.css)
**Purpose:** Visual design, colors, animations

**Features:**
1. **CSS Variables** - Easy color customization
2. **Flexbox & Grid** - Modern responsive layouts
3. **Animations:**
   - Fade in effects
   - Slide animations
   - Floating profile image
   - Progress bar animations
   - Hover effects
4. **Responsive Design:**
   - Desktop (>992px) - Full layout
   - Tablet (768-992px) - Adjusted layout
   - Mobile (<768px) - Stacked layout, hamburger menu

#### JavaScript (js/main.js)
**Purpose:** Interactive features and dynamic behavior

**Features:**
1. **Navigation:**
   - Mobile menu toggle
   - Active link highlighting
   - Smooth scrolling
2. **Scroll Effects:**
   - Header background on scroll
   - Scroll-to-top button
   - Progress bar indicator
3. **Animations:**
   - Typing effect for subtitle
   - Skill bars animation
   - Fade in on scroll
4. **Form Handling:**
   - Contact form validation
   - Email client integration
5. **Performance:**
   - Debounced scroll events
   - Lazy loading
   - Intersection Observer API

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free & Easy)

1. **Create GitHub Account**
   - Go to [github.com](https://github.com) and sign up

2. **Create Repository**
   - Click "+" → "New repository"
   - Name it: `personal-website` or `yourusername.github.io`
   - Make it public

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag all your website files
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: "main" branch
   - Click "Save"

5. **Visit Your Site**
   - URL: `https://yourusername.github.io/personal-website`
   - Or: `https://yourusername.github.io` (if named that way)

### Option 2: Netlify (Recommended)

1. **Go to [netlify.com](https://www.netlify.com/)**
2. **Sign up** with GitHub/Email
3. **Deploy:**
   - Drag your project folder to Netlify
   - Or connect your GitHub repository
4. **Done!** Your site is live in seconds
   - You get a URL like: `yoursite.netlify.app`
   - Free custom subdomain included

### Option 3: Vercel

1. **Go to [vercel.com](https://vercel.com/)**
2. **Sign up** with GitHub
3. **Import project**
   - Click "New Project"
   - Connect your GitHub repo
   - Click "Deploy"
4. **Live!** At `yourproject.vercel.app`

---

## 🐛 Troubleshooting

### Images Not Showing?
**Problem:** Profile photo or icons not loading

**Solutions:**
1. Check file path is correct: `assets/images/IMG_0632.jpg`
2. Make sure file name matches exactly (case-sensitive)
3. Try using relative path: `./assets/images/IMG_0632.jpg`
4. If deployed, check files uploaded correctly

### Styles Not Working?
**Problem:** Website looks plain, no colors/animations

**Solutions:**
1. Check `css/styles.css` file exists
2. Verify link in `index.html`: `<link rel="stylesheet" href="css/styles.css">`
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Check browser console for errors (F12 → Console)

### JavaScript Not Working?
**Problem:** Menu won't open, no smooth scrolling

**Solutions:**
1. Check `js/main.js` file exists
2. Verify script tag in `index.html`: `<script src="js/main.js"></script>`
3. Check browser console for errors (F12 → Console)
4. Make sure script is at bottom of HTML (before `</body>`)

### Mobile Menu Not Working?
**Problem:** Hamburger menu won't open on mobile

**Solutions:**
1. Check JavaScript is loaded (see above)
2. Test on actual mobile device, not just small browser window
3. Clear cache and reload

### Resume Download Not Working?
**Problem:** Download button doesn't work

**Solutions:**
1. Add your resume PDF: `assets/resume.pdf`
2. Check the file path in HTML matches your file name
3. Make sure file is not in a subfolder

### Site Looks Weird on Mobile?
**Problem:** Layout broken on phone

**Solutions:**
1. Check viewport meta tag exists:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. Test in actual mobile browser, not desktop responsive mode
3. Check CSS media queries are working

---

## 🎯 Next Steps

After setup, consider:

1. **Add Analytics**
   - Google Analytics
   - Plausible Analytics

2. **Add Backend** (Advanced)
   - Contact form that actually sends emails
   - Using services like:
     - Formspree
     - EmailJS
     - Netlify Forms

3. **SEO Optimization**
   - Add meta descriptions
   - Add Open Graph tags
   - Submit to Google Search Console

4. **Performance**
   - Optimize images (use TinyPNG.com)
   - Minimize CSS/JS (for production)
   - Enable caching

5. **More Features**
   - Blog section
   - Dark mode toggle
   - Testimonials section
   - Project filters

---

## 💡 Tips

1. **Content First:** Focus on good content before fancy features
2. **Less is More:** Don't overcrowd with information
3. **Keep It Updated:** Regularly update projects and skills
4. **Test Everywhere:** Check on different browsers and devices
5. **Get Feedback:** Ask friends to review your site
6. **Portfolio is Never Done:** Keep improving over time

---

## 🆘 Need Help?

- **Font Awesome Icons:** [fontawesome.com/icons](https://fontawesome.com/icons)
- **Color Palettes:** [coolors.co](https://coolors.co/)
- **Image Optimization:** [tinypng.com](https://tinypng.com/)
- **HTML/CSS Reference:** [developer.mozilla.org](https://developer.mozilla.org/)
- **Learning Resources:**
  - [freeCodeCamp](https://www.freecodecamp.org/)
  - [MDN Web Docs](https://developer.mozilla.org/)
  - [W3Schools](https://www.w3schools.com/)

---

## ✅ Checklist

Before going live, make sure you:

- [ ] Updated name and title
- [ ] Added your photo
- [ ] Updated about me section
- [ ] Added your education
- [ ] Added work experience
- [ ] Uploaded resume PDF
- [ ] Added your projects
- [ ] Updated hobbies
- [ ] Changed contact information
- [ ] Updated all social media links
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Proofread all text
- [ ] Optimized images
- [ ] Tested contact form

---

## 🎉 Congratulations!

You now have a professional personal website! Remember to:
- Keep it updated with new projects
- Share it on your resume and LinkedIn
- Use it as your professional presence online

**Good luck with your web development journey!** 🚀

---

Made with ❤️ - Happy Coding!
