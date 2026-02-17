# 📂 Project Structure Explained

Understanding the folder structure and file purposes.

## 📁 Root Directory

```
portfolio/
├── public/              # Static files (served as-is)
├── src/                 # Source code (your React app)
├── node_modules/        # Dependencies (auto-generated)
├── dist/                # Production build (auto-generated)
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── .gitignore           # Git ignore rules
├── .env.example         # Environment variables example
└── README.md            # Project documentation
```

## 📂 Detailed Structure

### `/public/` - Static Assets
Files here are served without processing.

**What goes here:**
- Favicon
- Robots.txt
- Static images
- Resume PDF (if you add one)
- manifest.json (if making PWA)

**Example:**
```
public/
├── vite.svg           # Default favicon
└── resume.pdf         # Your resume (add this)
```

### `/src/` - Source Code

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components (routes)
├── utils/             # Utility files and data
├── assets/            # Images, icons (optional)
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🧩 Component Files Explained

### `/src/components/` - Reusable Components

#### `Header.jsx` - Navigation Bar
**Purpose**: Sticky header with navigation and theme toggle

**Key Features:**
- Responsive navbar
- Mobile hamburger menu
- Dark/light mode toggle
- Active route highlighting
- Scroll effect (background blur)

**Customization Points:**
- Line 38: Logo/Name
- Lines 32-36: Navigation links
- Theme toggle icon

**Dependencies:**
- React Router (for navigation)
- ThemeContext (for dark mode)

---

#### `Footer.jsx` - Page Footer
**Purpose**: Site footer with links and info

**Key Features:**
- Brand section
- Quick links
- Social media links
- Copyright notice

**Customization Points:**
- Lines 9-14: Quick links
- Lines 16-36: Social links
- Line 70: Copyright text

---

#### `Loading.jsx` - Loading Spinner
**Purpose**: Shows while pages are loading

**Key Features:**
- Centered spinner
- "Loading..." text
- Uses custom CSS spinner

**When it shows:**
- During route transitions
- Used by React Suspense

---

#### `ScrollToTop.jsx` - Scroll Button
**Purpose**: Smooth scroll to top button

**Key Features:**
- Appears after scrolling 300px
- Smooth scroll animation
- Fixed position (bottom-right)

**Customization:**
- Change appearance threshold (Line 10)
- Modify position/style

## 📄 Page Files Explained

### `/src/pages/` - Route Components

#### `Home.jsx` - Landing Page
**Purpose**: First page visitors see

**Sections:**
1. **Hero Section** (Lines 17-40)
   - Name and title
   - Introduction text
   - CTA buttons

2. **Skills Section** (Lines 43-73)
   - Grid of skills
   - Icons and names
   - Hover animations

3. **Featured Projects** (Lines 76-144)
   - Shows projects with `featured: true`
   - Project cards with hover effects
   - Links to Projects page

4. **Contact CTA** (Lines 147-168)
   - Call-to-action section
   - Contact buttons

**Key Variables:**
- Lines 6-13: Skills array
- Line 15: Featured projects (from projectsData)

---

#### `About.jsx` - About Me Page
**Purpose**: Personal information and background

**Sections:**
1. **Profile Card** (Lines 78-135)
   - Profile emoji/image
   - Name and title
   - Download resume button
   - Social links

2. **Personal Info** (Lines 140-155)
   - Contact details grid
   - Name, phone, email, location

3. **Professional Summary** (Lines 158-168)
   - About you text
   - Career goals

4. **Education** (Lines 171-186)
   - Degree details
   - Institution, year, grade

5. **Experience** (Lines 189-206)
   - Work experience
   - Job title, company, duration

**Key Variables:**
- Lines 7-10: Personal info array
- Lines 13-20: Education array
- Lines 22-30: Experience array

---

#### `Projects.jsx` - Projects Showcase
**Purpose**: Display all projects with pagination

**Key Features:**
- Grid layout (3 columns on desktop)
- Image hover effects
- Tech stack tags
- GitHub and demo links
- Pagination (6 projects per page)

**Pagination Logic:**
- Lines 6-12: Page state and calculations
- Lines 14-16: Paginate function
- Lines 120-160: Pagination controls

**Project Card Structure:**
- Image with hover overlay
- Title and description
- Tech stack tags
- Action buttons (GitHub, Demo)

---

#### `Login.jsx` - Login Page
**Purpose**: User authentication (demo)

**Key Features:**
- Email and password fields
- Form validation
- Error messages
- Loading state
- LocalStorage integration

**Validation Rules:**
- Email: Required, valid format
- Password: Required, minimum 6 characters

**Flow:**
1. User enters credentials
2. Validates form
3. Checks localStorage for user
4. Redirects to home on success

**Note**: This is a demo - not secure for production!

---

#### `SignUp.jsx` - Registration Page
**Purpose**: User registration (demo)

**Key Features:**
- Name, email, password, confirm password
- Form validation
- Error messages
- Creates user in localStorage
- Auto-login after signup

**Validation Rules:**
- Name: Required, minimum 3 characters
- Email: Required, valid format
- Password: Required, minimum 6 characters
- Confirm: Must match password

**Flow:**
1. User fills form
2. Validates input
3. Checks if user exists
4. Saves to localStorage
5. Redirects to home

---

#### `NotFound.jsx` - 404 Page
**Purpose**: Handles invalid routes

**Key Features:**
- Large 404 text
- Search emoji animation
- Helpful message
- Navigation buttons
- Quick links

**Triggers:**
- Any non-existent route
- Broken internal links

## 🛠️ Utility Files

