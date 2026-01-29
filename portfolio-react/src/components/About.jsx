import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaPhp, FaBootstrap, FaFigma, FaDocker, FaGit, FaChartBar } from 'react-icons/fa';
import { SiC, SiOracle, SiMysql, SiSpringboot, SiMongodb, SiJoomla, SiDotnet } from 'react-icons/si';
import { BsFiletypeXml } from 'react-icons/bs';
import { TbBrandCSharp } from 'react-icons/tb';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="aboutContainer" style={{ padding: '80px 20px' }}>
            <div className="about-content">
                <motion.h2
                    className="about-heading"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-main)', fontSize: '2.5rem' }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="about-intro"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}
                >
                    Final-year undergraduate at the University of Kelaniya,Faculty of Science and the University of
                    Colombo School of Computing (External),currently studying for both Bachelor of Science and Bachelor
                    of Information Technology.Achieved strong academic results,including excellent passes in G.C.E. Ordinary
                    Level Mathematics and Science,a credit pass in English and G.C.E Advanced Level results of B,C,S in the
                    Physical Science Stream.Has a strong ability in Mathematics and a analytical skills,a commitment to learning and
                    a proactive,results-driven approach to both academic and personal development.
                </motion.p>

                <div className="tab-navigation" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '2rem' }}>
                    {['skills', 'education'].map((tab) => (
                        <button
                            key={tab}
                            id={`${tab}Btn`}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: activeTab === tab ? 'var(--primary-color)' : 'transparent',
                                color: activeTab === tab ? '#000' : 'var(--text-main)',
                                border: `1px solid ${activeTab === tab ? 'transparent' : 'var(--glass-border)'}`,
                                padding: '10px 24px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {tab === 'skills' ? 'Technical Skills' : 'Education'}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeTab} // Key changes trigger re-animation
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="glass"
                    style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}
                >
                    {activeTab === 'skills' && (
                        <div id="skills">
                            <h3 className="tab-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Skills</h3>
                            <p className="tab-description" style={{ marginBottom: '1.5rem' }}>
                                A comprehensive toolkit of languages and technologies I use to build efficient solutions.
                            </p>
                            <ul className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none', padding: 0 }}>
                                {[
                                    { name: 'C', icon: <SiC /> },
                                    { name: 'Java', icon: <FaJava /> },
                                    { name: 'Python', icon: <FaPython /> },
                                    { name: 'Oracle DB', icon: <SiOracle /> },
                                    { name: 'MySQL', icon: <SiMysql /> },
                                    { name: 'HTML', icon: <FaHtml5 /> },
                                    { name: 'CSS', icon: <FaCss3Alt /> },
                                    { name: 'React', icon: <FaReact /> },
                                    { name: 'Spring Boot', icon: <SiSpringboot /> },
                                    { name: 'C#', icon: <TbBrandCSharp /> },
                                    { name: 'MongoDB', icon: <SiMongodb /> },
                                    { name: 'JavaScript', icon: <FaJs /> },
                                    { name: 'PHP', icon: <FaPhp /> },
                                    { name: 'Bootstrap', icon: <FaBootstrap /> },
                                    { name: 'PowerBI', icon: <FaChartBar /> },
                                    { name: 'Joomla', icon: <SiJoomla /> },
                                    { name: 'Figma', icon: <FaFigma /> },
                                    { name: '.Net Framework', icon: <SiDotnet /> },
                                    { name: 'XML', icon: <BsFiletypeXml /> },
                                    { name: 'Docker', icon: <FaDocker /> },
                                    { name: 'Git', icon: <FaGit /> }
                                ].map((skill) => (
                                    <motion.li
                                        key={skill.name}
                                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 242, 254, 0.2)' }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--glass-border)',
                                            cursor: 'default',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>{skill.icon}</span>
                                        <span style={{ color: 'var(--text-main)' }}>{skill.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div id="education">
                            <h3 className="tab-title" style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Education</h3>

                            <div className="education-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                                <h4 className="education-school" style={{ fontSize: '1.2rem' }}>University of Kelaniya</h4>
                                <p className="education-degree" style={{ color: 'var(--text-main)' }}>Bachelor of Science (B.Sc.)</p>
                                <p className="education-degree" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Computer Science, Chemistry, Pure Mathematics</p>
                                <p className="education-date" style={{ fontSize: '0.85rem', color: 'var(--secondary-color)' }}>2023 - 2026</p>
                            </div>

                            <div className="education-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                                <h4 className="education-school" style={{ fontSize: '1.2rem' }}>University of Colombo School of Computing</h4>
                                <p className="education-degree" style={{ color: 'var(--text-main)' }}>Bachelor of Information Technology (BIT)</p>
                                <p className="education-date" style={{ fontSize: '0.85rem', color: 'var(--secondary-color)' }}>2024 - 2027</p>
                            </div>

                            <div className="education-item">
                                <h4 className="education-school" style={{ fontSize: '1.2rem' }}>Career Development Certificates</h4>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '5px', color: 'var(--text-secondary)' }}>
                                    <li>Certificate in Advanced Excel (2025) - University of Kelaniya</li>
                                    <li>Certificate in Web Design (2024) - University of Kelaniya</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
