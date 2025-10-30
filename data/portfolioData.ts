import { Brain, Briefcase, Camera, Code, Palette, Users } from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Sania Fatimah Az Zahrah",
  title: "Aspiring Business Professional | Creative Content Creator",
  description:
    "Reliable and detail-oriented professional with experience in administrative tasks, content creation, and digital media. Passionate about combining creativity with technology to deliver impactful solutions.",
  profileImage: "/me.png",
  email: "saniafatimah@example.com",
  github: "https://github.com/saniafatimah",
  linkedin: "https://linkedin.com/in/saniafatimah",
};

// Quick Stats for Home Section
export const quickStats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "20+",
    label: "Happy Clients",
  },
];

// About Me Data
export const aboutMe = {
  paragraphs: [
    "I am Zahrah, an Undergraduate Computer Science student majoring in Computer System at Sriwijaya University. I have a strong passion for creativity, especially in content creation, including videography, photography, video editing, and graphic design.",
    "As a highly committed fast learner, I quickly adapt to new trends and technologies in digital content. I enjoy crafting visually appealing and aesthetic content that engages audiences and tells compelling stories.",
    "I'm confident in working both independently and collaboratively in a team environment. With a keen eye for detail and a drive to deliver high-quality work, I strive to create impactful content that resonates with people.",
  ],
  services: [
    {
      icon: Brain,
      title: "Data Analysis",
      description: "Analyzing data to provide business insights",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description:
        "Creating engaging visual content for social media and marketing",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing visual identities and marketing materials",
    },
  ],
};

// Skills Data
export const skills = [
  "Canva",
  "Python",
  "Data Analysis",
  "Data Visualization",
  "Microsoft Excel",
  "Leadership",
  "Analytical Thinking",
  "Communication & Public Speaking",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Adaptability",
  "Fast Learner",
  "Time Management",
  "Attention to Detail",
];

// Education Data
export const educations = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universitas Sriwijaya",
    period: "Aug 2021 - Jul 2025",
    gpa: "3.98/4.00",
    achievements: [
      "Student Researcher Intern at Intelligent System Research Group, focusing on ECG signal analysis with Machine Learning",
      "Bangkit Academy Graduate (Machine Learning track)",
      "Graduated Cum Laude",
    ],
  },
  {
    degree: "Senior High School",
    institution: "Islamic Senior High School Number 3 Palembang",
    period: "2017 - 2020",
    achievements: [
      "Mastered english conversation level in Global English Language Center",
      "Mastered general conversation level in Global English Language Center",
      "Participants in a story telling contest organized by Insan Cendekia OKI Islamic Senior High School",
      "Second general champion of the 2nd-semester school level",
      "First general champion of the 1st-semester school level",
    ],
  },
];

// Experience Data
export const experiences = [
  {
    title: "Winner (Gadis)",
    company: "Bujang Gadis Fasilkom Universitas Sriwijaya 2024",
    period: "Oct 2023 - Sep 2024",
    location: "Universitas Sriwijaya",
    type: "Organization",
    image: "/images/experiences/Grand Final Night.jpeg",
    achievements: [
      "Selected as the faculty’s cultural and leadership ambassador, demonstrating excellence in public speaking, self-branding, and teamwork.",
      "Represented students in academic and non-academic activities, serving as a role model and fostering collaboration within the faculty.",
      "Held leadership roles including Head of Public Relations Division and Head of Event Division in major faculty events (“Berkah” Ramadan Event, Musyawarah Besar IBGF Unsri).",
      "Successfully secured multiple sponsorships by building strong external partnerships, contributing to the financial sustainability of events.",
      "Led communication and promotional strategies, enhancing event visibility and stakeholder engagement.",
      "Directed event execution with 70+ participants, collaborating across divisions to ensure smooth and impactful programs.",
    ],
  },
  {
    title: "Web Development Member",
    company: "Google Developer Student Club in Universitas Sriwijaya",
    period: "Nov 2021 - Sep 2022",
    location: "Universitas Sriwijaya",
    type: "Organization",
    image: "/experience/studio.jpg",
    achievements: [
      "Collaborated in building the official GDSC Unsri website using Tailwind CSS.",
      "Participated in workshops, study jams, and coding sessions focused on front-end and back-end development.",
      "Served as Timekeeper (Start Your Machine Learning, Feb 2022) and MC (Building Web App Event, June 2022).",
    ],
    skills: ["Photography", "Event Management", "Customer Service"],
  },
];

