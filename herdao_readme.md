# H.E.R. DAO Website

Modern, minimalist landing page for H.E.R. DAO - Built with static HTML, CSS, and GSAP animations.

---

## 🚀 Quick Start

### 1. Download Files

You need these 3 files:
- `index.html`
- `styles.css`
- `animations.js`

### 2. Test Locally

Open `index.html` in your browser. That's it!

Or use a local server:
```bash
# If you have Python installed:
python -m http.server 8000

# Then visit: http://localhost:8000
```

### 3. Deploy to Netlify

**Option A - Drag & Drop (Easiest):**
1. Go to [Netlify](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! Your site is live

**Option B - Git Deploy:**
1. Create a GitHub repo
2. Push your files
3. Connect repo to Netlify
4. Auto-deploy on every push

---

## 📁 File Structure

```
her-dao-site/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── animations.js       # GSAP animations
└── README.md          # This file
```

---

## 🎨 Customization Guide

### Replace Placeholder Content

#### 1. Hero Video
**Current:** Placeholder video from Mixkit
**Replace with:**
```html
<!-- In index.html, line ~50 -->
<source src="YOUR_CLOUDINARY_URL_HERE.mp4" type="video/mp4">
```

Upload your video to Cloudinary and paste the URL.

#### 2. 3D Floating Element
**Current:** Placeholder from Unsplash
**Replace with:**
```html
<!-- In index.html, line ~135 -->
<img src="YOUR_3D_IMAGE_URL" alt="3D Element" class="floating-element">
```

#### 3. Partner Logos
**Current:** Text placeholders
**Replace with:**
```html
<!-- In index.html, lines ~195-220 -->
<div class="partner-card">
  <img src="YOUR_LOGO_URL" alt="Partner Name">
</div>
```

Remove the `.partner-placeholder` div and add `<img>` tags.

#### 4. Service Card Images
**Current:** Gray placeholder boxes
**Replace with:**
```html
<!-- In index.html, service cards section -->
<div class="service-image-wrapper">
  <img src="YOUR_IMAGE_URL" alt="Service Name">
</div>
```

Replace the `.service-image-placeholder` div.

#### 5. Project Images
**Current:** Gray placeholder boxes
**Replace with:**
```html
<!-- In index.html, project cards section -->
<div class="project-image">
  <img src="YOUR_PROJECT_IMAGE" alt="Project Name">
</div>
```

---

## 🎯 Asset Specifications

### Videos
- **Hero Background:** 1920x1080px, MP4, <5MB, 10-30 seconds

### Images
- **3D Element:** 800x800px, PNG/WebP with transparency
- **Partner Logos:** 200x100px, SVG or PNG, white/light colored
- **Service Images:** 280x200px, JPG/WebP
- **Project Images:** 600x600px, JPG/WebP

### Where to Upload
**Recommended:** [Cloudinary](https://cloudinary.com)
- Free tier: 25GB storage
- Automatic optimization
- CDN included

**Alternative:** Any image hosting (Imgur, ImgBB, etc.)

---

## 🎨 Color Customization

### Change Brand Colors

Edit in `styles.css` (lines 20-30):

```css
:root {
  --accent: #6366F1;        /* Change main accent color */
  --accent-purple: #8B5CF6; /* Brand purple */
  --accent-pink: #EC4899;   /* Brand pink */
}
```

### Dark Card Colors

```css
/* Line 430 in styles.css */
.service-card {
  background: var(--black);  /* Change to any dark color */
}
```

---

## ✍️ Content Updates

### Update Text

All content is in `index.html`. Search for these sections:

1. **Hero Headline:** Line ~68
2. **About Us Title:** Lines ~145-155
3. **About Description:** Line ~161
4. **Service Titles:** Lines ~230, 245, 260, 275, 290
5. **Project Titles:** Lines ~335, 360, 385
6. **Achievement Stats:** Lines ~430-450
7. **Footer Contact:** Lines ~475-480

Just replace the text between the HTML tags.

---

## 🎬 Animation Customization

### Disable Animations

Comment out in `animations.js`:

```javascript
// Comment out specific sections you don't want
// Example: Disable hero animation
/*
function animateHero() {
  // animation code...
}
*/
```

### Adjust Animation Speed

```javascript
// In animations.js, change duration values
gsap.from(..., {
  duration: 1,  // Change this (in seconds)
});
```

### Change Scroll Trigger Points

```javascript
scrollTrigger: {
  start: "top 70%",  // Animation starts when element is 70% down viewport
  // Change to "top 80%" for later trigger
  // Change to "top 50%" for earlier trigger
}
```

---

## 🔧 Common Issues & Solutions

### Issue: Animations not working
**Solution:** Check browser console (F12) for errors. Make sure GSAP CDN loaded:
```html
<!-- In index.html <head> -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
```

### Issue: Video not playing
**Solution:**
1. Check video URL is correct
2. Make sure video has `autoplay`, `muted`, `playsinline` attributes
3. Try a different video format (MP4 is most compatible)

### Issue: Sticky cards not sticking
**Solution:** Check CSS for `.project-card`:
```css
.project-card {
  position: sticky;  /* Must be sticky, not fixed or absolute */
  top: 120px;        /* Adjust this value */
}
```

### Issue: Mobile menu not working
**Solution:** Make sure `animations.js` is loaded at bottom of `index.html`

---

## 📱 Mobile Optimization

The site is fully responsive. Test on:
- Desktop (1440px+)
- Tablet (768px - 991px)
- Mobile (320px - 767px)

### Preview Responsive Design

In browser:
1. Press F12 (open DevTools)
2. Click device toggle icon (Ctrl+Shift+M)
3. Select different devices

---

## 🚀 Deploy to Netlify (Detailed)

### Method 1: Drag & Drop

1. Go to https://app.netlify.com/drop
2. Create account (free)
3. Drag your entire project folder
4. Wait 30 seconds
5. Your site is live!
6. Click "Site settings" to add custom domain

### Method 2: GitHub + Auto-Deploy

1. Create GitHub repo
2. Push files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. In Netlify: "New site from Git"
4. Select your repo
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: (leave as root)
6. Click "Deploy"
7. Every Git push auto-deploys!

### Add Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. In Netlify: Site settings → Domain management
3. Add custom domain
4. Update DNS records (Netlify shows exact steps)
5. Wait for DNS propagation (up to 48 hours)

---

## 🔮 Future Enhancements

### Add Contact Form

Use [Netlify Forms](https://docs.netlify.com/forms/setup/) (built-in, free):

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Add CMS (Content Management)

**Decap CMS** (formerly Netlify CMS):
1. Add `/admin` folder
2. Create `config.yml`
3. Non-developers can edit content via web interface

See: https://decapcms.org/docs/intro/

### Add Analytics

**Plausible** (privacy-friendly):
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

Or **Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

---

## 📞 Need Help?

### Resources
- [GSAP Docs](https://greensock.com/docs/)
- [Netlify Docs](https://docs.netlify.com/)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [MDN Web Docs](https://developer.mozilla.org/)

### Questions?
Open an issue or reach out to the H.E.R. DAO team.

---

## ✅ Launch Checklist

Before going live:

- [ ] Replace all placeholder content
- [ ] Upload and link all images/videos to Cloudinary
- [ ] Test on mobile, tablet, desktop
- [ ] Check all links work
- [ ] Test form submission (if added)
- [ ] Add favicon
- [ ] Set up custom domain
- [ ] Add analytics (optional)
- [ ] Test page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Share on social media!

---

**Built with ❤️ for H.E.R. DAO**

*Empowering Women in Blockchain*