### `/src/utils/` - Helper Files

#### `ThemeContext.jsx` - Theme Management
**Purpose**: Global dark/light mode state

**How it works:**
1. Creates React Context
2. Stores theme preference
3. Syncs with localStorage
4. Provides toggle function

**Used by:**
- Header.jsx (toggle button)
- All components (theme classes)

**Key Functions:**
- `useTheme()`: Hook to access theme
- `toggleTheme()`: Switch themes
- Auto-detects system preference

---

#### `projectsData.js` - Projects Array
**Purpose**: Centralized project data

**Structure:**
```javascript
{
  id: number,              // Unique identifier
  title: string,           // Project name
  description: string,     // What it does
  image: string,           // Screenshot URL
  techStack: array,        // Technologies used
  github: string,          // Repository URL
  demo: string,            // Live demo URL
  featured: boolean        // Show on home page
}
```

**Usage:**
- Home.jsx: Featured projects
- Projects.jsx: All projects with pagination

**How to modify:**
- Add/edit projects in the array
- Set `featured: true` for home page
- Update all fields with your data

## 📱 Entry Files

### `App.jsx` - Main Application
**Purpose**: Root component with routing

**Structure:**
- ThemeProvider wrapper
- React Router setup
- Header and Footer layout
- Route definitions
- Suspense with Loading fallback

**Routes:**
- `/` → Home
- `/about` → About
- `/projects` → Projects
- `/login` → Login
- `/signup` → SignUp
- `*` → NotFound (404)

---

### `main.jsx` - Entry Point
**Purpose**: Renders React app to DOM

**What it does:**
- Imports React
- Imports App component
- Imports global CSS
- Mounts app to #root div

**Don't modify unless:**
- Adding global providers
- Configuring React settings
- Adding monitoring tools

---

### `index.css` - Global Styles
**Purpose**: Tailwind directives and custom CSS

**Sections:**
1. **Tailwind Directives** (Lines 1-3)
   - Imports Tailwind layers

2. **Base Styles** (Lines 5-12)
   - Smooth scrolling
   - Body background/text

3. **Component Classes** (Lines 14-36)
   - Reusable button styles
   - Card styles
   - Input styles
   - Section containers

4. **Custom Scrollbar** (Lines 38-50)
   - Styled scrollbar
   - Dark mode compatible

5. **Spinner Animation** (Lines 52-60)
   - Loading spinner styles

6. **Utility Classes** (Lines 62-69)
   - Gradient text effect
   - Glow effect

## ⚙️ Configuration Files

### `vite.config.js` - Vite Setup
**Purpose**: Configure Vite build tool

**Default setup:**
- React plugin
- Fast refresh
- HMR (Hot Module Replacement)

**When to modify:**
- Adding plugins
- Changing base URL (for deployment)
- Optimizing build

---

### `tailwind.config.js` - Tailwind Config
**Purpose**: Customize Tailwind CSS

**Customizations:**
1. **Content Paths** (Lines 3-5)
   - Where Tailwind looks for classes

2. **Dark Mode** (Line 6)
   - Uses class-based dark mode

3. **Extended Theme** (Lines 8-57)
   - Custom colors
   - Custom fonts
   - Custom animations
   - Custom keyframes

**How to customize:**
- Change color values
- Add new colors
- Modify fonts
- Add animations

---

### `postcss.config.js` - PostCSS
**Purpose**: Process CSS with plugins

**Plugins:**
- Tailwind CSS
- Autoprefixer (browser compatibility)

**Usually no need to modify**

---

### `package.json` - Project Metadata
**Purpose**: Project info and dependencies

**Important sections:**
1. **Scripts** (Lines 6-9)
   - `dev`: Start development
   - `build`: Build for production
   - `preview`: Preview production build

2. **Dependencies** (Lines 11-14)
   - React libraries
   - React Router

3. **Dev Dependencies** (Lines 15-22)
   - Vite
   - Tailwind
   - Build tools

## 📊 File Size Reference

**Small files** (< 100 lines):
- Loading.jsx
- ScrollToTop.jsx
- main.jsx
- All config files

**Medium files** (100-300 lines):
- Header.jsx
- Footer.jsx
- NotFound.jsx
- ThemeContext.jsx

**Large files** (300+ lines):
- Home.jsx
- About.jsx
- Projects.jsx
- Login.jsx
- SignUp.jsx
- projectsData.js

## 🎯 What to Modify First

**Must modify:**
1. `projectsData.js` - Your projects
2. `About.jsx` - Your info
3. `Header.jsx` - Your name

**Should modify:**
1. `Home.jsx` - Skills and intro
2. `Footer.jsx` - Social links
3. `tailwind.config.js` - Colors/fonts

**Can modify:**
1. Add new pages
2. Add new components
3. Enhance features

## 💡 Tips

1. **Start small**: Modify one file at a time
2. **Use comments**: Files have helpful comments
3. **Test changes**: Save and check browser
4. **Git commits**: Commit after each feature
5. **Keep backup**: Before major changes

## 🔍 Finding Things

**To find where something is:**
1. Use VS Code search (Ctrl+Shift+F)
2. Search for text you see on screen
3. Check component imports
4. Follow the route in App.jsx

**Common searches:**
- "Your Name" - Find personalization points
- "github.com" - Find social links
- "projectsData" - Find project usage
- "btn-primary" - Find button usage

---

**Need more help?** Check other documentation files:
- `README.md` - Overview
- `SETUP_GUIDE.md` - Setup instructions
- `CUSTOMIZATION_CHECKLIST.md` - What to change
