import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.header
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 0.5 }}
            // Inline styles for glassmorphism if css isn't enough, but class 'glass' handles it mostly
            className="glass"
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                // transform: 'translateX(-50%)', // Handled by x: "-50%" to avoid conflict with y animation
                width: '90%',
                maxWidth: '1200px',
                zIndex: 1000,
                backgroundColor: 'rgba(15, 23, 42, 0.6)', // Overriding default header bg
                borderRadius: '16px',
                padding: '0.5rem 2rem'
            }}
        >
            <div className="header-container" style={{ margin: 0, width: '100%' }}>
                <div className="header-content" style={{ justifyContent: 'space-between' }}>
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        Bhanuka Prabhath
                    </motion.div>

                    <nav className="desktop-nav">
                        {['Home', 'Intro', 'About', 'Projects', 'Blog'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                title={item}
                                className="nav-link"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - Redesigned */}
                    <motion.button
                        id="menu-btn"
                        className="menu-btn"
                        title="Menu"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            color: 'var(--text-main)',
                            background: 'transparent',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </motion.button>

                    <motion.a
                        href="#contact"
                        className="contact-btn"
                        title="Contact"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 15px var(--primary-color)',
                            backgroundColor: 'transparent',
                            color: 'var(--primary-color)'
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'var(--primary-color)',
                            color: '#000',
                            fontWeight: 'bold',
                            padding: '10px 24px',
                            borderRadius: '30px',
                            border: '1px solid var(--primary-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <span>Contact</span>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </motion.a>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu glass"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '70px',
                            left: 0,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem'
                        }}
                    >
                        <ul>
                            {['Home', 'Intro', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                                <li key={item} style={{ margin: '10px 0' }}>
                                    <a href={`#${item.toLowerCase()}`} onClick={toggleMenu} style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
