import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/project.css';

const Projects = () => {
    // Project 4 Slideshow Logic
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carRentalImages = [
        "/assets/car_rental/login.png",
        "/assets/car_rental/main.png",
        "/assets/car_rental/manage_cars.png",
        "/assets/car_rental/manage_customers.png",
        "/assets/car_rental/summary.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carRentalImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="projects" className="projects-section" style={{ padding: '80px 20px' }}>
            <div className="projects-inner">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="projects-heading"
                    style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '2.5rem' }}
                >
                    My Projects
                </motion.h2>

                <p className="projects-intro" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    Here are some of the key projects I've worked on, showcasing my skills in full-stack development,
                    application design, and software engineering.
                </p>

                <div className="projects-grid">

                    {/* Project 1 */}
                    <motion.div
                        className="project-card glass"
                        whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 242, 254, 0.15)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ padding: '2rem', borderRadius: '16px', background: 'var(--glass-bg)' }}
                    >
                        <h3 className="project-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                            Full-Stack E-Commerce
                        </h3>
                        <div className="project-media" style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                            <video controls width="100%" style={{ borderRadius: '8px' }}>
                                <source src="/assets/fullstack.mov" type="video/mp4" />
                                <source src="/assets/fullstack.mov" type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="project-tech" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                            React • Spring Boot • MongoDB • JavaScript • Bootstrap • PayHere API • Java Mail Sender • JWT • Restful API • HTML • Telwind CSS • Git • GitHub
                        </p>
                        <p className="project-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Developed a high-performance, responsive web application for fashion and apparel.
                            Integrates PayHere API for secure online transactions and utilizes Java Mail Sender for order notifications.
                            Includes a comprehensive Admin Panel for inventory tracking and sales analytics.
                        </p>
                        <a href="https://github.com/PrabhathHMB/Ecommerce.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                        className="project-card glass"
                        whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 242, 254, 0.15)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="project-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                            Cosmetic E-Commerce
                        </h3>
                        <div className="project-media" style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                            <video controls width="100%" style={{ borderRadius: '8px' }}>
                                <source src="/assets/Cosmetic-Demo-1.mov" type="video/mp4" />
                                <source src="/assets/Cosmetic-Demo-1.mov" type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="project-tech" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                            PHP • MySQL • HTML• CSS • JavaScript • Bootstrap
                        </p>
                        <p className="project-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Engineered a full-stack solution for cosmetic products. Features a custom-built search engine,
                            persistent shopping cart functionality, and a dedicated administrative dashboard for efficient
                            product management and tracking.
                        </p>
                        <a href="https://github.com/PrabhathHMB/cosmeticEcommerce.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div
                        className="project-card glass"
                        whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 242, 254, 0.15)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="project-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                            Supermarket System
                        </h3>
                        <div className="project-media" style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                            <video controls width="100%" style={{ borderRadius: '8px' }}>
                                <source src="/assets/opp.mov" type="video/mp4" />
                                <source src="/assets/opp.mov" type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="project-tech" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                            Java (OOP)
                        </p>
                        <p className="project-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Developed a system to handle inventory, billing, and customer data efficiently.
                            Implemented features for product management and sales tracking using Object-Oriented Programming principles.
                        </p>
                        <a href="https://github.com/PrabhathHMB/SuperMarketManagement.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </motion.div>

                    {/* Project 4 */}
                    <motion.div
                        className="project-card glass"
                        whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 242, 254, 0.15)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ padding: '2rem', borderRadius: '16px', background: 'var(--glass-bg)' }}
                    >
                        <h3 className="project-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                            Car Rental System
                        </h3>
                        <div className="project-media" style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden', height: '200px', position: 'relative' }}>
                            <motion.img
                                key={currentImageIndex}
                                src={carRentalImages[currentImageIndex]}
                                alt={`Car Rental System Demo ${currentImageIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </div>
                        <p className="project-tech" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                            C# • .NET • SQL Server • Windows Forms
                        </p>
                        <p className="project-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            TravelPro: Desktop Car Rental Management System. Developed a robust desktop application for managing car rentals.
                            Designed a relational database to manage customers, inventory, and rental transactions.
                            Features secure user authentication, automated rental cost calculation, and an integrated Reporting Module
                            with data visualization to track revenue distribution.
                        </p>
                        <a href="https://github.com/dumithmifernando/Car_Rental_System.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
