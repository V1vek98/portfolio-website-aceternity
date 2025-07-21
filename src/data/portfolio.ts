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
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "analytics" | "visualization" | "ml" | "reporting";
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
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
  name: "Alex DataMaster",
  title: "Senior Data Analyst",
  location: "San Francisco, CA",
  email: "alex.datamaster@email.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/alexdatamaster",
  github: "https://github.com/alexdatamaster",
  bio: "Passionate Senior Data Analyst with 7+ years of experience transforming complex datasets into actionable business insights. Specialized in predictive analytics, data visualization, and statistical modeling with expertise in Python, SQL, and advanced analytics tools.",
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
  { name: "Power BI", level: 87, category: "tools" },
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
    title: "Senior Data Analyst",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    startDate: "2021-03",
    endDate: "Present",
    description: [
      "Lead a team of 4 data analysts in developing comprehensive analytics solutions for Fortune 500 clients",
      "Design and implement advanced statistical models to predict customer behavior and optimize business processes",
      "Create executive-level dashboards and reports that drive strategic decision-making across organizations"
    ],
    technologies: ["Python", "SQL", "Tableau", "AWS", "Apache Spark", "Machine Learning"],
    achievements: [
      "Increased client revenue by 23% through predictive analytics implementation",
      "Reduced data processing time by 65% through pipeline optimization",
      "Led successful migration of 5 clients to cloud-based analytics platform"
    ]
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "DataInsights Corp",
    location: "San Francisco, CA",
    startDate: "2019-06",
    endDate: "2021-03",
    description: [
      "Analyzed large datasets to identify trends and patterns for e-commerce and retail clients",
      "Developed automated reporting systems that reduced manual work by 80%",
      "Collaborated with product teams to implement data-driven feature improvements"
    ],
    technologies: ["Python", "SQL", "Power BI", "Excel", "Google Analytics"],
    achievements: [
      "Built predictive model that improved customer retention by 18%",
      "Created real-time dashboard monitoring 50+ KPIs",
      "Optimized marketing campaigns resulting in 31% cost reduction"
    ]
  },
  {
    id: "3",
    title: "Junior Data Analyst",
    company: "MetricFlow Analytics",
    location: "Berkeley, CA",
    startDate: "2017-08",
    endDate: "2019-06",
    description: [
      "Performed statistical analysis on customer data to support marketing initiatives",
      "Created data visualizations and reports for internal stakeholders",
      "Assisted in the development of data collection and validation processes"
    ],
    technologies: ["SQL", "Excel", "R", "Tableau", "Python"],
    achievements: [
      "Identified key customer segments leading to 15% increase in targeted campaigns",
      "Developed data quality framework adopted company-wide",
      "Reduced report generation time from 4 hours to 30 minutes"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Customer Lifetime Value Prediction",
    description: "ML model predicting CLV for e-commerce platform with 89% accuracy",
    longDescription: "Developed a comprehensive machine learning pipeline to predict Customer Lifetime Value for a major e-commerce platform. The model incorporates customer behavior data, transaction history, and demographic information to provide accurate CLV predictions that drive marketing budget allocation and customer segmentation strategies.",
    image: "/images/clv-project.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Tableau"],
    demoUrl: "https://clv-demo.example.com",
    githubUrl: "https://github.com/alexdatamaster/clv-prediction",
    category: "ml",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "89%" },
      { label: "ROI Increase", value: "34%" },
      { label: "Customers Analyzed", value: "2.5M" }
    ]
  },
  {
    id: "2",
    title: "Real-time Sales Dashboard",
    description: "Interactive Tableau dashboard providing real-time insights into sales performance",
    longDescription: "Created a comprehensive real-time sales dashboard that aggregates data from multiple sources to provide instant insights into sales performance, regional trends, and product analytics. The dashboard supports drill-down capabilities and automated alerting for key performance indicators.",
    image: "/images/sales-dashboard.jpg",
    technologies: ["Tableau", "SQL", "Python", "AWS", "Snowflake"],
    demoUrl: "https://sales-dashboard.example.com",
    category: "visualization",
    featured: true,
    metrics: [
      { label: "Data Sources", value: "12" },
      { label: "Daily Users", value: "250+" },
      { label: "Update Frequency", value: "Real-time" }
    ]
  },
  {
    id: "3",
    title: "Marketing Attribution Analysis",
    description: "Multi-touch attribution model to optimize marketing spend across channels",
    longDescription: "Implemented a sophisticated multi-touch attribution model that tracks customer journeys across various marketing channels. The analysis helped optimize marketing budget allocation and improved understanding of channel effectiveness, leading to significant improvements in marketing ROI.",
    image: "/images/attribution-analysis.jpg",
    technologies: ["Python", "SQL", "Google Analytics", "Power BI", "R"],
    githubUrl: "https://github.com/alexdatamaster/attribution-model",
    category: "analytics",
    featured: true,
    metrics: [
      { label: "Channels Analyzed", value: "15" },
      { label: "Attribution Accuracy", value: "92%" },
      { label: "Marketing ROI Improvement", value: "28%" }
    ]
  },
  {
    id: "4",
    title: "A/B Testing Framework",
    description: "Automated framework for designing and analyzing A/B tests",
    longDescription: "Built a comprehensive A/B testing framework that automates the entire testing lifecycle from experimental design to statistical analysis. The framework includes power analysis, automated test monitoring, and detailed reporting capabilities that have been adopted across multiple teams.",
    image: "/images/ab-testing.jpg",
    technologies: ["Python", "SQL", "Jupyter", "Plotly", "Statistical Analysis"],
    githubUrl: "https://github.com/alexdatamaster/ab-testing-framework",
    category: "analytics",
    featured: false,
    metrics: [
      { label: "Tests Conducted", value: "150+" },
      { label: "Statistical Power", value: "80%" },
      { label: "False Discovery Rate", value: "<5%" }
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

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { name: "GitHub", url: personalInfo.github, icon: "github" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" },
]; 