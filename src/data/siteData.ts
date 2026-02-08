export const personalInfo = {
  name: "Bishal K C",
  title: "MS Computer Science Researcher",
  tagline: "Researcher & Full Stack Developer",
  email: "kcbisal1@gmail.com",
  phone: "(931) 644-9494",
  location: "Tennessee, USA",
  bio: "Graduate Research Assistant at Tennessee Technological University, specializing in AI, Machine Learning, and Cybersecurity. Focused on Electric Vehicle Charging Station optimization using Genetic Algorithms and Federated Learning.",
  avatarUrl: "/placeholder.svg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/bishal-kc-613001219/",
    github: "https://github.com/BishalChhetri",
    googleScholar: "https://scholar.google.com/citations?user=-7mwv94AAAAJ&hl=en",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Tennessee Technological University",
    location: "Cookeville, TN",
    period: "Aug 2024 – May 2026",
    gpa: "4.0/4.0",
    highlights: [
      "Research Assistant: Optimal placement of Electric Vehicle Chargers using Genetic Algorithms",
      "Treasurer of Graduate Student Computer Science Club",
    ],
    coursework: ["Machine Learning", "AI", "Federated Learning", "Internet Security", "Advanced Reverse Engineering", "Distributed Computing"],
  },
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    period: "Aug 2017 – Mar 2022",
    gpa: "3.57/4.0",
    highlights: [
      "Full-tuition scholarship recipient",
      "Organizer of IT Meet V 8.0 (biggest IT event in Nepal)",
      "Community Representative for Kathmandu University Computer Club",
    ],
  },
];

export const experience = [
  {
    title: "Graduate Research Assistant",
    company: "Tennessee Technological University",
    location: "Cookeville, TN",
    period: "Aug 2024 – May 2026",
    highlights: [
      "Developed Python-based genetic algorithm for multi-criteria location optimization with ArcGIS Pro",
      "Won 1st prize at CEROC AI-Assisted Cybersecurity Competition (LSTM model with 99% accuracy)",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "BlackTech Pvt. Ltd.",
    companyUrl: "https://www.restrox.com/",
    location: "Pokhara, Nepal",
    period: "Dec 2022 – Jun 2024",
    highlights: [
      "Built robust checkout system with discount handling, tax/shipping logic",
      "Reduced website load time by 3 seconds through optimization",
      "Deployed applications on AWS EC2 with Docker and CI/CD pipelines",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company: "Business Pazes Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Jul 2022 – Oct 2022",
    highlights: [
      "Integrated Google and Apple OAuth for secure user authentication",
      "Developed scalable APIs using Sequelize ORM, reducing downtime by 10%",
    ],
  },
  {
    title: "Database Administrator Intern",
    company: "F1Soft International (FonePay)",
    companyUrl: "https://fonepay.com/",
    location: "Kathmandu, Nepal",
    period: "Jan 2022 – Apr 2022",
    highlights: [
      "Optimized database operations with scripts and stored procedures",
      "Reduced SQL injection vulnerabilities by 30%",
    ],
  },
];

export const projects = [
  {
    title: "Anomaly Detection in EVCS Using Federated Learning",
    description: "Distributed data across multiple clients to simulate decentralized training, preserving privacy in IoT-enabled cyber-physical systems. Evaluated FedAvg and FedAvgM optimization approaches.",
    tags: ["Python", "Federated Learning", "PyTorch", "IoT"],
    links: {
      paper: "https://doi.org/10.1109/GCAIoT68269.2025.11275550",
    },
  },
  {
    title: "Strategic EVCS Location Planning Using GA",
    description: "Combined AHP and Genetic Algorithm to optimize EVCS placement based on traffic, distance, infrastructure, and operational costs. Case study validated in rural Tennessee.",
    tags: ["Python", "Genetic Algorithm", "ArcGIS", "Optimization"],
    links: {
      paper: "https://doi.org/10.1007/s42979-026-04763-6",
    },
  },
  {
    title: "Ensemble-based IDS for EVCS",
    description: "Developed stacked ensemble IDS integrating KNN, Logistic Regression, SVM, Decision Tree, and CNN models for improved detection accuracy in EVCS networks.",
    tags: ["Python", "Machine Learning", "Cybersecurity", "CNN"],
    links: {
      paper: "https://doi.org/10.48185/jaai.v6i2.1461",
    },
  },
];

export const publications = [
  {
    title: "Strategic Location Planning for Electric Vehicle Charging Stations Using AHP-Informed Genetic Algorithm Optimization",
    authors: "K C, Bishal, Mazen Hussein",
    journal: "SN Computer Science 7, 169 (2026)",
    doi: "https://doi.org/10.1007/s42979-026-04763-6",
    date: "March 2026",
  },
  {
    title: "Ensemble-based Intrusion Detection System for Electric Vehicles Charging Stations using Machine Learning",
    authors: "K C, Bishal, Kshitiz Aryal, Pawan Thapa, Sansrit Paudel",
    journal: "Journal of Applied Artificial Intelligence, 6(2), 1–14",
    doi: "https://doi.org/10.48185/jaai.v6i2.1461",
    date: "December 2025",
  },
  {
    title: "Anomaly Detection in Electric Vehicle Charging Stations Using Federated Learning",
    authors: "K C, Bishal, Amr Hilal, Pawan Thapa",
    journal: "IEEE Global Conference on Artificial Intelligence & Internet of Things (GCAIoT) 2025",
    doi: "https://doi.org/10.1109/GCAIoT68269.2025.11275550",
    arxiv: "https://www.arxiv.org/pdf/2509.18126",
    date: "November 2025",
  },
  {
    title: "Generative adversarial networks in anomaly detection and malware detection: a comprehensive survey",
    authors: "K C, Bishal, Shushant Sapkota, Ashish Adhikari",
    journal: "Advances in Artificial Intelligence Research 4.1 (2024): 18-35",
    doi: "https://doi.org/10.54569/aair.1442665",
    date: "August 2024",
  },
];

export const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    period: "Sep 2023 – Dec 2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/VYCNJ96HFZTY",
  },
  {
    title: "Operating Systems: Overview, Administration, and Security",
    issuer: "Coursera",
    period: "Oct 2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/KKTJ7HN67P4G",
  },
];

