import '../styles/About.css';

/**
 * About Section Component - Modern Gradient Design with Strong Animations
 * 
 * Features:
 * - About description with gradient accents
 * - Experience highlights with hover effects
 * - Smooth animations on scroll
 */

export default function About() {
  const highlights = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive UIs with React or HTML, focusing on performance and user experience.'
    },
    {
      title: 'Backend Integration',
      description: 'Developing server-side logic with PHP, laravel, and MySQL for scalable applications.'
    },
    {
      title: 'Authentication & Security',
      description: 'Implementing secure authentication systems using Firebase and custom backend solutions.'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas with Firebase Firestore and MySQL or MongoDB for optimal performance.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-divider"></div>
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Full Stack Web Developer</strong> with expertise in building 
              modern, scalable web applications. My journey in web development has equipped me with 
              strong skills in both frontend and backend technologies.
            </p>
            <p>
              With a focus on <strong>React</strong> and <strong>Firebase</strong>, I specialize in creating 
              responsive interfaces and robust backend systems. I have hands-on experience building 
              authentication systems, real-time dashboards, and complex full-stack applications.
            </p>
            <p>
              I'm committed to writing clean, maintainable code and following best practices in 
              software development. Every project I undertake reflects my dedication to quality and 
              attention to detail.
            </p>
          </div>

          <div className="experience-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
