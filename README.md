# Modern Portfolio Website

A clean, modern, and responsive personal portfolio website built with React, Vite, and Tailwind CSS. Perfect for freshers and MERN Stack developers to showcase their work.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-cyan)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)

## ✨ Features

### Core Features
- 🎨 **Modern UI/UX**: Clean, minimal, and professional design
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🌓 **Dark/Light Mode**: Toggle between themes with smooth transitions
- ⚡ **Fast Loading**: Optimized with Vite and lazy loading
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML

### Pages Included
1. **Home Page** - Hero section, skills showcase, featured projects
2. **About Page** - Personal information, education, experience
3. **Projects Page** - Project showcase with pagination (6 per page)
4. **Login Page** - User authentication with validation
5. **Sign Up Page** - User registration with form validation
6. **404 Page** - Custom not found page

### Components
- Sticky responsive navbar with mobile hamburger menu
- Reusable footer with social links
- Scroll to top button
- Loading spinner
- Form validation
- Smooth animations

### Technical Features
- React Router for navigation
- Context API for theme management
- LocalStorage for user data persistence
- Form validation with error messages
- Pagination implementation
- Reusable components

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── NotFound.jsx
│   ├── utils/          # Utility files
│   │   ├── ThemeContext.jsx
│   │   └── projectsData.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization Guide

### 1. Personal Information

**Update Name and Title**
- `src/components/Header.jsx` - Line 38 (Logo)
- `src/pages/Home.jsx` - Line 24 (Hero section)
- `src/pages/About.jsx` - Lines 87-90 (Profile card)

**Update Contact Details**
```javascript
// src/pages/About.jsx - Lines 7-10
const personalInfo = [
  { label: 'Full Name', value: 'Your Full Name', icon: '👤' },
  { label: 'Phone', value: '+91 1234567890', icon: '📱' },
  { label: 'Email', value: 'your.email@example.com', icon: '📧' },
  { label: 'Location', value: 'Your City, India', icon: '📍' },
];
```

### 2. Projects Data

Edit `src/utils/projectsData.js` to add/modify projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description here",
  image: "https://your-image-url.com",
  techStack: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://your-demo-url.com",
  featured: true  // Shows on home page
}
```

### 3. Skills Section

Update skills in `src/pages/Home.jsx` (Lines 6-13):

```javascript
const skills = [
  { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
  { name: 'Your Skill', icon: '🎨', color: 'from-blue-400 to-blue-600' },
  // Add more skills
];
```

### 4. Social Links

Update social media links in:
- `src/components/Footer.jsx` - Lines 16-36
- `src/pages/About.jsx` - Lines 109-131

### 5. Color Theme

Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Change these values to your preferred colors
    500: '#6366f1',
    600: '#4f46e5',
    // ... other shades
  },
}
```

### 6. Fonts

Change fonts in `tailwind.config.js` and update Google Fonts link in `index.html`:

```javascript
fontFamily: {
  sans: ['Your Body Font', 'sans-serif'],
  display: ['Your Display Font', 'sans-serif'],
}
```

## 🔧 Configuration Files Explained

### vite.config.js
Configures Vite build tool and React plugin.

### tailwind.config.js
- Custom color palette
- Font families
- Custom animations
- Extended theme values

### postcss.config.js
PostCSS configuration for Tailwind CSS processing.

### package.json
All project dependencies and scripts.

## 📝 Features Breakdown

### Dark/Light Mode
Implemented using React Context API with localStorage persistence.
Toggle button in header switches between themes smoothly.

### Form Validation
Both Login and SignUp pages include:
- Real-time validation
- Error messages
- Loading states
- localStorage integration for user data

### Pagination
Projects page displays 6 projects per page with:
- Previous/Next buttons
- Page numbers
- Smooth transitions
- Scroll to top on page change

### Animations
Custom animations defined in Tailwind config:
- fade-in
- slide-up
- slide-down
- scale-in
- float

### Responsive Design
Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Usage Tips

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### LocalStorage Structure
```javascript
// Users array
users: [
  {
    id: timestamp,
    name: "User Name",
    email: "user@example.com",
    password: "hashed_password",
    createdAt: "ISO_date"
  }
]

// Current logged-in user
currentUser: { ...user_object }

// Theme preference
theme: "light" | "dark"
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

## 📦 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0

### Dev Dependencies
- vite: ^5.0.8
- @vitejs/plugin-react: ^4.2.1
- tailwindcss: ^3.3.6
- autoprefixer: ^10.4.16
- postcss: ^8.4.32

## 🎨 Design Choices

### Typography
- **Display Font**: Syne (Bold, modern)
- **Body Font**: Plus Jakarta Sans (Clean, readable)

### Color Palette
- **Primary**: Indigo/Blue (#6366f1)
- **Accent**: Purple (#9333ea)
- **Text**: Gray shades for light/dark themes

### Layout
- Max-width: 1280px (7xl)
- Padding: Responsive (4-8rem)
- Grid: 12 columns responsive

## 🔒 Security Notes

⚠️ **Important**: This is a frontend-only demo application.

- Passwords are stored in plain text in localStorage
- No actual backend authentication
- Not suitable for production without proper backend
- For demo/learning purposes only

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 💡 Tips for Freshers

1. **Customize Everything**: Make it your own!
2. **Add Real Projects**: Replace demo projects with your actual work
3. **Update Content**: Add your real information and achievements
4. **Deploy It**: Host it on Vercel/Netlify for free
5. **Share It**: Include the link in your resume and LinkedIn

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues
```bash
# Rebuild Tailwind
npm run dev
```

## 📞 Support

For issues or questions:
1. Check the code comments
2. Review this README
3. Check React and Tailwind documentation
4. Search for similar issues online

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

**Built with ❤️ for the developer community**

Happy Coding! 🚀
#   P o r t f o l i o  
 