import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
    longDescription: `
## E-commerce Platform

This full-stack e-commerce solution provides businesses with a complete online shopping experience. Built with scalability and performance in mind, it handles everything from inventory management to secure payment processing.

### Features
- User authentication and profile management
- Responsive product catalog with advanced filtering
- Real-time shopping cart updates
- Secure payment processing with Stripe
- Order tracking and history
- Admin dashboard for inventory management

### Technical Details
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js Express API with MongoDB
- **Authentication**: JWT with secure HTTP-only cookies
- **Payment**: Stripe API integration
- **Deployment**: Vercel for frontend, MongoDB Atlas for database

The platform was designed with a focus on performance optimization and SEO best practices, resulting in fast page loads and excellent search engine visibility.
    `,
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    github: 'https://github.com/giankbr/ecommerce-platform',
    demo: 'https://ecommerce-demo.giankbr.dev',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.',
    longDescription: `
## Task Management App

A collaborative task management application designed to help teams organize and track their work. The app features real-time updates to ensure all team members stay synchronized.

### Features
- Project creation and team member management
- Task assignment with priority levels and deadlines
- Kanban board for visual task tracking
- Real-time updates using WebSockets
- Comment system for task discussions
- File attachment support for tasks
- Progress reports and analytics

### Technical Details
- **Frontend**: React with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS with custom components
- **Backend**: Firebase Firestore and Functions
- **Real-time**: Firebase Realtime Database
- **Authentication**: Firebase Auth with multiple providers

This application was built to address the specific needs of remote teams, with a focus on collaboration and accountability.
    `,
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: '/projects/task-app.jpg',
    github: 'https://github.com/giankbr/task-manager',
    demo: 'https://taskify.giankbr.dev',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS. Features a clean, modern design with smooth animations and dark mode support.',
    longDescription: `
## Portfolio Website

A personal portfolio website designed to showcase my work and skills. The site features a clean, modern design with subtle animations and excellent performance metrics.

### Features
- Responsive design that works on all devices
- Dark mode support with system preference detection
- Smooth page transitions and scrolling effects using GSAP
- Project showcase with detailed case studies
- Contact form with email integration
- Blog section with markdown support
- SEO optimized with Next.js best practices

### Technical Details
- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animation**: GSAP for scroll effects
- **Content**: MDX for blog posts and project case studies
- **Deployment**: Vercel with edge functions
- **Analytics**: Vercel Analytics for privacy-focused metrics

The website maintains a 100 Lighthouse performance score and was built with accessibility as a priority.
    `,
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    image: '/projects/portfolio.jpg',
    github: 'https://github.com/giankbr/portfolio',
    demo: 'https://giankbr.dev',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses the OpenWeatherMap API for data.',
    longDescription: `
## Weather Dashboard

A comprehensive weather application that provides current conditions and detailed forecasts for locations worldwide. The dashboard allows users to save favorite locations and view historical weather data.

### Features
- Current weather conditions with visual indicators
- 7-day forecast with temperature ranges
- Hourly forecast for the next 48 hours
- Weather maps showing precipitation, temperature, and wind
- Location search with autocomplete
- Favorite locations with quick access
- Historical weather data visualization

### Technical Details
- **Frontend**: React with TypeScript
- **State Management**: React Context API
- **API Integration**: OpenWeatherMap and MapBox APIs
- **Data Visualization**: Chart.js for weather trends
- **Geolocation**: Browser API for current location
- **Caching**: Local storage for saving preferences
- **Deployment**: Netlify with CI/CD pipeline

The application was designed to provide a clean, intuitive interface while delivering comprehensive weather information through multiple data visualizations.
    `,
    tags: ['React', 'API Integration', 'Chart.js'],
    image: '/projects/weather.jpg',
    github: 'https://github.com/giankbr/weather-dashboard',
    demo: 'https://weather.giankbr.dev',
    featured: false,
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy. Integrates with OpenAI API.',
    longDescription: `
## AI Content Generator

A powerful content generation tool that leverages AI to help writers and marketers create high-quality content. The application streamlines the content creation process from ideation to publication.

### Features
- AI-assisted blog post generation
- Social media content creation with platform-specific formatting
- Email newsletter template generation
- SEO optimization suggestions
- Content readability analysis
- Custom tone and style settings
- Content history and version control

### Technical Details
- **Frontend**: Next.js with server components
- **AI Integration**: OpenAI API with fine-tuned models
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers
- **Subscription**: Stripe for premium features
- **Styling**: Shadcn UI components with Tailwind
- **Deployment**: Vercel with edge functions

The application was built with scalability in mind, using streaming responses for AI content generation to provide a responsive user experience even with longer content requests.
    `,
    tags: ['Next.js', 'OpenAI API', 'Prisma'],
    image: '/projects/ai-content.jpg',
    github: 'https://github.com/giankbr/ai-content-generator',
    demo: 'https://contentai.giankbr.dev',
    featured: true,
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'A mobile-first fitness tracking application that helps users log workouts, track progress, and set fitness goals. Features workout plans and nutrition tracking.',
    longDescription: `
## Fitness Tracking App

A comprehensive fitness companion designed to help users achieve their health and fitness goals. The app provides workout tracking, nutrition monitoring, and progress visualization.

### Features
- Workout logging with custom exercise library
- Ready-made workout plans for different fitness levels
- Progress tracking with visual charts
- Body measurements and weight tracking
- Nutrition diary with macro and micronutrient analysis
- Water intake monitoring
- Social features for sharing achievements

### Technical Details
- **Frontend**: React Native for cross-platform mobile support
- **State Management**: MobX State Tree
- **Backend**: Node.js with Express and MongoDB
- **Authentication**: JWT with refresh token rotation
- **Storage**: Cloud storage for progress photos
- **Analytics**: Custom event tracking for user engagement
- **Offline Support**: Local storage sync for offline use

The application focuses on providing a seamless user experience with minimal friction for daily tracking, which has resulted in higher user retention compared to similar apps.
    `,
    tags: ['React Native', 'MobX', 'Express'],
    image: '/projects/fitness-app.jpg',
    github: 'https://github.com/giankbr/fitness-tracker',
    demo: 'https://fittrack.giankbr.dev',
    featured: false,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: number) => {
  return projects.find((project) => project.id === id);
};
