export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  highlights: {
    metric: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  expandedImage: string;
  impact: string;
  metrics: string[];
  demo: string;
  github: string;
  details: string[];
  timeline: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string;
  avatar: string;
  resume: string;
}

export const personalInfo: PersonalInfo = {
  name: "Vivek Patel",
  title: "Senior Data Analyst",
  location: "Augusta, GA",
  email: "vspatel360@gmail.com",
  phone: "+1 (480) 233-8735",
  linkedin: "https://www.linkedin.com/in/vspatel360/",
  github: "https://github.com/v1vek98",
  bio: "Passionate Senior Data Analyst with 4+ years of experience adept at translating complex data into strategic growth. I leverage Python, SQL, PowerBI, and Tableau to build highly effective automated solutions that significantly reduce manual reporting. With expertise in data warehousing, AI-driven product enhancements, and NLP, I guide data-informed product roadmaps and uncover new revenue opportunities.",
  avatar: "/images/avatar.jpg",
  resume: "/files/resume.pdf",
};

export const experience: Experience[] = [
  {
    id: "1",
    title: 'Senior Data Analyst',
    company: 'FEV Tutor',
    location: 'New York, NY',
    period: 'Oct 22 - Jan 25',
    type: 'Full-time',
    description: 'Leading data analytics initiatives across multiple business units, developing machine learning models, and creating executive-level dashboards.',
    achievements: [
      'Led a team of data analysts to develop automated reporting using PowerBI for internal stakeholders and clients',
      'Contributed to AI-driven initiatives to streamline quality assurance workflows and significantly enhance product quality',
      'Designed and implemented data warehouses and database schemas, unifying data across multiple systems such as Salesforce, UserPilot and other third-party providers',
      'Reduced manual reporting by 90% through Python scripting, SQL queries, PowerBI and Tableau Dashboards while boosting user engagement by 80%',
      'Spearheaded research collaborations with Stanford University and the National Student Support Accelerator (NSSA), conducting advanced analyses from research trials',
      'Guided product roadmaps for data-driven solutions, identifying new revenue opportunities, optimising costs and enhancing the scalability of core products'
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'PostgreSQL', 'PowerBI', 'Tableau', 'UserPilot', 'Salesforce'],
    highlights: [
      { metric: '90%', description: 'Manual Reporting Reduction' },
      { metric: '80%', description: 'User Engagement Increase' },
      { metric: '95%', description: 'Data Warehouse Implementation' }
    ]
  },
  {
    id: "2",
    title: 'NLP Analyst',
    company: 'PetThinQ',
    location: 'London, UK',
    period: 'Mar 21 - Oct 22',
    type: 'Full-time',
    description: 'Developed comprehensive data solutions for clients in retail and e-commerce, specializing in customer behavior analysis and market research.',
    achievements: [
      'Extracted and cleansed data using Python libraries (Requests, Beautiful Soup, and Selenium)',
      'Utilised NLTK, spaCy, and regular expressions for comprehensive textual data preprocessing, optimising datasets for downstream analytics',
      'Performed advanced topic modelling to categorise large datasets, enabling targeted and strategic analyses',
      'Conducted exploratory data analysis to identify patterns and trends, informing key decision-making processes',
      'Implemented and fine-tuned RoBERTa models for topic classification of review data, boosting accuracy and efficiency',
      'Built multiple interactive Tableau dashboards, providing dynamic data visualisations and facilitating actionable stakeholder insights'
    ],
    technologies: ['Python', 'SQL', 'NLTK', 'Tableau', 'OctoParse', 'SEMRush'],
    highlights: [
      { metric: '95%', description: 'Fine-tuned Model Accuracy' },
      { metric: '1,000,000+', description: 'Reviews Scraped & Analyzed' },
      { metric: '7', description: 'Detailed Dashboards Created' }
    ]
  },
  {
    id: "3",
    title: 'Assistant Manager',
    company: 'Squires Food & Wine',
    location: 'London, UK',
    period: 'Dec 19 - Mar 21',
    type: 'Full-time',
    description: 'Assistant manager focused on maintaining smooth store operations and ensuring exceptional customer satisfaction in a fast-paced retail environment.',
    achievements: [
      'Led and oversaw a team of grocery store employees while maintaining excellent customer service',
      'Managed purchasing of goods and products for sale in a retail setting',
      'Demonstrated strong organizational skills and attention to detail in daily operations',
      'Resolved customer complaints and conflicts in a professional manner',
      'Handled multiple responsibilities including stocking shelves, price adjustments, deliveries, and cash register operations'
    ],
    technologies: ['Point of Sale Systems', 'Inventory Management', 'Customer Service'],
    highlights: [
      { metric: '5', description: 'Team Members Led' },
      { metric: '18 months', description: 'Team Leadership Experience' },
      { metric: '6', description: 'Core Operational Functions Managed' }
    ]
  },
  {
    id: "4",
    title: 'Computer Repair/Software Specialist',
    company: 'IT Specialists',
    location: 'London, UK',
    period: 'Jun 16 - Aug 18',
    type: 'Full-time',
    description: 'Experienced IT specialist with a proven track record in resolving complex technical issues and providing comprehensive customer support.',
    achievements: [
      'Gained more than two years of experience with invoicing and accounting software (QuickBooks)',
      'Provided daily customer support both in person and over the phone',
      'Demonstrated ability to work effectively under pressure in customer service environments',
      'Troubleshot and resolved a wide variety of computer hardware and software issues',
      'Successfully negotiated long-term software and hardware maintenance contracts with local companies'
    ],
    technologies: ['QuickBooks', 'Computer Hardware', 'Software Troubleshooting', 'Customer Support'],
    highlights: [
      { metric: '1000+', description: 'Technical Tickets Resolved' },
      { metric: '95%', description: 'Customer Satisfaction' },
      { metric: '2+ years', description: 'QuickBooks Experience' }
    ]
  }
];


