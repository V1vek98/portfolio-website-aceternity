export interface Skill {
  name: string;
  level: number;
  category: "technical" | "tools" | "soft";
  icon?: string;
}

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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
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

export const skills: Skill[] = [
  // Technical Skills
  { name: "Python", level: 95, category: "technical" },
  { name: "SQL", level: 92, category: "technical" },
  { name: "R", level: 88, category: "technical" },
  { name: "Machine Learning", level: 87, category: "technical" },
  { name: "Statistical Analysis", level: 93, category: "technical" },
  { name: "Data Mining", level: 89, category: "technical" },
  { name: "Predictive Modeling", level: 86, category: "technical" },
  { name: "A/B Testing", level: 91, category: "technical" },
  
  // Tools
  { name: "Tableau", level: 94, category: "tools" },
  { name: "PowerBI", level: 87, category: "tools" },
  { name: "Excel", level: 96, category: "tools" },
  { name: "Jupyter", level: 93, category: "tools" },
  { name: "Apache Spark", level: 82, category: "tools" },
  { name: "AWS", level: 85, category: "tools" },
  { name: "Google Analytics", level: 89, category: "tools" },
  { name: "Snowflake", level: 84, category: "tools" },
  
  // Soft Skills
  { name: "Data Storytelling", level: 94, category: "soft" },
  { name: "Business Communication", level: 91, category: "soft" },
  { name: "Project Management", level: 87, category: "soft" },
  { name: "Problem Solving", level: 95, category: "soft" },
];

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
      { metric: '500+', description: 'Technical Tickets Resolved' },
      { metric: '95%', description: 'Customer Satisfaction' },
      { metric: '2+ years', description: 'QuickBooks Experience' }
    ]
  }
];


