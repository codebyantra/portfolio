import { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// ✅ Initialize EmailJS
emailjs.init("01IbkV9lTUKyvAi68");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    setStatus('loading');
    setMessage('Sending your message...');

    try {
      console.log("🔥 Firebase start");

      // ✅ Save to Firebase
      await addDoc(collection(db, 'contact_messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        read: false
      });

      console.log("✅ Firebase done");

      console.log("📧 EmailJS start");

      // ✅ Send Email (with timeout safety)
      const res = await Promise.race([
        emailjs.send(
          "service_606shky",
          "template_gj8df9m",
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: "New Contact Message"
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Email timeout")), 10000)
        )
      ]);

      console.log("✅ EmailJS success:", res);

      setStatus('success');
      setMessage('Message sent successfully!');

      // ✅ Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(null);
        setMessage('');
      }, 5000);

    } catch (error) {
      console.error("❌ ERROR:", error);
      setStatus('error');
      setMessage(error.message || 'Failed to send message. Try again.');
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'atrix.dev26@gmail.com',
      link: 'mailto:antravishwakarma827@gmail.com',
      icon: '📧'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/antra',
      link: 'https://www.linkedin.com/in/antra-vishwakarma-52695a326/',
      icon: '💼'
    },
    {
      label: 'GitHub',
      value: 'github.com/atrixdev26-dot',
      link: 'https://github.com/codebyantra',
      icon: '💻'
    },
    {
      label: 'Phone',
      value: '+91 8178039581',
      link: 'tel:+918178039581',
      icon: '📱'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-divider"></div>
          <h2 className="contact-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          
          {/* Contact Info */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-info-content">
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {status && (
              <div className={`message-alert ${status}`}>
                {status === 'loading' && <span className="spinner"></span>}
                {message}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message ✈️'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}