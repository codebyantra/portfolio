import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

/**
 * Main App Component
 * 
 * Design Philosophy: Minimalist Brutalism
 * - Dark theme with cyan accents
 * - Modular component structure
 * - SEO optimized with meta tags
 * - Firebase integration for contact form
 * - MySQL integration example included
 */

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Antra Vishwakarma - Full Stack Web Developer';

    // Update meta tags for SEO
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic SEO Meta Tags
    updateMetaTag('description', 'Full Stack Web Developer specializing in React, Firebase, and MySQL. Building modern, responsive web applications.');
    updateMetaTag('keywords', 'web developer, react, firebase, mysql, full stack, portfolio');
    updateMetaTag('author', 'Antra Vishwakarma');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph Tags
    updateOGTag('og:title', 'Antra Vishwakarma - Full Stack Web Developer');
    updateOGTag('og:description', 'Full Stack Web Developer specializing in React, Firebase, and MySQL.');
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Antra Vishwakarma - Full Stack Web Developer');
    updateMetaTag('twitter:description', 'Full Stack Web Developer specializing in React, Firebase, and MySQL.');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
