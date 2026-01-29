import React from 'react';
import '../styles/blog.css';

const Blog = () => {
    return (
        <section id="blog" className="blog-section">
            <div className="blog-inner">
                <h2 className="blog-heading">Latest Insights</h2>

                <p className="blog-intro">
                    Welcome to my blog – your go-to spot for in-depth explorations on modern connectivity,
                    AI-driven development, and the future of the web. Dive in to discover insights that keep you ahead of the curve in 2026.
                </p>
                <div className="blog-grid">

                    <div className="blog-card" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">
                        <div className="blog-image-wrapper">
                            <img src="/assets/blog_ai_development.png" alt="AI in Web Development" className="blog-image" />
                            <div className="blog-badge">AI & Development</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">The Era of AI-Driven Development</h3>
                            <p className="blog-description">
                                Artificial Intelligence is no longer just a tool but a core teammate. From automated code refactoring
                                to predictive UI generation, explore how AI agents and LLMs are reshaping the developer workflow in 2026.
                            </p>
                            <div className="blog-footer">
                                <div className="blog-meta">
                                    <span className="blog-date">Jan 15, 2026</span>
                                    <span className="blog-readtime"> 5 min read</span>
                                </div>

                                <a href="#" className="blog-link" title="Read the full post">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">
                        <div className="blog-image-wrapper">
                            <img src="/assets/blog_webassembly.png" alt="The Next Evolution involved WebAssembly" className="blog-image" />
                            <div className="blog-badge">Performance</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">WebAssembly & The Near-Native Web</h3>
                            <p className="blog-description">
                                WebAssembly (Wasm) has matured to allow heavy computational tasks in the browser.
                                We discuss how major apps are shifting to Wasm for video editing, gaming, and 3D rendering directly on the web.
                            </p>
                            <div className="blog-footer">
                                <div className="blog-meta">
                                    <span className="blog-date">Dec 10, 2025</span>
                                    <span className="blog-readtime"> 7 min read</span>
                                </div>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                    className="blog-link" title="Read the full post">
                                    Read More

                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300">
                        <div className="blog-image-wrapper">
                            <img src="/assets/blog_css_evolution.png" alt="CSS in 2026" className="blog-image" />
                            <div className="blog-badge">Frontend</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">CSS Evolution: Container Queries & Beyond</h3>
                            <p className="blog-description">
                                Responsive design is no longer just about media queries. Discover how Container Queries,
                                CSS Nesting, and the new View Transitions API are making frontend architecture cleaner and more powerful.
                            </p>
                            <div className="blog-footer">
                                <div className="blog-meta">
                                    <span className="blog-date">Nov 22, 2025</span>
                                    <span className="blog-readtime"> 6 min read</span>
                                </div>
                                <a href="#"
                                    target="_blank" rel="noopener noreferrer" className="blog-link" title="Read the full post">
                                    Read More

                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="400">
                        <div className="blog-image-wrapper">
                            <img src="/assets/blog_zero_trust.png" alt="Cybersecurity Zero Trust" className="blog-image" />
                            <div className="blog-badge">Security</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">Zero Trust Architecture for Modern Apps</h3>
                            <p className="blog-description">
                                "Never trust, always verify." As cyber threats evolve, learn how Zero Trust principles
                                are being integrated into standard web development workflows to secure API endpoints and user data.
                            </p>
                            <div className="blog-footer">
                                <div className="blog-meta">
                                    <span className="blog-date">Oct 05, 2025</span>
                                    <span className="blog-readtime"> 5 min read</span>
                                </div>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                    className="blog-link" title="Read the full post">
                                    Read More

                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;
