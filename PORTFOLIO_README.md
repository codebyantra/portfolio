# Antra Vishwakarma - Full Stack Developer Portfolio

A modern, dark-themed full-stack developer portfolio website built with React, Firebase, and MySQL integration example. Features smooth animations, responsive design, and professional typography following minimalist brutalism design principles.

## 🎨 Design Philosophy: Minimalist Brutalism

- **Dark Theme**: Deep charcoal background (#0F1419) with off-white text (#F5F5F5)
- **Cyan Accents**: Primary accent color (#00D9FF) for interactive elements
- **Typography-First**: Monospace fonts (IBM Plex Mono) for headers and technical elements
- **Asymmetric Layouts**: Generous whitespace with left-aligned content
- **Subtle Animations**: Fade-in, hover effects, and smooth transitions
- **Purposeful Design**: Every element serves a function; no decoration for decoration's sake

## 🚀 Features

### Core Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional background with experience highlights
- **Skills Section**: Grid-based skill display with categories
- **Projects Section**: Featured project cards with tech stack and links
- **Contact Section**: Firebase-integrated contact form with validation
- **Footer**: Social links, copyright info, and scroll-to-top button

### Technical Features
- ✅ **Firebase Integration**: Authentication and Firestore database for contact messages
- ✅ **MySQL Example**: Complete integration guide for backend database
- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and canonical URLs
- ✅ **Smooth Navigation**: Scroll-to-section functionality with smooth animations
- ✅ **Form Validation**: Client-side validation with success/error messages
- ✅ **Modular Components**: Reusable JSX components with external CSS

## 📁 Project Structure

```
antra-portfolio/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Hero.css
│   │   │   ├── About.css
│   │   │   ├── Skills.css
│   │   │   ├── Projects.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   ├── config/
│   │   │   └── firebase.js
│   │   ├── utils/
│   │   │   └── mysqlExample.js
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
└── PORTFOLIO_README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm
- Firebase account (for contact form)

### Step 1: Install Dependencies

```bash
cd antra-portfolio
pnpm install
```

### Step 2: Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to Project Settings (gear icon)
4. Copy the Web app configuration
5. Update `client/src/config/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "1:your-app-id:web:your-web-app-id"
};
```

### Step 3: Configure Firestore Security Rules

In Firebase Console, go to Firestore Database > Rules and set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public writes to contact_messages collection
    match /contact_messages/{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Step 4: Customize Portfolio Content

Edit the following files to personalize your portfolio:

- `client/src/components/Hero.jsx` - Update name, title, and intro
- `client/src/components/About.jsx` - Add your background and experience
- `client/src/components/Skills.jsx` - List your skills and technologies
- `client/src/components/Projects.jsx` - Add your projects with links
- `client/src/components/Contact.jsx` - Update contact information
- `client/src/components/Footer.jsx` - Update social links

### Step 5: Start Development Server

```bash
pnpm dev
```

The portfolio will be available at `http://localhost:3000`

## 🗄️ MySQL Integration

The portfolio includes a complete MySQL integration example. To connect a MySQL backend:

### Backend Setup (Node.js + Express)

1. Create a backend server with Express:

```bash
npm init -y
npm install express mysql2 cors dotenv
```

2. Create `server.js`:

```javascript
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'portfolio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM projects');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
```

3. Create MySQL database and tables:

```sql
CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  tech_stack JSON,
  live_url VARCHAR(255),
  github_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT,
  github_url VARCHAR(255),
  linkedin_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Frontend Integration

Use the functions from `client/src/utils/mysqlExample.js`:

```javascript
import { fetchProjectsFromMySQL } from './utils/mysqlExample';

useEffect(() => {
  fetchProjectsFromMySQL()
    .then(projects => setProjects(projects))
    .catch(error => console.error(error));
}, []);
```

## 🎨 Customization

### Colors
Edit `client/src/index.css` to change the color scheme:

```css
:root {
  --primary: #00D9FF;        /* Cyan accent */
  --background: #0F1419;     /* Dark charcoal */
  --foreground: #F5F5F5;     /* Off-white text */
  --card: #1A1F2E;           /* Card background */
  --border: #2A3142;         /* Border color */
}
```

### Typography
Fonts are defined in `client/src/index.css`:
- **Headers**: IBM Plex Mono (monospace)
- **Body**: IBM Plex Sans (sans-serif)

### Animations
Modify animation speeds and effects in individual CSS files:
- `fadeInUp`: 0.6s ease-out
- `expandUnderline`: 0.3s ease-in-out
- `hover-lift`: translateY(-4px)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 Security Considerations

1. **Firebase Security**: Use security rules to protect your Firestore database
2. **Environment Variables**: Store sensitive data in `.env` files (not in code)
3. **CORS**: Configure CORS properly for your backend
4. **Input Validation**: All form inputs are validated on the client side
5. **Rate Limiting**: Consider implementing rate limiting on your backend

## 📊 SEO Optimization

The portfolio includes:
- ✅ Meta tags for description, keywords, author
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast loading times

## 🚀 Deployment

### Deploy to Manus
1. Create a checkpoint in the Manus UI
2. Click the "Publish" button
3. Configure custom domain (optional)

### Deploy to Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
```bash
npm run build
# Push build folder to gh-pages branch
```

## 📝 Content Updates

### Update Projects
Edit `client/src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Project description...',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/your-repo'
  },
  // Add more projects...
];
```

### Update Skills
Edit `client/src/components/Skills.jsx`:

```javascript
const mainSkills = [
  { name: 'HTML', icon: '📄' },
  { name: 'CSS', icon: '🎨' },
  // Add more skills...
];
```

## 🐛 Troubleshooting

### Firebase Connection Issues
- Check if Firebase config is correct
- Verify Firestore security rules allow writes
- Check browser console for error messages

### Contact Form Not Working
- Verify Firebase Firestore is initialized
- Check security rules in Firebase Console
- Test with browser DevTools Network tab

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check if CSS files are properly linked
- Verify color values in CSS variables

## 📚 Resources

- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [IBM Plex Fonts](https://github.com/IBM/plex)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

This portfolio template is open source and available under the MIT License.

## 👤 Author

**Antra Vishwakarma**
- Email: antra@example.com
- GitHub: [github.com/antravishwakarma](https://github.com)
- LinkedIn: [linkedin.com/in/antravishwakarma](https://linkedin.com)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Last Updated**: March 2026
**Version**: 1.0.0