export const skills = {
  machineLearning: {
    title: "Machine Learning / Deep Learning",
    items: [
      "CNN, GAN, Autoencoders, VAE, LSTM, Federated Learning, LLMs",
      "NumPy, Pandas, Keras, Scikit-learn, PyTorch, TensorFlow, XGBoost",
      "Computer Vision, NLP, Semantic Segmentation",
    ],
  },
  softwareDev: {
    title: "Software Development",
    items: [
      "Python, TypeScript, Node.js, SQL, REST APIs, NestJS",
      "React, Next.js, Tailwind CSS",
      "AWS (EC2, S3, Route53), Docker, CircleCI",
    ],
  },
  dataAnalysis: {
    title: "Data Analysis / Visualization",
    items: [
      "MySQL, Oracle, PostgreSQL, MongoDB, Shell Scripting",
      "Matplotlib, Seaborn, Graphviz",
      "Tableau, Power BI",
    ],
  },
};

export const researchInterests = [
  "Artificial Intelligence",
  "AI for Security",
  "Security of AI",
  "Software Engineering",
  "Large Language Models (LLMs)",
  "LLM Security",
  "Optimization Techniques",
  "Internet of Things (IoTs)",
  "Computer Vision",
];

export const blogPosts = [
  {
    slug: "federated-learning-evcs",
    title: "Understanding Federated Learning for EV Charging Stations",
    excerpt: "A deep dive into how federated learning can preserve privacy while detecting anomalies in distributed EV charging infrastructure.",
    date: "2025-11-15",
    readTime: "8 min read",
    tags: ["Federated Learning", "IoT", "Privacy"],
  },
  {
    slug: "genetic-algorithms-optimization",
    title: "Genetic Algorithms for Location Optimization",
    excerpt: "Exploring how genetic algorithms can solve complex multi-criteria optimization problems in infrastructure planning.",
    date: "2025-10-20",
    readTime: "6 min read",
    tags: ["Optimization", "AI", "Genetic Algorithms"],
  },
];

export const mapLocations = [
  {
    name: "Pokhara, Nepal",
    coordinates: [83.9856, 28.2096] as [number, number],
    description: "Hometown & Previous Work Location",
  },
  {
    name: "Tennessee, USA",
    coordinates: [-85.5050, 35.9748] as [number, number],
    description: "Current Location - Tennessee Tech University",
  },
];
