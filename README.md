# TIS School Website Redesign

A modern, animated, and responsive home page redesign for **Tulas International School (TIS)**, created as part of a Frontend Developer assignment.

The project focuses on creating a visually engaging school website with smooth animations, responsive layouts, clear navigation, and an interactive user experience.

## Live Demo

(https://tis-website.netlify.app/)

## Features

* Responsive design for desktop, tablet, and mobile devices
* Modern navigation bar with mobile menu
* Animated hero section
* Scroll-triggered reveal animations
* Custom cursor interaction
* Scroll progress indicator
* Interactive hover effects
* Academics and campus sections
* Activities and student experience sections
* Testimonials section
* Call-to-action section
* Responsive footer
* Smooth scrolling navigation

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript

### Animation

* Framer Motion
* CSS transitions and hover animations

### Icons

* Lucide React

### Deployment

* Netlify

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── CustomCursor.jsx
│   ├── ScrollProgress.jsx
│   └── Footer.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── About.jsx
│   ├── Campus.jsx
│   ├── Academics.jsx
│   ├── Activities.jsx
│   ├── Testimonials.jsx
│   └── CTA.jsx
│
├── data/
│   ├── navigation.js
│   ├── stats.js
│   ├── activities.js
│   └── testimonials.js
│
├── hooks/
│   └── useScrollProgress.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Gopipalleboina/tis-school-website.git
```

### 2. Navigate to the project

```bash
cd tis-school-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

## Production Build

To create a production build:

```bash
npm run build
```

The production files are generated inside the `dist` directory.

## Design Approach

The website uses a clean visual style with a combination of:

* Deep green as the primary brand color
* Warm neutral backgrounds
* Orange accent colors
* Rounded cards and buttons
* Large typography
* Generous spacing
* Subtle hover interactions
* Scroll-based animations

The design is structured into independent React components and sections to keep the application organized and maintainable.

## Animation & Interaction

The project includes multiple interactive features:

### Custom Cursor

A custom cursor follows the user's mouse movement on larger screens to create a more engaging desktop experience.

### Scroll Progress

A progress indicator at the top of the page shows how far the user has scrolled through the website.

### Scroll Reveals

Sections animate into view as the user scrolls using Framer Motion's viewport animations.

### Hover Effects

Buttons, cards, links, and icons use subtle transitions to provide visual feedback during interaction.

## Responsive Design

The layout is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind CSS responsive utilities are used to adapt grids, typography, spacing, navigation, and content layouts for different screen sizes.

## Code Quality

The project follows a component-based React structure with:

* Reusable components
* Separated data files
* Custom hooks for scroll functionality
* Semantic HTML sections
* Responsive utility classes
* Clean imports and dependencies

## Running the Project

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Author

**Gopi Palleboina**
