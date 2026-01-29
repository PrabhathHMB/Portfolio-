import React from 'react';
import { motion } from 'framer-motion';
import '../styles/intro.css';

const Intro = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="intro" className="intro-section">
            <div className="intro-content">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to my Digital Space
                </motion.h2>

                <motion.p
                    className="mission-statement"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    My mission is to transform challenges into innovative, user-centric applications. I strive to blend technical
                    expertise with creative solutions that bring ideas to life.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    I thrive on turning complexity into simplicity through cutting-edge technology and relentless curiosity. Here
                    you'll find a showcase of my skills, projects, and insights.
                </motion.p>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {[
                        {
                            title: "Web Development",
                            desc: "Building responsive and performant web applications with modern tech like React, Node.js, and Next.js.",
                            icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        },
                        {
                            title: "Fullstack Development",
                            desc: "Building comprehensive web solutions, seamlessly integrating frontend interfaces with robust backend architectures.",
                            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        },
                        {
                            title: "Project Management",
                            desc: "Leading agile teams to deliver projects on time, ensuring effective communication and streamlined workflows.",
                            icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                        },
                        {
                            title: "DevOps Engineering",
                            desc: "Automating CI/CD pipelines and infrastructure as code to accelerate deployment and improve stability.",
                            icon: "M3 10h2l1-2h8l1 2h2M6 14h12M8 18h8M12 6V4m0 0a2 2 0 00-2 2h4a2 2 0 00-2-2z"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={itemVariants}
                        >
                            <div
                                className="icon-wrapper"
                            >
                                <svg className="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '30px', height: '30px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                                </svg>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
