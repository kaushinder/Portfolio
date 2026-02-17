# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
cd portfolio
npm install
```

Wait for the installation to complete...

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

You should see:
```
➜  Local:   http://localhost:5173/
```

## Step 3: Open in Browser (10 seconds)

Open `http://localhost:5173` in your web browser.

**🎉 Congratulations! Your portfolio is running!**

---

## 📝 Essential 3-Step Customization (10 minutes)

### 1. Update Your Name (2 minutes)

**File**: `src/components/Header.jsx` (Line 38)
```jsx
YourName  →  Your Actual Name
```

**File**: `src/pages/Home.jsx` (Line 24)
```jsx
Your Name  →  Your Actual Name
```

### 2. Update Contact Info (3 minutes)

**File**: `src/pages/About.jsx` (Lines 7-10)
```javascript
const personalInfo = [
  { label: 'Full Name', value: 'Your Full Name', icon: '👤' },
  { label: 'Phone', value: '+91 1234567890', icon: '📱' },
  { label: 'Email', value: 'your.email@example.com', icon: '📧' },
  { label: 'Location', value: 'Your City, India', icon: '📍' },
];
```

### 3. Add Your Projects (5 minutes)

**File**: `src/utils/projectsData.js`

Replace the first project with your own:
```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "What does your project do?",
  image: "Image URL from Unsplash or your screenshot",
  techStack: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://your-project-demo.com",
  featured: true
}
```

**Save all files** and the browser will auto-refresh!

---

## 🎨 Quick Theme Change (Optional, 2 minutes)

Want a different color? Update `tailwind.config.js`:

```javascript
primary: {
  600: '#your-hex-color',  // Main color used throughout
}
```

Popular color options:
- **Blue**: `#3b82f6`
- **Purple**: `#9333ea`
- **Green**: `#10b981`
- **Red**: `#ef4444`
- **Orange**: `#f59e0b`

---

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)

1. Create free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm i -g vercel
```
3. Deploy:
```bash
npm run build
vercel
```
4. Follow prompts
5. **Done!** Your site is live! 🎉

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. **Done!** Your site is live! 🎉

---

## 📱 Test on Your Phone (1 minute)

1. Find your local IP address:
```bash
# Mac/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

2. Start dev server with network access:
```bash
npm run dev -- --host
```

3. Open `http://YOUR-IP:5173` on your phone

---

## ❓ Having Issues?

### Port 5173 Already in Use?
```bash
npx kill-port 5173
npm run dev
```

### Styles Not Working?
1. Clear browser cache (Ctrl+Shift+R)
2. Restart dev server
3. Check if `index.css` is imported in `main.jsx`

### Module Not Found?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. ✅ Got it running? Great!
2. 📝 Customize your information
3. 🎨 Add your real projects
4. 🚀 Deploy to production
5. 📄 Add link to your resume

**For detailed customization**: Check `SETUP_GUIDE.md`  
**For complete checklist**: Check `CUSTOMIZATION_CHECKLIST.md`

---

## 💡 Pro Tips

- **Save Early, Save Often**: The browser auto-refreshes on save
- **Mobile First**: Always check how it looks on mobile
- **Real Projects**: Showcase your best 3-6 projects
- **Keep It Simple**: Don't overcomplicate the design
- **Update Regularly**: Add new projects as you build them

---

**Time Investment**:
- Setup: 5 minutes
- Basic Customization: 10-15 minutes
- Full Customization: 2-4 hours
- Deployment: 5 minutes

**Total**: You can have a live portfolio in under 30 minutes! 🚀

---

Need more help? Check the other guide files:
- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `CUSTOMIZATION_CHECKLIST.md` - Complete checklist

**Happy building! 🎉**
