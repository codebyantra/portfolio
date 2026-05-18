import '../styles/Skills.css';

/**
 * Skills Section Component - Modern Gradient Design with Strong Animations
 * 
 * Features:
 * - Skill tags with icons and hover effects
 * - Categorized skills display
 * - Smooth animations and transitions
 */

export default function Skills() {
  const skillTags = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Laravel', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Laravel','Firebase', 'REST APIs', 'Authentication', 'Database Design', 'Server Management']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Firebase Firestore', 'MongoDB', 'Real-time Sync']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Firebase Console', 'VS Code', 'npm']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-divider"></div>
          <h2 className="skills-title">Skills & Technologies</h2>
        </div>

        {/* Main Skills Grid */}
        <div className="skills-grid">
          {skillTags.map((skill, index) => (
            <div key={skill.name} className="skill-tag">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-skills">
                {category.skills.map((skill, idx) => (
                  <span key={skill} className="category-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
