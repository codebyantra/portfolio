import { useState, useEffect } from 'react';
import '../styles/Footer.css';

/**
 * Footer Component - Modern Gradient Design with Strong Animations
 * 
 * Features:
 * - Three-column layout (About, Quick Links, Connect)
 * - Social media links
 * - Scroll to top button
 * - Smooth animations
 */

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: '💻', label: 'GitHub', url: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '📷', label: 'Instagram', url: 'https://instagram.com' },
    { icon: '📧', label: 'Email', url: 'mailto:antra@example.com' }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontWeight: '800',
                  color: 'white',
                  fontSize: '0.875rem'
                }}>
                  AV
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '700', color: '#FFFFFF' }}>Antra</span>
              </div>
              <div className="footer-section-content">
                <p>
                  Full Stack Developer crafting modern web experiences with React, Firebase, and backend technologies.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <div className="quick-links">
                {quickLinks.map((link) => (
                  <button 
                    key={link.id}
                    className="quick-link" 
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h3 className="footer-section-title">Connect</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {currentYear} Antra. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Button */}
<a
  href="https://wa.me/918178039581"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-whatsapp"></i>
</a>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}