// Work Experience Data
export const workExperiences = [
  {
    title: "Finance & Operational Supervisor",
    company: "Kino Coffee",
    period: "Mar 2025 - Present",
    location: "Palembang",
    image: "/work/dataanalyst.jpg",

    responsibilities: [
      "Supervised daily operations, led a team of 7 staff, achieving 95% customer satisfaction consistently.",
      "Boosted monthly revenue by 319%, turning –1.46M IDR loss into +3.20M IDR profit within 5 months via cost control and upselling.",
      "Prepared detailed P&L, balance sheets, and cash flow reports, enabling management to make data-driven decisions that optimized costs by 10%.",
      "Oversaw payroll, tax filings, and regulatory compliance, maintaining 100% on-time processing with zero compliance issues.",
      "Managed full-cycle inventory, optimized purchasing, and developed pricing models, enhancing profit margins by 15%.",
      "Coordinated financial planning and maintained supplier/vendor communication, reducing procurement delays by 20%",
      "Co-developed and launched a new signature menu item, “Cheesecuit”, contributing to 20–25% increase in monthly sales.",
    ],
  },
  {
    title: "Supervisor Assistant",
    company: "Kino Coffee",
    period: "Sep 2024 - Feb 2024",
    location: "Palembang",
    image: "/work/research.jpg",
    responsibilities: [
      "Assisted in managing daily operations, including staff scheduling, front-line customer service, and adherence to SOPs.",
      "Supported preparation of daily reports and coordinated operational logistics to ensure smooth business flow.",
    ],
  },
  {
    title: "Student Researcher Intern",
    company: "Intelligent System Research Group (ISysRG)",
    period: "Jun 2024 - Jun 2025",
    location: "Palembang",
    image: "/work/research.jpg",
    responsibilities: [
      "Conducted research on time-frequency domain feature extraction for myocardial infarction detection using Python and ML models.",
      "Developed a pipeline achieving high classification accuracy, supporting academic publication readiness.",
      "Strengthened technical reporting and collaborative research skills in a team environment.",
    ],
  },
  {
    title: "Machine Learning Track Graduate",
    company: "Bangkit Academy",
    period: "Feb 2024 - Jun 2024",
    location: "Remote",
    image: "/work/research.jpg",
    responsibilities: [
      "Completed over 900 hours of intensive training in Python, Data Analysis, Machine Learning, TensorFlow, and Model Deployment.",
      "Maintained a high academic performance with an average score of 90.77 / 100.00.",
      "Capstone Project – Tancap (Tangan Berucap): Developed a real- time mobile application that translates sign language gestures into speech/text using computer vision and machine learning.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "PT Pupuk Sriwidjaja",
    period: "Jun 2023 - Jul 2023",
    location: "Palembang",
    image: "/work/research.jpg",
    responsibilities: [
      "Led a mini-development team to design a license plate recognition system using Python and OpenCV for gate entry automation.",
      "Integrated deep learning-based optical character recognition (OCR), achieving over 86% accuracy on real-world plate images.",
      "Delivered comprehensive documentation and presented the project to IT leadership for future development consideration.",
    ],
  },
];

// Certifications Data
export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "March 2023",
    credentialId: "ABC123XYZ",
    image: "/certifications/google-data.jpg",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
    verified: true,
  },
  {
    name: "Adobe Certified Expert - Photoshop",
    issuer: "Adobe",
    date: "January 2023",
    credentialId: "ACE789DEF",
    image: "/certifications/adobe-photoshop.jpg",
    skills: ["Photo Editing", "Digital Art", "Graphic Design"],
    verified: true,
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "November 2022",
    credentialId: "ML456GHI",
    image: "/certifications/ml-stanford.jpg",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    verified: true,
  },
  {
    name: "Digital Marketing Fundamentals",
    issuer: "Google Digital Garage",
    date: "September 2022",
    credentialId: "DM789JKL",
    image: "/certifications/digital-marketing.jpg",
    skills: ["Digital Marketing", "SEO", "Social Media"],
    verified: true,
  },
  {
    name: "Professional Photography Certificate",
    issuer: "New York Institute of Photography",
    date: "June 2022",
    credentialId: "NYIP321MNO",
    image: "/certifications/photography.jpg",
    skills: ["Photography", "Composition", "Lighting"],
    verified: true,
  },
];

