# Advanced CSS3 & Responsive Architecture Portfolio

## 🚀 The Project is Create by Supradip Bhattacharjee

A visually stunning, pixel-perfect, and fully responsive personal portfolio application engineered with modern **CSS3 Grid**, **Flexbox**, dynamic **CSS Variables**, and clean, human-readable JavaScript logic.

---

## 🌟 Key Features & Technical Architecture

### 1. CSS Grid 2D Layout Architecture
- **Hero 2D Frame**: Split 2D grid featuring greeting text, key metrics, and an avatar visual with floating glass badges.
- **Core Skills Grid**: Responsive multi-column grid (`skills-grid`) automatically scaling from mobile to desktop.
- **Projects Showcase Grid**: 2D card grid (`projects-grid`) showcasing full-stack and frontend applications.
- **Contact Layout Grid**: Two-column layout framing direct contact info cards alongside an interactive form.
- **Timeline & Footer Grids**: Structured multi-column frames for experience milestones and footer navigation.

### 2. Flexbox Component Alignment
- **Navigation Bar**: Sticky glassmorphic header with localized flex alignment (`.navbar`, `.nav-controls`).
- **Category Filter Tabs**: Interactive button group for switching project view categories (`.filter-tabs`).
- **Cards & Badges**: Aligned tag chips (`.tag-chip`), skill headers (`.skill-header`), and call-to-action buttons (`.btn`).

### 3. Mobile-First Responsive Architecture
- Clean media query breakpoints defined at `640px` (Tablet), `768px` (Mobile Menu), `1024px` (Desktop), and `1280px` (Wide Desktop).
- Slide-in mobile hamburger drawer navigation for screens below `768px`.

### 4. Dynamic Light / Dark Mode Theme
- Built on custom CSS variables (`:root` and `[data-theme="light"]`) in `css/variables.css`.
- Smooth color transition, `localStorage` state persistence, and automatic OS system preference detection.

### 5. Micro-Interactions & Interactivity
- **Project Detail Modal**: Accessible dialog popup rendering full project features and tech stacks (`#project-modal`).
- **Category Filters**: Real-time project card filtering without page reloads.
- **Skill Observer Animations**: Animated progress fill bars triggered on scroll.
- **Interactive Form Validation**: Client-side feedback validation with success toast notifications (`#toast-notification`).
- **Floating Scroll-To-Top**: Dynamic back-to-top button appearing after scrolling.

---

## 📁 Directory & File Structure

```text
Second_Project/
├── index.html          # Home Page (Hero Grid, Core Skills, Featured Projects, CTA)
├── about.html          # About Page (Biography, 2D Timeline Grid, Technical Matrix)
├── projects.html       # Projects Showcase Page (Filter Tabs & Modal Viewer)
├── contact.html        # Contact Page (Validation Form & Direct Info Cards)
├── css/
│   ├── variables.css   # Theme system & CSS custom variables (Tokens)
│   ├── layout.css      # CSS Grid 2D architecture & Flexbox layout rules
│   ├── components.css  # UI components (Header, Nav, Cards, Modals, Buttons)
│   └── styles.css      # Main consolidated stylesheet & keyframe animations
├── js/
│   ├── theme.js        # Light/Dark mode switcher logic & localStorage sync
│   └── main.js         # Navigation, filter tabs, modal dialog, form validation
└── README.md           # Project documentation & launch instructions
```

---

## 🚀 How to Run the Project

You can run and preview this project using any of the following methods:

### Method 1: Direct File Opening (No Server Required)
1. Open File Explorer and navigate to your project folder.
2. **Double-click `index.html`** (or right-click `index.html` ➔ **Open with** ➔ **Google Chrome / Microsoft Edge / Firefox**).

---

### Method 2: Python Localhost Server
1. Open **PowerShell** or **Command Prompt** in your project folder.
2. Run the HTTP server command:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   👉 **`http://localhost:8000`**

*(Note: Keep the terminal window open while viewing the website).*

---

### Method 3: VS Code Live Server Extension (Recommended for Development)
1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension (by *Ritwick Dey*).
3. Open `index.html`, right-click anywhere in the editor, and select **"Open with Live Server"**.
4. The site will automatically open at `http://127.0.0.1:5500/index.html`.

---

### Method 4: Node.js (`npx serve`)
If you have Node.js installed, open terminal in the project directory and run:
```bash
npx serve .
```
Then visit **`http://localhost:3000`** in your browser.

---

## 💻 Tech Stack & Standards

- **Markup**: Semantic HTML5 with ARIA accessibility roles & skip navigation.
- **Styling**: Vanilla CSS3 (CSS Grid, Flexbox, Custom Properties, Glassmorphism).
- **Typography**: Inter & JetBrains Mono (Google Fonts).
- **Scripts**: ES6+ Vanilla JavaScript (Modular, zero external library overhead).

---

## 📄 License & Attribution

Created for **Internship Task — Second Project** by **Supradip Bhattacharjee**.
All code is clean, modular, and written with industry best practices.
