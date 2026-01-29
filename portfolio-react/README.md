# Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. This project showcases my skills, projects, and provides a way to get in touch.

## Features

- ⚡ **Fast & Responsive**: Built with Vite and React for optimal performance.
- 🎨 **Modern UI/UX**: Styled with Tailwind CSS for a clean and professional look.
- ✨ **Animations**: Smooth animations using Framer Motion and AOS (Animate On Scroll).
- 📝 **Typewriter Effect**: Dynamic text introduction using React Simple Typewriter.
- 📱 **Mobile Friendly**: Fully responsive layout that works on all devices.
- 🧩 **Component-Based**: Modular structure with separate components for Header, Hero, About, Projects, Blog, Contact, etc.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [AOS](https://michalsnik.github.io/aos/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**:
  - [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)
  - [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # Reusable React components
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Intro.jsx
│   └── Projects.jsx
├── styles/          # Custom styles
├── App.jsx          # Main application component
├── main.jsx         # Entry point
└── index.css        # Global styles and Tailwind imports
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally preview the production build.

## License

This project is licensed under the MIT License.
