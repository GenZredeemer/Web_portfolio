# ⚡ Quick Reference Guide

## 🎯 Most Common Tasks

### 1. Update Your Name
**File:** `index.html`  
**Line:** ~73
```html
<h1 class="home__name">YOUR NAME HERE</h1>
```

### 2. Change Colors
**File:** `css/styles.css`  
**Lines:** 6-15
```css
:root {
    --primary-color: #667eea;     /* Change this */
    --secondary-color: #f093fb;   /* And this */
}
```

### 3. Add Your Photo
**Replace:** `assets/images/IMG_0632.jpg` with your photo  
**Keep same name** or update line ~96 in `index.html`

### 4. Update Contact Email
**File:** `index.html`  
**Find and replace:** `yash.datar@example.com` with your email

### 5. Add Social Links
**File:** `index.html`  
**Lines:** ~565, ~640  
**Replace:** `yourusername` with your actual usernames

### 6. Add Your Resume PDF
**Location:** `assets/resume.pdf`  
**Just drop your PDF here with this name!**

---

## 📁 File Purposes

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `index.html` | All content (text, links) | Often |
| `css/styles.css` | Design, colors, animations | Sometimes |
| `js/main.js` | Interactive features | Rarely |
| `assets/images/` | Your photos | Once |
| `assets/resume.pdf` | Downloadable resume | When updated |

---

## 🎨 Color Schemes

### Current (Purple-Pink)
```css
--primary-color: #667eea;
--secondary-color: #f093fb;
```

### Blue Professional
```css
--primary-color: #2563eb;
--secondary-color: #0891b2;
```

### Green Modern
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
```

### Orange Energetic
```css
--primary-color: #f97316;
--secondary-color: #eab308;
```

---

## 🔧 Common Fixes

### Navigation Not Working?
**Check:** `js/main.js` is linked at bottom of `index.html`

### Styles Not Showing?
**Check:** `css/styles.css` is linked in `<head>` of `index.html`

### Image Not Loading?
**Check:** 
1. File path is correct
2. File name matches exactly (case-sensitive)
3. File is in `assets/images/` folder

### Mobile Menu Won't Open?
**Check:** JavaScript file is loaded (see #1)

---

## 🚀 Deployment Commands

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Then: Settings → Pages → Select 'main' branch

### Using Python Server (Local Testing)
```bash
cd Personal-Website
python -m http.server 8000
```
Visit: `http://localhost:8000`

### Using Node.js Server (Local Testing)
```bash
npx http-server
```

---

## 📱 Icon Classes (Font Awesome)

### Common Icons:
- Home: `fas fa-home`
- User: `fas fa-user`
- Email: `fas fa-envelope`
- Phone: `fas fa-phone`
- Location: `fas fa-map-marker-alt`
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter: `fab fa-twitter`
- Instagram: `fab fa-instagram`
- Code: `fas fa-code`
- Laptop: `fas fa-laptop-code`
- Graduation: `fas fa-graduation-cap`
- Briefcase: `fas fa-briefcase`

**Find more:** [fontawesome.com/icons](https://fontawesome.com/icons)

---

## 📐 Section IDs (for navigation)

| Section | ID | Line (approx) |
|---------|----|----|
| Home | `#home` | 69 |
| About | `#about` | 115 |
| Resume | `#resume` | 225 |
| Projects | `#projects` | 310 |
| Hobbies | `#hobbies` | 390 |
| Contact | `#contact` | 460 |

---

## 🎯 Adding New Content

### Add a Project
**Copy lines ~315-350 in `index.html`**
```html
<div class="project__card">
    <!-- Paste and edit -->
</div>
```

### Add a Skill
**Copy lines ~170-180 in `index.html`**
```html
<div class="skill">
    <!-- Paste and edit -->
</div>
```

### Add a Hobby
**Copy lines ~395-405 in `index.html`**
```html
<div class="hobby__card">
    <!-- Paste and edit -->
</div>
```

---

## 🌐 Important Links to Update

Search for these in `index.html` and replace:

- ✉️ `yash.datar@example.com`
- 📞 `+1234567890`
- 📍 `Your City, Country`
- 🐙 `github.com/yourusername`
- 💼 `linkedin.com/in/yourusername`
- 🐦 `twitter.com/yourusername`
- 📸 `instagram.com/yourusername`

---

## 💡 Pro Tips

1. **Always test locally before deploying**
2. **Keep backup of original files**
3. **Commit to git frequently**
4. **Test on real mobile devices**
5. **Ask friends for feedback**
6. **Keep content concise and clear**
7. **Update regularly with new projects**
8. **Optimize images before uploading**

---

## 📚 Documentation Files

| File | What It Covers |
|------|----------------|
| `README.md` | Overview & quick start |
| `SETUP_GUIDE.md` | Detailed customization guide |
| `TECHNICAL_DOCUMENTATION.md` | How everything works |
| `QUICK_REFERENCE.md` | This file - common tasks |

---

## ⚠️ Don't Edit Unless You Know What You're Doing

- `js/main.js` - Could break functionality
- CSS animation keyframes - Carefully crafted
- `<meta>` tags in `<head>` - Important for SEO
- Navigation structure - Affects whole site

---

## 🆘 Emergency Reset

**Something broke?**

1. **Undo last change:** Ctrl+Z / Cmd+Z
2. **Restore from git:** `git checkout -- filename`
3. **Start fresh:** Re-download original files
4. **Clear cache:** Ctrl+F5 / Cmd+Shift+R

---

## ✅ Pre-Launch Checklist

- [ ] Name updated everywhere
- [ ] Profile photo added
- [ ] About me personalized
- [ ] Skills updated
- [ ] Resume added
- [ ] Projects showcased
- [ ] Contact info correct
- [ ] All social links updated
- [ ] Tested on mobile
- [ ] All links work
- [ ] Spelling checked
- [ ] Images optimized

---

**Save this file! You'll reference it often.** 🌟
