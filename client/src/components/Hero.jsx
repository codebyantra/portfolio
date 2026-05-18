import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax and scroll effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section id="hero" className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-bg-glow"></div>
      <motion.div 
        style={{ y: y1 }}
        className="floating-shape shape-1"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="floating-shape shape-2"
      ></motion.div>

      <div className="container hero-wrapper">
        <motion.div 
          style={{ opacity, scale }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-text-content"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-greeting"
          >
            I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-name"
          >
            Antra
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-title"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-description"
          >
            I build modern and responsive web applications using React and 
            backend technologies. Specialized in creating scalable solutions 
            with clean code and intuitive user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hero-actions"
          >
            <a href="/Antra Resume.pdf" download className="btn-gradient">
              Download Resume
            </a>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-image-container"
        >
          <div className="image-frame">
            <img 
              src="/mine.png" 
              alt="Antra" 
              className="hero-profile-img"
            />
            {/* Decorative elements around image */}
            <div className="frame-border"></div>
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-badge"
            >
              <span>5+ Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator"
      >
        <span className="scroll-text">SCROLL DOWN</span>
        <div className="scroll-line">
          <motion.div 
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-dot"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;