import '../styles/Projects.css';

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: 'Restaurant Website',
      description: 'A modern restaurant website built with HTML, CSS, JavaScript, PHP. Features menu browsing, online ordering, and real-time order tracking.',
      image: '/restaurant.jpg',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      liveLink: '#',
      githubLink: 'https://github.com/codebyantra/Restaurant-Website'
    },
    {
      id: 2,
      name: 'Flower Shop Website',
      description: 'A modern flower shop website built with Reactjs and Firebase. Features product browsing, shopping cart, and secure checkout.',
      image: '/flower.png',
      tech: ['Reactjs', 'Firebase'],
      liveLink: 'https://floral-80837.web.app/',
      githubLink: 'https://github.com/codebyantra/floral-site'
    },
    {
      id: 3,
      name: 'voice to text converter',
      description: 'A modern voice to text converter built with React and Firebase.',
      image: '/voice-to-text.png',
      tech: ['React','Firebase', 'Web Speech API'],
      liveLink: 'https://voice-to-text-converter-a86c7.web.app',
      githubLink: 'https://github.com/codebyantra/voice-'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-header">
          <div className="projects-divider"></div>
          <h2 className="projects-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div key={project.id} className="project-card">

              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">

                  <a
                    href={project.liveLink}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}