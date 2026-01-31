import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section id="hero" style={{ position: 'relative', paddingTop: '100px' }}>
            <div className="heroContainer">
                <div className="hero-content">

                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ color: 'var(--text-main)' }}>Hi, I'm <span style={{ color: 'var(--primary-color)' }}>Bhanuka Prabhath</span></h1>
                        <h2 className="hero-role" style={{ color: 'var(--secondary-color)', marginBottom: '1rem', marginTop: '0.5rem' }}>Web Developer / Full Stack Developer</h2>
                        <p className="hero-bio" style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '1.5rem' }}>
                            A proactive final-year undergraduate pursuing dual degrees (B.Sc. & BIT)
                            with a unique blend of scientific analysis and technical skill. Passionate
                            about web development, I have hands-on experience building full-stack
                            applications using HTML, CSS, JavaScript,PHP,Bootstrap, React, Spring Boot,MongoDB and MySQL. I combine a
                            strong mathematical foundation with a results-driven mindset to solve
                            complex problems.


                        </p>

                        <p className="hero-subtitle" style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            Seeking a Web Development Internship to contribute to building high-quality, responsive web applications.
                        </p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <a href="#contact" className="btn-primary" title="Let's get in touch"
                                style={{
                                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                                    border: 'none',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    padding: '12px 30px',
                                    borderRadius: '30px'
                                }}>
                                Get In Touch
                            </a>
                            <a href="#projects" className="btn-secondary" title="See my projects"
                                style={{
                                    background: 'transparent',
                                    border: '2px solid var(--primary-color)',
                                    color: 'var(--primary-color)',
                                    padding: '10px 28px',
                                    borderRadius: '30px',
                                    marginLeft: '15px'
                                }}>
                                View Projects
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* New Image Container with floating animation */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-container" style={{ position: 'relative' }}>
                            <motion.div
                                className="profile-image glass"
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    padding: '10px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    width: '350px',
                                    height: '350px',
                                    border: '2px solid var(--glass-border)'
                                }}
                            >
                                <img src="/assets/pic.jpg" alt="bhanuka prabhath" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="glow-effect" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, rgba(0,242,254,0.2) 0%, rgba(0,0,0,0) 70%)',
                                zIndex: -1
                            }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Pattern Enhancement */}
            <div className="background-pattern" style={{ opacity: 0.1, pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.5)" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
