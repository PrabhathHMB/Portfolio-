import React from 'react';

// Import Global Styles (already imported in main.jsx but good for explicit dependency if needed)
import './index.css';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Intro />
            <About />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
