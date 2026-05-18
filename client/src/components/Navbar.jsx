import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles//Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Logo Animation */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          className="navbar-logo"
        >
          <Link to="hero" smooth={true} duration={500}>
            <span className="logo-text">A</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="logo-dot"
            >.</motion.span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu-desktop">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-item"
            >
             <Link 
  to={link.to} 
  smooth={true} 
  duration={500} 
  spy={true} 
  activeClass="active"
>
  {link.name}
  <motion.div className="underline" layoutId="underline" />
</Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-cta"
        >
          <Link to="contact" smooth={true} duration={500} className="btn-get-in-touch">
            Get In Touch
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="bar"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mobile-menu-overlay"
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={linkVariants}
                  whileHover={{ x: 10, color: "#00d2ff" }}
                  className="mobile-nav-item"
                >
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    duration={500} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;