export const projects: Project[] = [
  {
    id: "1",
    title: 'Interactive Tutoring Whiteboard',
    description: 'An interactive online tutoring platform that combines a collaborative whiteboard with real-time chat functionality. Designed for seamless, real-time collaboration between tutors and students, it provides a rich set of tools for drawing, diagramming, and communication.',
    technologies: ['React', 'TypeScript', 'Zustand', 'Excalidraw', 'Tailwind CSS', 'Lucide React', 'Vite', 'npm'],
    image: '/project-images/tutoring-whiteboard.jpg',
    expandedImage: '/project-images/tutoring-whiteboard-expanded.jpg',
    impact: 'Streamlined the remote tutoring experience with an all-in-one collaborative tool.',
    metrics: ['Real-time Whiteboard & Chat', 'Role-Based Access (Tutor/Student)', 'Multiple UI Themes', 'Responsive Design'],
    demo: '#',
    github: 'https://github.com/V1vek98/tutoring-whiteboard',
    details: [
      'Built with React 18.3 and TypeScript for a modern, type-safe frontend.',
      'Uses Zustand for efficient and lightweight state management.',
      'Integrates the Excalidraw library for a feature-rich, collaborative whiteboard experience.',
      'Styled with Tailwind CSS for a clean, responsive, and customizable user interface.',
      'Includes multiple themes (Default, Dark, Ocean, Forest) to personalize the user experience.',
      'Features a built-in, real-time chat for seamless communication during tutoring sessions.'
    ],
    timeline: '2 weeks',
    challenges: [
      'Ensuring low-latency, real-time synchronization of whiteboard drawings and chat messages between users.',
      'Integrating and customizing the Excalidraw component within the React application.',
      'Implementing a role-based system to manage tutor and student permissions effectively.'
    ],
    solutions: [
      'Leveraged modern libraries and a component-based architecture to build a performant, real-time application.',
      'Utilized Zustand for simplified global state management, making it easier to handle shared application state.',
      'Designed a clean, intuitive UI with Tailwind CSS, ensuring a great user experience on both desktop and mobile devices.'
    ],
    outcomes: [
      'Developed a fully functional, interactive online whiteboard with integrated real-time chat.',
      'Successfully implemented features for theme customization, responsive design, and role-based access.',
      'Created a platform that enhances the remote tutoring experience by providing a seamless, all-in-one solution for collaboration.'
    ]
  },
  {
    id: "2",
    title: "Automated Chrome Extension Review Analyzer",
    description: "Developed a bot that automates the process of analyzing user feedback for any Google Chrome extension. The system uses Selenium to navigate the Chrome Web Store, scrape all available reviews for a specified extension, and then leverages the Flair NLP library to perform sentiment analysis, classifying each review as positive, negative, or neutral.",
    technologies: ["Python", "Selenium", "Flair", "Pandas"],
    image: "/project-images/chrome-bot-review.jpg",
    expandedImage: "/project-images/chrome-bot-review.jpg",
    impact: "Automated the tedious process of manually reading and categorizing user feedback, providing quick, actionable insights into public opinion of a browser extension.",
    metrics: ["Handles All Reviews via Pagination", "3-Category Sentiment Classification", "CSV Data Export"],
    demo: "#",
    github: "https://github.com/V1vek98/chrome-bot-review",
    details: [
      "Utilized Selenium to programmatically launch a Chrome browser and navigate to a target extension's page on the Web Store.",
      "Implemented a web scraping logic to systematically extract review text from the page's HTML structure.",
      "Engineered the bot to handle pagination, automatically clicking the 'Next' button to load and scrape all available reviews.",
      "Integrated the Flair NLP library's pre-trained sentiment model to process the scraped text and classify each review.",
      "Stored the classified reviews along with their confidence scores into a structured Pandas DataFrame and exported the results to a CSV file."
    ],
    timeline: "1 week",
    challenges: [
      "Handling dynamic web elements and potential changes in the Chrome Web Store's page layout.",
      "Managing the browser's state, specifically scrolling and clicking 'Next' to reveal all reviews without errors.",
      "Ensuring the scraper was robust enough to handle extensions with thousands of reviews across many pages."
    ],
    solutions: [
      "Used explicit waits in Selenium to ensure page elements were fully loaded before attempting interaction, making the scraping process more reliable.",
      "Created a loop that continuously tries to find and click the 'Next' button, breaking only when the button is no longer present, thus capturing all pages.",
      "Leveraged the Pandas library for efficient in-memory data manipulation and Flair's optimized models for fast sentiment classification."
    ],
    outcomes: [
      "Developed a fully automated bot capable of scraping and analyzing reviews for any given Chrome extension URL.",
      "Produced a clean, structured CSV file containing each review accompanied by its sentiment classification (Positive, Negative, or Neutral) and a confidence score.",
      "Created a reusable tool for developers or marketers to quickly gauge user sentiment and identify common feedback themes for any extension."
    ]
  },
  {
    id: "3",
    title: 'Advanced AI Image Generation Studio',
    description: 'Built a comprehensive ComfyUI-powered image generation platform that orchestrates multiple state-of-the-art AI models including Flux, Stable Diffusion XL, and ControlNet. The system features advanced workflow automation, batch processing capabilities, and intelligent model switching to optimize output quality and generation speed.',
    technologies: ['ComfyUI', 'Flux.1', 'Stable Diffusion XL', 'ControlNet', 'Python', 'PyTorch', 'CUDA', 'Custom Nodes'],
    image: '/project-images/comfyui.jpg',
    expandedImage: '/project-images/comfyui.jpg',
    impact: 'Created 25+ custom workflows for different use cases and artistic styles',
    metrics: ['1000+ Images Generated', '10+ AI Models Integrated', '25+ Custom Workflows'],
    demo: '#',
    github: 'https://github.com',
    details: [
      'Integrated cutting-edge models including Flux.1-dev, SDXL, and specialized ControlNet variants for precise image control',
      'Developed custom ComfyUI workflows with advanced sampling techniques, multi-pass refinement, and intelligent upscaling',
      'Built automated batch processing system capable of generating hundreds of images with consistent style and quality',
      'Implemented dynamic model switching based on prompt analysis and desired output characteristics'
    ],
    timeline: '8 months',
    challenges: [
      'Managing GPU memory efficiently across multiple large AI models (8GB+ each)',
      'Optimizing inference speed while maintaining high-quality outputs',
      'Creating consistent workflows that work reliably across different model architectures'
    ],
    solutions: [
      'Implemented intelligent model loading/unloading system to maximize GPU utilization without memory overflow',
      'Developed custom sampling schedulers and optimized inference pipelines reducing generation time by 40%',
      'Created modular workflow templates with automatic parameter adjustment based on model capabilities'
    ],
    outcomes: [
      'Successfully deployed production-ready image generation pipeline capable of handling diverse creative requests',
      'Achieved consistent high-quality outputs across photorealistic, artistic, and technical illustration styles',
      'Built comprehensive library of 25+ specialized workflows for different use cases and artistic styles'
    ]
  },
  {
    id: "4",
    title: 'Local DeepSeek LLM Deployment & Optimization',
    description: 'Set up and optimized DeepSeek LLM for local inference, exploring the capabilities of running large language models on consumer hardware. Built a simple API wrapper and experimented with various optimization techniques to maximize performance within GPU memory constraints.',
    technologies: ['DeepSeek-R1', 'Python', 'Ollama', 'FastAPI', 'CUDA', 'Transformers'],
    image: '/project-images/local-deepseek.jpg',
    expandedImage: '/project-images/local-deepseek-expanded.jpg',
    impact: 'Successfully ran 70B parameter model locally with good performance',
    metrics: ['70B Parameters', '20-30s Response Time', 'Local Privacy'],
    demo: '#',
    github: 'https://github.com',
    details: [
      'Downloaded and configured DeepSeek-R1 model for local inference using Ollama and direct PyTorch implementations',
      'Experimented with different quantization levels (4-bit, 8-bit) to fit the model within available GPU memory',
      'Built a simple FastAPI wrapper to interact with the model through HTTP requests for easier testing',
      'Tested various prompt engineering techniques and compared performance against cloud-based alternatives'
    ],
    timeline: '2 weeks',
    challenges: [
      'Working within GPU memory limitations while maintaining reasonable inference speed',
      'Understanding model quantization trade-offs between speed, memory usage, and output quality',
      'Setting up the proper CUDA environment and dependencies for optimal local performance'
    ],
    solutions: [
      'Used Ollama for simplified model management and automatic optimization based on available hardware',
      'Implemented 4-bit quantization which reduced memory usage significantly while preserving most output quality',
      'Created a basic API interface that made it easy to test different prompts and compare results'
    ],
    outcomes: [
      'Successfully deployed DeepSeek locally with consistent 20-30 second response times for most queries',
      'Gained hands-on experience with LLM deployment, quantization techniques, and local inference optimization',
      'Built a foundation for future local AI projects and understanding of the trade-offs in self-hosted LLM solutions'
    ]
  },
  {
    id: "5",
    title: 'Modern Portfolio Website - Next.js 15 & Framer Motion',
    description: 'Built a fully responsive, modern portfolio website using Next.js 15 with advanced animations and interactive components. Features a dark theme design with gradient backgrounds, scroll-triggered animations, floating dock navigation, and a glassmorphism contact form. The site showcases data analyst work experience and projects with smooth user interactions.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion 12', 'React Hook Form', 'Zod', 'Lucide React', 'Tabler Icons'],
    image: '/project-images/portfolio-website.jpg',
    expandedImage: '/project-images/portfolio-website-expanded.jpg',
    impact: 'Created a professional portfolio showcasing technical expertise and project experience',
    metrics: ['100% TypeScript Coverage', 'Mobile-First Responsive Design', 'Advanced Animations'],
    demo: '#',
    github: 'https://github.com/v1vek98/portfolio-website-aceternity',
    details: [
      'Built with Next.js 15 App Router architecture featuring TypeScript for type safety and modern development practices',
      'Implemented advanced animations using Framer Motion with scroll-triggered effects, page transitions, and micro-interactions',
      'Created custom UI components including floating dock navigation, animated backgrounds, meteors, sparkles, and typewriter effects',
      'Designed a glassmorphism contact form with React Hook Form and Zod validation, featuring real-time form validation and submission'
    ],
    timeline: '4 weeks',
    challenges: [
      'Implementing complex animations while maintaining smooth performance across all devices and browsers',
      'Creating a cohesive dark theme design system with consistent spacing, colors, and typography throughout all components',
      'Building responsive layouts that work seamlessly from mobile devices to large desktop screens',
      'Managing component state and form validation while ensuring accessibility and user experience standards'
    ],
    solutions: [
      'Utilized Framer Motion\'s whileInView animations with viewport optimization to ensure smooth scroll-triggered effects without performance degradation',
      'Developed a comprehensive CSS custom properties system in globals.css with Tailwind CSS 4 integration for consistent theming',
      'Implemented mobile-first responsive design using Tailwind\'s responsive utilities and flexible grid layouts with proper breakpoints',
      'Integrated React Hook Form with Zod schema validation for robust form handling and implemented custom error states with user-friendly feedback'
    ],
    outcomes: [
      'Deployed a production-ready portfolio website showcasing professional experience, projects, and technical skills effectively',
      'Achieved excellent performance scores with optimized images, fonts, and animations that enhance rather than hinder user experience',
      'Built a scalable architecture with centralized data management, reusable components, and maintainable code structure for future updates',
      'Created an engaging user experience with interactive elements, smooth animations, and intuitive navigation that encourages exploration'
    ]
  },
  {
    id: "6",
    title: 'Automated Hotel Performance Reporting & BI Dashboard',
    description: 'Engineered a fully autonomous data pipeline to replace manual daily reporting. The system automatically ingests hotel performance PDFs from email, uses advanced OCR and regex to intelligently extract transactional and statistical data, and transforms it into a clean, structured format. The processed data is then channeled into an interactive Power BI dashboard, providing real-time insights into key business metrics.',
    technologies: ['Python', 'PyTesseract', 'PyMuPDF', 'Pandas', 'NumPy', 'Power Automate', 'Power BI', 'Regex'],
    image: '/api/placeholder/400/250',
    expandedImage: '/api/placeholder/400/250',
    impact: 'Reduced daily reporting time by 100%',
    metrics: ['20+ PDF Reports Daily', '<1 Min Processing Time', '99.8% Extraction Accuracy'],
    demo: '#',
    github: 'https://github.com',
    details: [
      'Automated the daily retrieval of hotel audit PDFs from email attachments using a scheduled flow',
      'The script identifies and isolates pages containing "Final Transaction Closeout" and "Hotel Statistics," converting them into images for analysis',
      'Applied Optical Character Recognition (OCR) and advanced regex to parse the images, extracting financial data and operational metrics into a structured format',
      'The system cleans, transforms, and appends the new data to a central CSV file, which serves as a direct data source for the live Power BI dashboard'
    ],
    timeline: '5 weeks',
    challenges: [
      'Extracting data accurately from PDF reports with inconsistent layouts and multi-page tables',
      'Parsing complex financial figures, including negative values represented in parentheses',
      'Building a resilient, fully automated pipeline that could handle daily execution and potential errors without supervision'
    ],
    solutions: [
      'Developed a dynamic PDF processing module that first converts relevant pages to high-DPI images and then uses OCR to extract text for parsing',
      'Engineered robust regex patterns and data cleaning functions to precisely capture and standardize all required metrics and financial data',
      'Utilized Microsoft Power Automate to monitor an inbox for new report emails and trigger the Python script, with integrated logging for seamless monitoring and troubleshooting'
    ],
    outcomes: [
      'Deployed a zero-touch automation solution that runs daily, extracting data from all hotel audit PDFs',
      'Produced a clean, unpivoted dataset of hotel transactions and statistics, perfectly structured for analytics',
      'Delivered a comprehensive Power BI dashboard visualizing key performance indicators, revenue streams, and daily activity across all properties'
    ]
  }
];


export const socialLinks = [
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { name: "GitHub", url: personalInfo.github, icon: "github" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" },
]; 