// Projects Data
export const projects = [
  {
    title: "AI-Powered Content Generator",
    category: "Machine Learning",
    description:
      "A web application that uses GPT models to generate creative content for social media posts, blogs, and marketing materials.",
    image: "/projects/ai-content.jpg",
    technologies: ["Python", "OpenAI API", "React", "Node.js", "MongoDB"],
    features: [
      "Multiple content types generation",
      "Custom tone and style settings",
      "Content optimization suggestions",
      "Social media scheduling integration",
    ],
    github: "https://github.com/username/ai-content-generator",
    demo: "https://ai-content-demo.vercel.app",
    status: "Completed",
  },
  {
    title: "Visual Brand Identity System",
    category: "Design",
    description:
      "Complete brand identity design for a local coffee shop including logo, color palette, typography, and marketing materials.",
    image: "/projects/brand-identity.jpg",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
    features: [
      "Logo design and variations",
      "Brand guidelines document",
      "Marketing collateral design",
      "Digital and print assets",
    ],
    behance: "https://behance.net/gallery/brand-identity",
    status: "Completed",
  },
  {
    title: "Wedding Photography Portfolio",
    category: "Photography",
    description:
      "Curated collection of wedding photography showcasing various styles from intimate ceremonies to grand celebrations.",
    image: "/projects/wedding-portfolio.jpg",
    technologies: ["Professional Camera Equipment", "Lightroom", "Photoshop"],
    features: [
      "50+ wedding ceremonies documented",
      "Multiple photography styles",
      "Professional editing workflow",
      "Client gallery system",
    ],
    website: "https://wedding-portfolio.com",
    status: "Ongoing",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    category: "Data Analytics",
    description:
      "Interactive dashboard for analyzing e-commerce performance metrics with real-time data visualization and insights.",
    image: "/projects/analytics-dashboard.jpg",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly", "SQL"],
    features: [
      "Real-time sales tracking",
      "Customer behavior analysis",
      "Inventory management insights",
      "Predictive sales forecasting",
    ],
    github: "https://github.com/username/ecommerce-dashboard",
    demo: "https://analytics-dashboard-demo.streamlit.app",
    status: "Completed",
  },
  {
    title: "Social Media Content Calendar",
    category: "Product Design",
    description:
      "A comprehensive tool for planning, creating, and scheduling social media content across multiple platforms.",
    image: "/projects/content-calendar.jpg",
    technologies: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    features: [
      "Multi-platform scheduling",
      "Content creation tools",
      "Analytics and insights",
      "Team collaboration features",
    ],
    github: "https://github.com/username/content-calendar",
    demo: "https://content-calendar.vercel.app",
    status: "In Development",
  },
  {
    title: "Photography Workshop Series",
    category: "Education",
    description:
      "Educational content series teaching photography fundamentals through online workshops and tutorials.",
    image: "/projects/photo-workshop.jpg",
    technologies: ["Video Production", "Online Learning Platforms"],
    features: [
      "10+ educational modules",
      "Hands-on assignments",
      "Community feedback system",
      "Certificate of completion",
    ],
    website: "https://photography-workshops.com",
    status: "Completed",
  },
];

// Project Categories for filtering
export const projectCategories = [
  "All",
  "Machine Learning",
  "Design",
  "Photography",
  "Data Analytics",
  "Product Design",
  "Education",
];

// Navigation sections
export const navigationSections = [
  "home",
  "about",
  "skills",
  "education",
  "experience",
  "work",
  "certifications",
  "projects",
];
