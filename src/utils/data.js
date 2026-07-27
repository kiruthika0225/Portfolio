// ================================================================
// ALL PORTFOLIO DATA — Kiruthika Saravanan
// ================================================================

export const PERSONAL = {
  name: 'Kiruthika Saravanan',
  tagline: 'Open for Opportunities',
  roles: [
    'Java Developer',
    'Frontend Developer',
    'Problem Solver',
    'Continuous Learner',
  ],
  bio1:
    'I am a dedicated Java Developer specializing in building responsive, high-performance web applications. With a strong foundation in Java and modern frontend technologies like React and JavaScript, I excel at transforming complex problems into elegant, scalable solutions.',
  bio2:
    'I thrive in collaborative environments and am deeply passionate about writing clean, maintainable code. I am constantly learning and adapting to new technologies, always seeking opportunities to deliver impactful results in a forward-thinking tech workspace.',
  email: 'kiruthikasaravanan08@gmail.com',
  phone: '+91 81227 50271',
  location: 'Chennai, Tamil Nadu, India',
  languages: 'Tamil, English',
  nationality: 'Indian',
  strength: 'Quick Learner, Highly Adaptable',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const EDUCATION = [
  {
    degree: 'B.Sc. (Computer Science)',
    institution: 'Valliammal College For Women',
    year: '2023 – 2026',
    grade: '82.8%',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Higher Secondary School (12th Std)',
    institution: "Wesley's Matric Higher Secondary School",
    year: '2022 – 2023',
    grade: '68%',
    icon: '📚',
    current: false,
  },
  {
    degree: 'Secondary School (10th Std)',
    institution: "Wesley's Matric Higher Secondary School",
    year: '2020 – 2021',
    grade: 'Completed (Pass)',
    icon: '🏫',
    current: false,
  },
];

export const SKILLS = [
  {
    name: 'Java',
    level: 'Basic',
    pct: 45,
    icon: '☕',
    color: '#007396',
    category: 'Programming Languages',
  },
  {
    name: 'JavaScript',
    level: 'Basic',
    pct: 45,
    icon: '⚡',
    color: '#F7DF1E',
    category: 'Programming Languages',
  },
  {
    name: 'HTML',
    level: 'Intermediate',
    pct: 80,
    icon: '🌐',
    color: '#E34F26',
    category: 'Frontend',
  },
  {
    name: 'CSS',
    level: 'Intermediate',
    pct: 75,
    icon: '🎨',
    color: '#264DE4',
    category: 'Frontend',
  },

  {
    name: 'MySQL',
    level: 'Intermediate',
    pct: 65,
    icon: '🐬',
    color: '#4479A1',
    category: 'Database',
  },
];

export const SOFT_SKILLS = [
  'Quick Learner',
  'Adaptive to New Technologies',
  'Modern Visual Hierarchy',
  'Responsive Design Focus',
  'Team Collaboration',
  'Problem Solving',
];

export const EXPERIENCE = [
  {
    role: 'AI Tool Frontend Development Intern',
    company: 'Cornerstone Robotics PVT. LTD.',
    type: 'Internship',
    period: '2024',
    bullets: [
      'Developed responsive UI pages using semantic HTML structures and standard CSS styling rules.',
      'Collaborated on building mockups and templates to improve user navigation flow in web applications.',
      'Learned and integrated interactive frontend features with robust code designs.',
      'Gained hands-on professional workflow experience working with engineering teams.',
    ],
  },
];

export const PROJECTS = [
  {
    tag: 'Interactive E-Commerce',
    title: '3D Sculpture Customization & Ordering',
    desc: 'Designed and developed an interactive landing page that enables customers to view, search, and order custom sculptures crafted with PLA material. Features voice search, dynamic catalog search, and simulated shopping cart states.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    links: [
      { href: '../INDEX.HTML', label: 'Live Demo', icon: 'ExternalLink', target: '_blank' },
    ],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    accentColor: '#3B82F6',
  },
  {
    tag: 'Web Application',
    title: 'Course Management System',
    desc: 'A responsive Course Management System for managing students, courses, enrollments, faculty, attendance, and reports through an intuitive dashboard.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
    links: [
      { href: '#', label: 'Live Demo', icon: 'ExternalLink', target: '_blank' },
    ],
    github: 'https://github.com',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accentColor: '#10B981',
  },
  {
    tag: 'Personal Branding',
    title: 'Developer Portfolio Website',
    desc: 'A high-end, responsive developer portfolio featuring electric navy theme aesthetics, custom CSS animations, floating particles, cursor glow, typing effects, and a fluid responsive layout built entirely in React.js.',
    techs: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { href: '#', label: 'Current Page', icon: 'Smile' },
    ],
    github: 'https://github.com',
    gradient: 'from-purple-600/20 to-blue-600/20',
    accentColor: '#8B5CF6',
  },
];

export const STATS = [
  { label: 'Projects Built', value: 2, suffix: '+' },
  { label: 'Technologies', value: 6, suffix: '+' },
  { label: 'Internship', value: 1, suffix: '' },
  { label: 'GPA Score', value: 82.8, suffix: '%' },
];
