# 📚 Complete Setup Guide

## Step-by-Step Installation

### Step 1: Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)

To check if Node.js is installed:
```bash
node --version
npm --version
```

### Step 2: Get the Project

**Option A: Download**
1. Download the project as a ZIP file
2. Extract it to your desired location
3. Open terminal in the project folder

**Option B: Clone (if using Git)**
```bash
git clone <repository-url>
cd portfolio
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React and React DOM
- React Router
- Tailwind CSS
- Vite
- And other dev dependencies

**Wait time**: Usually 1-3 minutes depending on your internet speed.

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Open in Browser

Open `http://localhost:5173` in your browser.

You should see your portfolio website running! 🎉

## 🎨 Customization Checklist

### Must-Do Customizations

#### 1. Personal Information ✏️

**Header Logo** (`src/components/Header.jsx`)
```jsx
// Line 38
<Link to="/" className="...">
  YourName  // ← Change this to your name
</Link>
```

**Home Page** (`src/pages/Home.jsx`)
```jsx
// Lines 24-27
<h1 className="...">
  Hi, I'm <span className="gradient-text">Your Name</span>  // ← Change
</h1>
<p className="...">
  Frontend & MERN Stack Developer  // ← Change title if needed
</p>
```

**About Page** (`src/pages/About.jsx`)
```jsx
// Lines 7-10 - Update all personal information
const personalInfo = [
  { label: 'Full Name', value: 'Your Full Name', icon: '👤' },
  { label: 'Phone', value: '+91 1234567890', icon: '📱' },
  { label: 'Email', value: 'your.email@example.com', icon: '📧' },
  { label: 'Location', value: 'Your City, India', icon: '📍' },
];

// Lines 13-20 - Update education
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    year: 'Your Year',
    grade: 'Your Grade',
  },
];

// Lines 22-30 - Update experience
const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Duration',
    description: 'Your description',
  },
];
```

#### 2. Projects ✏️

**Update Projects** (`src/utils/projectsData.js`)

Replace the demo projects with your real projects:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Describe what your project does",
    image: "URL to project screenshot",
    techStack: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/your-username/project-repo",
    demo: "https://your-project-demo.com",
    featured: true  // Set to true for featured projects on home page
  },
  // Add more projects...
];
```

**Where to get project images:**
- Use screenshots of your projects
- Use placeholder images from [Unsplash](https://unsplash.com)
- Host images on [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)

#### 3. Social Links ✏️

**Footer** (`src/components/Footer.jsx`)
```jsx
// Lines 16-36
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',  // ← Update
    icon: (/* GitHub icon SVG */)
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-username',  // ← Update
    icon: (/* LinkedIn icon SVG */)
  },
];
```

**About Page** (`src/pages/About.jsx`)
```jsx
// Lines 109-131 - Update social links
<a href="https://github.com/your-username" ... >
<a href="https://linkedin.com/in/your-username" ... >
```

#### 4. Skills ✏️

**Home Page** (`src/pages/Home.jsx`)
```jsx
// Lines 6-13
const skills = [
  { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
  { name: 'Your Skill', icon: '🎨', color: 'from-blue-400 to-blue-600' },
  // Add your skills with appropriate emojis
];
```

**Available emojis for skills:**
- React: ⚛️
- JavaScript: 🟨
- TypeScript: 🔷
- Node.js: 🟢
- Python: 🐍
- HTML/CSS: 🎨
- Database: 🗄️
- Git: 📦

### Optional Customizations

#### Change Color Theme

**Tailwind Config** (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    // Change these hex values to your preferred colors
    50: '#eef2ff',
    100: '#e0e7ff',
    // ... more shades
    600: '#4f46e5',  // Main color used throughout
    700: '#4338ca',
  },
}
```

**Color palette generators:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

#### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Choose your fonts
3. Update `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```
4. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Body Font', 'sans-serif'],
  display: ['Your Display Font', 'sans-serif'],
}
```

#### Add More Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/your-page" element={<YourPage />} />
```
3. Add link in `src/components/Header.jsx`

## 🏗️ Building for Production

### Build the Project
```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Test Production Build
```bash
npm run preview
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Create account on [Vercel](https://vercel.com)
2. Install Vercel CLI:
```bash
npm i -g vercel
```
3. Deploy:
```bash
vercel
```
4. Follow prompts
5. Your site is live! 🎉

### Option 2: Netlify

1. Create account on [Netlify](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect your GitHub repo
4. Done! Your site is live! 🎉

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',  // Add this line
  plugins: [react()],
})
```
2. Build:
```bash
npm run build
```
3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
4. Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```
5. Deploy:
```bash
npm run deploy
```

## 🐛 Common Issues & Solutions

### Issue 1: Port 5173 Already in Use
**Solution:**
```bash
# Kill the process
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Issue 2: Module Not Found
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: Tailwind Styles Not Working
**Solution:**
1. Check if `index.css` is imported in `main.jsx`
2. Restart dev server
3. Clear browser cache (Ctrl+Shift+R)

### Issue 4: Build Fails
**Solution:**
1. Check for errors in browser console
2. Ensure all imports are correct
3. Run:
```bash
npm run build
```
Look at the error message for specific issues.

### Issue 5: Images Not Loading
**Solution:**
1. Check image URLs are correct
2. Ensure images are accessible
3. Use placeholder images from Unsplash for testing

## 📝 Development Tips

### VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets** - Quick snippets
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind
- **Prettier** - Code formatting
- **Auto Rename Tag** - Rename paired tags

### Useful Commands
```bash
# Install a new package
npm install package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Run linter (if configured)
npm run lint

# Format code (if Prettier is configured)
npm run format
```

### Git Workflow (If Using Git)
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin <your-repo-url>

# Push
git push -u origin main
```

## 🎯 Next Steps

1. ✅ Set up the project
2. ✅ Customize personal information
3. ✅ Add your real projects
4. ✅ Update social links
5. ✅ Test on different devices
6. ✅ Deploy to production
7. ✅ Add to your resume/LinkedIn
8. ✅ Share with recruiters!

## 📚 Learning Resources

### React
- [Official React Tutorial](https://react.dev/learn)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💬 Need Help?

If you're stuck:
1. Read the error message carefully
2. Check the browser console (F12)
3. Search the error on Google/Stack Overflow
4. Check React/Tailwind documentation
5. Review the code comments in the files

## ✨ Pro Tips

1. **Start Simple**: Don't try to customize everything at once
2. **Test Frequently**: Check your changes in the browser
3. **Use Git**: Commit your changes regularly
4. **Mobile First**: Always test on mobile devices
5. **Performance**: Keep images optimized and under 500KB
6. **SEO**: Update title and meta tags in `index.html`
7. **Accessibility**: Ensure all images have alt text

---

**Good luck with your portfolio! 🚀**

Remember: Your portfolio is a work in progress. Keep updating it as you build more projects and gain more skills!
