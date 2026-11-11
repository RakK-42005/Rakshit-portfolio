export const profile = {
  name: "Rakshit Kapoor",
  role: "Software Developer",
  tagline: "I build thoughtful digital experiences and practical software solutions.",
  location: "VIT Vellore, India",
  email: "kapoor.rakshit204@gmail.com",
  phone: "+91 7507395107",
  github: "https://github.com/RakK-42005",
  githubUsername: "RakK-42005",
  linkedin: "https://www.linkedin.com/in/rakshit-kapoor-70b555336/",
  resume: "/Rakshit_Kapoor_Resume_One_Page.pdf"
};

export const skillGroups = [
  { title: "Programming", items: ["Java", "C++", "Python", "SQL", "JavaScript (ES6+)"] },
  { title: "Web development", items: ["Node.js", "Express.js", "ReactJS", "HTML5", "CSS3", "REST APIs"] },
  { title: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn", "NLP", "PyTorch", "OpenCV", "Model Evaluation"] },
  { title: "Security & tools", items: ["Wireshark", "Kali Linux", "Autopsy", "Git", "GitHub", "VS Code", "MySQL", "MongoDB Atlas"] },
  { title: "Core concepts", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Information Security", "Cryptography"] }
];

export const projects = [
  {
    id: "retinasight",
    number: "01",
    name: "RetinaSight",
    category: "AI / Deep Learning",
    short: "Safety-aware diabetic retinopathy screening and diagnosis support using deep learning.",
    description: "An end-to-end deep learning system for diabetic retinopathy screening. The project combines severity grading with input-safety checks and visual explanations to support more reliable predictions.",
    highlights: [
      "EfficientNet-B3 backbone with a paired regression-classification head.",
      "Reported QWK score of 0.9334 and 98.64% referable-disease sensitivity on the APTOS 2019 benchmark.",
      "Dual safety gates for retinal-image validity and image quality.",
      "Grad-CAM visual overlays, reliability reporting and a three-tier REST API architecture."
    ],
    stack: ["Python", "PyTorch", "EfficientNet-B3", "ResNet-18", "Grad-CAM", "FastAPI", "Node.js", "MongoDB"],
    status: "Conference paper applied"
  },
  {
    id: "lead-management",
    number: "02",
    name: "Lead & Contact Management System",
    category: "Full-stack development",
    short: "A lead tracking platform designed to help offline businesses manage customer inquiries.",
    description: "A modular full-stack application focused on organizing customer inquiries and supporting a clearer lead-management workflow for offline businesses.",
    highlights: [
      "Developed full-stack modules for customer inquiry tracking.",
      "Designed RESTful APIs and database schemas.",
      "Worked across client-server integration and modular API structure.",
      "Used Git and GitHub for collaborative version-control workflows."
    ],
    stack: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "MySQL", "Git"],
    status: "Internship project"
  },
  {
    id: "anonymous-help",
    number: "03",
    name: "Anonymous Help Request & Incident Platform",
    category: "Backend / Web security",
    short: "A secure platform for anonymous incident reporting and request submission.",
    description: "A full-stack platform concept that allows users to submit anonymous help requests or incident reports and follow their status through a defined request lifecycle.",
    highlights: [
      "Architected a full-stack secure request-submission platform.",
      "Designed REST APIs for request lifecycle management.",
      "Implemented real-time status tracking for submitted requests."
    ],
    stack: ["Node.js", "Express.js", "REST APIs", "JavaScript", "Web Security"],
    status: "Project"
  },
  {
    id: "currency-detection",
    number: "04",
    name: "Currency Note Detection Web Interface",
    category: "Computer vision / Web",
    short: "A responsive image-upload interface connected to a currency classification API.",
    description: "A web interface that lets users upload currency-note images and sends them to a classification API for verification. The interface focuses on a simple and accessible user flow.",
    highlights: [
      "Built a responsive image-upload experience.",
      "Integrated a classification API for real-time currency verification.",
      "Connected the frontend to an externally provided image-classification workflow."
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "API Integration", "Computer Vision"],
    status: "Project"
  },
  {
    id: "lecture-notes",
    number: "05",
    name: "Lecture Voice-to-Notes Generator",
    category: "Speech / Productivity",
    short: "An application concept that converts lecture audio into structured notes.",
    description: "An automated application designed to transform lecture audio into concise, structured Markdown notes using speech-recognition capabilities.",
    highlights: [
      "Conceptualized and developed an audio-to-notes workflow.",
      "Used speech-recognition APIs and Web Audio capabilities.",
      "Organized generated content into readable Markdown notes."
    ],
    stack: ["JavaScript", "Speech Recognition APIs", "Web Audio", "Markdown"],
    status: "Project"
  }
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Impinge Solutions",
    date: "May – July",
    details: [
      "Developed full-stack modules for a customer inquiry tracking and lead-management platform for offline businesses.",
      "Built RESTful APIs and database schemas using JavaScript, Node.js, Express.js and MySQL.",
      "Collaborated through Git/GitHub workflows and modular API integration."
    ]
  },
  {
    role: "Conversational AI Intern",
    company: "VOIS for Tech University Engagement Program",
    date: "Internship",
    details: [
      "Worked on conversational data-analysis pipelines using large language models to analyze text interactions and extract insights."
    ]
  },
  {
    role: "AI & Cloud Technology Intern",
    company: "AICTE Virtual Internship Program",
    date: "Internship program",
    details: [
      "Completed practical learning activities covering AI fundamentals, machine-learning workflows and cloud architecture."
    ]
  }
];