export const projects: Project[] = [
  {
    id: "1",
    title: 'Automated Content Generation & Analysis Pipeline',
    description: 'Developed a comprehensive pipeline that leverages a OpenAI APIs to automatically generate high-quality articles from a given set of topics. The system then enriches the content by performing several layers of machine learning-powered analysis, including summarization, keyword extraction, sentiment analysis, and clickbait classification.',
    technologies: ['OpenAI API', 'Scikit-learn', 'Flair', 'Spacy', 'NLTK', 'Pandas', 'NumPy', 'Yake'],
    image: '/api/placeholder/400/250',
    impact: 'Scaled article production by over 100x',
    metrics: ['10,000+ Articles/Day', '94% Classification Accuracy', 'Auto Review System'],
    demo: '#',
    github: 'https://github.com',
    details: [
      'Used the OpenAI API to generate article titles and body content based on selected topics',
      'Implemented a custom logistic regression model with Scikit-learn to classify the generated titles for click-bait potential',
      'Integrated the Flair and Spacy libraries to perform sentiment analysis and generate concise article summaries',
      'Automated the extraction of keywords, locations, and NSFW content before saving the final output'
    ],
    timeline: '3 months',
    challenges: [
      'Ensuring generated content was coherent, relevant, and engaging for readers',
      'Building an accurate classification model to distinguish between standard and "click-bait" headlines',
      'Integrating multiple disparate NLP analysis tools into a single, seamless workflow'
    ],
    solutions: [
      'Utilized OpenAI\'s text-davinci-002 model with carefully engineered prompts to guide high-quality text generation',
      'Trained a logistic regression classifier on a labeled dataset, using TF-IDF and part-of-speech tagging for feature engineering',
      'Developed a modular pipeline in Python, where each analysis step (e.g., summarization, sentiment analysis) functioned as an independent stage'
    ],
    outcomes: [
      'Deployed a system capable of generating complete articles with titles, sub-headlines, and summaries',
      'Enriched each article with valuable metadata, including sentiment scores, keywords, and read-time estimates',
      'Delivered a final structured dataset containing all generated content and its corresponding analytics in an Excel file'
    ]
  },
  {
    id: "2",
    title: 'Automated Hotel Performance Reporting & BI Dashboard',
    description: 'Engineered a fully autonomous data pipeline to replace manual daily reporting. The system automatically ingests hotel performance PDFs from email, uses advanced OCR and regex to intelligently extract transactional and statistical data, and transforms it into a clean, structured format. The processed data is then channeled into an interactive Power BI dashboard, providing real-time insights into key business metrics.',
    technologies: ['Python', 'PyTesseract', 'PyMuPDF', 'Pandas', 'NumPy', 'Power Automate', 'Power BI', 'Regex'],
    image: '/api/placeholder/400/250',
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
  },
  {
    id: "3",
    title: 'Hotel Intelligence Hub - Data Analytics Platform',
    description: 'Developed a comprehensive web-based analytics platform for hotel industry data analysis, featuring automated data loading, intelligent classification systems, and interactive visualizations. The application processes complex hotel datasets and provides real-time insights into property performance, market positioning, and operational metrics.',
    technologies: ['React', 'Material-UI', 'JavaScript ES6+', 'CSV Processing', 'Google Maps API', 'Responsive Design'],
    image: '/api/placeholder/400/250',
    impact: 'Streamlined hotel data analysis workflow by 85%',
    metrics: ['85% Workflow Improvement', '10MB+ File Processing', '100% Mobile Responsive'],
    demo: '#',
    github: 'https://github.com',
    details: [
      'Built a modern React-based web application with Material-UI components for professional hotel data analysis',
      'Implemented automatic CSV file detection and loading system that processes hotel datasets on startup',
      'Developed intelligent hotel classification algorithm using room count and PRO/CORE status with visual feedback',
      'Created responsive interface with advanced filtering, search capabilities, and Google Maps integration for location analysis'
    ],
    timeline: '2 months',
    challenges: [
      'Processing large CSV files (10MB+) efficiently in the browser without performance degradation',
      'Creating an intuitive user interface that works seamlessly across desktop and mobile devices',
      'Implementing robust error handling for various CSV formats and data inconsistencies'
    ],
    solutions: [
      'Utilized Papa Parse library for efficient CSV processing with streaming capabilities and memory optimization',
      'Implemented Material-UI\'s responsive grid system with custom breakpoints and touch-friendly interactions',
      'Built comprehensive validation system with graceful error recovery and user-friendly error messages'
    ],
    outcomes: [
      'Delivered a production-ready application capable of processing hotel datasets with 1000+ properties instantly',
      'Implemented advanced data visualization features including interactive maps, dynamic filtering, and real-time classification updates',
      'Reduced manual data analysis time from hours to minutes with automated insights and classification features'
    ]
  },
  {
    id: "4",
    title: 'Advanced AI Image Generation Studio',
    description: 'Built a comprehensive ComfyUI-powered image generation platform that orchestrates multiple state-of-the-art AI models including Flux, Stable Diffusion XL, and ControlNet. The system features advanced workflow automation, batch processing capabilities, and intelligent model switching to optimize output quality and generation speed.',
    technologies: ['ComfyUI', 'Flux.1', 'Stable Diffusion XL', 'ControlNet', 'Python', 'PyTorch', 'CUDA', 'Custom Nodes'],
    image: '/api/placeholder/400/250',
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
    id: "5",
    title: 'Local DeepSeek LLM Deployment & Optimization',
    description: 'Set up and optimized DeepSeek LLM for local inference, exploring the capabilities of running large language models on consumer hardware. Built a simple API wrapper and experimented with various optimization techniques to maximize performance within GPU memory constraints.',
    technologies: ['DeepSeek-R1', 'Python', 'Ollama', 'FastAPI', 'CUDA', 'Transformers'],
    image: '/api/placeholder/400/250',
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
  }
];


export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "VP of Marketing",
    company: "TechFlow Solutions",
    content: "Alex is an exceptional data analyst who consistently delivers actionable insights that drive real business results. Their ability to translate complex data into clear, compelling narratives has been invaluable to our team.",
    avatar: "/images/testimonial-1.jpg",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Director of Product",
    company: "DataInsights Corp",
    content: "Working with Alex was a game-changer for our product team. Their analytical rigor and attention to detail helped us make data-driven decisions that improved our product metrics significantly.",
    avatar: "/images/testimonial-2.jpg",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "MetricFlow Analytics",
    content: "Alex has a rare combination of technical expertise and business acumen. They can dive deep into complex datasets and emerge with insights that directly impact our bottom line.",
    avatar: "/images/testimonial-3.jpg",
    rating: 5
  }
];

export const socialLinks = [
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { name: "GitHub", url: personalInfo.github, icon: "github" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" },
]; 