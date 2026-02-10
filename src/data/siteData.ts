export const personalInfo = {
  name: "Bishal K C",
  title: "MS Computer Science Researcher",
  tagline: "Software Engineer | Artificial Intelligence",
  email: "kcbisal1@gmail.com",
  phone: "(931) 644-9494",
  location: "Cookeville, Tennessee, USA",
  // bio: "Graduate Research Assistant at Tennessee Technological University, specializing in AI, Machine Learning, and Cybersecurity. Focused on Electric Vehicle Charging Station optimization using Genetic Algorithms and Federated Learning.",
  bio: "Hi, I’m Bishal K C. I’m a software engineer from Nepal 🇳🇵, currently based in the U.S. 🇺🇸, who enjoys building thoughtful, real-world software and keeping up with evolving tech. I’m especially curious about AI and how it can be applied in practical ways. When I’m not coding, you’ll usually find me trekking or hiking and exploring the outdoors.",
  avatarUrl: new URL("../images/profile.jpg", import.meta.url).href,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/bishal-kc-613001219/",
    github: "https://github.com/BishalChhetri",
    googleScholar:
      "https://scholar.google.com/citations?user=-7mwv94AAAAJ&hl=en",
    instagram: "https://www.instagram.com/_bishal.chhetri_",
    facebook: "https://www.facebook.com/bishal.kc.54379",
  },
};

export const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Tennessee Technological University",
    location: "Cookeville, TN",
    period: "Aug 2024 – May 2026",
    gpa: "4.0/4.0",
    institutionLogo: "/src/images/ttu_logo.png",
    // highlights: [
    //   "Research Assistant: Optimal placement of Electric Vehicle Chargers using Genetic Algorithms",
    //   "Treasurer of Graduate Student Computer Science Club",
    // ],
    // coursework: [
    //   "Machine Learning",
    //   "AI",
    //   "Federated Learning",
    //   "Internet Security",
    //   "Advanced Reverse Engineering",
    //   "Distributed Computing",
    // ],
  },
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    period: "Aug 2017 – Mar 2022",
    gpa: "3.57/4.0",
    institutionLogo: "/src/images/ku_logo.png",
    // highlights: [
    //   "Full-tuition scholarship recipient",
    //   "Organizer of IT Meet V 8.0 (biggest IT event in Nepal)",
    //   "Community Representative for Kathmandu University Computer Club",
    // ],
  },
];

export const experience = [
  {
    title: "Graduate Research Assistant",
    company: "Tennessee Technological University",
    location: "Cookeville, TN",
    period: "Aug 2024 – May 2026",
    companyLogo: "/src/images/ttu_logo.png",
    highlights: [
      "Developed a Python-based genetic algorithm for multi-criteria location optimization and predictive traffic modeling with ArcGIS Pro",
      "Won 1st prize at CEROC AI-Assisted Cybersecurity Competition by building an LSTM model (99%training accuracy) for drone data and XGBoost (95.25% accuracy) for power system data.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "BlackTech Pvt. Ltd.",
    companyUrl: "https://www.restrox.com/",
    location: "Pokhara, Nepal",
    period: "Dec 2022 – Jun 2024",
    companyLogo: "/src/images/blacktech_logo.jpg",
    highlights: [
      "Built a robust checkout system with discount handling, tax/shipping logic, and validation rules.",
      "Reduced website load time by 3 seconds through lazy loading, database query optimization, and API call reduction.",
      "Migrated and synchronized MongoDB databases ensuring data integrity and minimal downtime.",
      "Deployed applications on AWS EC2 with Docker, automated S3 backups, & implemented CI/CD pipelines via CircleCI.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company: "Business Pazes Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Jul 2022 – Oct 2022",
    companyLogo: "/src/images/bpazes_logo.jpg",
    highlights: [
      "Integrated Google and Apple OAuth for smooth and secure user sign-in, enhancing the onboarding experience.",
      "Developed scalable APIs using Sequelize ORM, improving system reliability and reducing platform downtime by 10%.",
    ],
  },
  {
    title: "Database Administrator Intern",
    company: "F1Soft International (FonePay)",
    companyUrl: "https://fonepay.com/",
    location: "Kathmandu, Nepal",
    period: "Jan 2022 – Apr 2022",
    companyLogo: "/src/images/fonepay_logo.png",
    highlights: [
      "Optimized database operations with scripts, stored procedures, and functions, ensuring data integrity and reducing SQL injection vulnerabilities by 30%.",
    ],
  },
];

export const projects = [
  {
    title: "Strategic Location Planning for EVCS Using Genetic Algorithm",
    description:
      "Combined Analytic Hierarchy Process (AHP) and Genetic Algorithm to optimize EVCS placement based on traffic, distance, infrastructure, road network, and operational costs.",
    fullDescription:
      "Combined Analytic Hierarchy Process (AHP) and Genetic Algorithm (GA) to optimize EVCS placement based on five key criteria: Traffic, Distance, Infrastructure Availability, Road Network, and Operational Costs. Applied Min-Max normalization and distance-based scaling to prevent clustering and ensure balanced distribution. The GeoGA framework iteratively evolved candidate solutions while respecting domain-specific constraints, optimizing cost and accessibility. Case study in rural Tennessee validated the framework, demonstrating efficient, well-distributed EVCS placements.",
    tags: [
      "Python",
      "Genetic Algorithm",
      "ArcGIS Pro",
      "AHP",
      "Optimization",
      "Multi-Criteria Decision Making",
    ],
    links: {
      paper: "https://doi.org/10.1007/s42979-026-04763-6",
    },
  },
  {
    title: "Anomaly Detection in EVCS Using Federated Learning",
    description:
      "Distributed data across multiple clients to simulate decentralized training, preserving privacy in IoT-enabled cyber-physical systems. Evaluated FedAvg and FedAvgM optimization approaches.",
    fullDescription:
      "Distributed data across multiple clients to simulate decentralized training, preserving privacy in IoT-enabled cyber-physical systems like EVCS, Smart Grids, and Connected Vehicles. Addressed system heterogeneity and non-IID data in federated learning; evaluated FedAvg and FedAvgM optimization approaches. FedAvgM consistently outperforms FedAvg under heterogeneous scenarios, ensuring robust convergence and high anomaly detection accuracy. Demonstrated FL as a privacy-preserving solution for anomaly detection in decentralized EVCS networks.",
    tags: [
      "Python",
      "Federated Learning",
      "PyTorch",
      "Flower",
      "FedAvg",
      "FedAvgM",
      "IoT Security",
      "Privacy-Preserving ML",
    ],
    links: {
      paper: "https://doi.org/10.1109/GCAIoT68269.2025.11275550",
    },
  },
  {
    title: "Bootcamp Management System",
    description:
      "Built a bootcamp application enabling users to create bootcamps, register for courses, and manage access with role-based authorization and OAuth sign-in.",
    fullDescription:
      "Built a bootcamp application enabling users to create bootcamps, register for courses, and manage access with role-based authorization (Admin, Publisher, User) and OAuth sign-in, ensuring a seamless user experience. Features include course management, user registration, and secure authentication.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
      "OAuth",
      "Role-Based Access Control",
    ],
    links: {
      github: "https://github.com/BishalChhetri/NextJS-Bootcamp-Frontend-2024",
    },
  },
  {
    title: "Game Stream – Live Streaming Platform",
    description:
      "Developed a live streaming platform with Clerk OAuth integration and OBS Studio support, enabling users to broadcast, participate in live chat, follow, and manage interactions.",
    fullDescription:
      "Developed a live streaming platform with Clerk OAuth integration and OBS Studio support, enabling users to broadcast, participate in live chat, follow, and manage interactions such as blocking other users. Built with modern technologies for real-time communication and video streaming.",
    tags: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "MongoDB",
      "Clerk OAuth",
      "OBS Studio",
      "WebRTC",
      "Real-time Chat",
    ],
    links: {
      live: "https://game-stream-2024.vercel.app",
      github: "https://github.com/BishalChhetri/Game-Stream-2024",
    },
  },
];

export const publications = [
  {
    title:
      "Strategic Location Planning for Electric Vehicle Charging Stations Using AHP-Informed Genetic Algorithm Optimization",
    authors: "K C, Bishal, Mazen Hussein",
    journal: "SN Computer Science 7, 169 (2026)",
    doi: "https://doi.org/10.1007/s42979-026-04763-6",
    date: "March 2026",
  },
  {
    title:
      "Ensemble-based Intrusion Detection System for Electric Vehicles Charging Stations using Machine Learning",
    authors: "K C, Bishal, Kshitiz Aryal, Pawan Thapa, Sansrit Paudel",
    journal: "Journal of Applied Artificial Intelligence, 6(2), 1–14",
    doi: "https://doi.org/10.48185/jaai.v6i2.1461",
    date: "December 2025",
  },
  {
    title:
      "Anomaly Detection in Electric Vehicle Charging Stations Using Federated Learning",
    authors: "K C, Bishal, Amr Hilal, Pawan Thapa",
    journal:
      "IEEE Global Conference on Artificial Intelligence & Internet of Things (GCAIoT) 2025",
    doi: "https://doi.org/10.1109/GCAIoT68269.2025.11275550",
    // arxiv: "https://www.arxiv.org/pdf/2509.18126",
    date: "November 2025",
  },
  {
    title:
      "Generative adversarial networks in anomaly detection and malware detection: a comprehensive survey",
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
  "Software Engineering",
  "Artificial Intelligence",
  "AI for Security",
  "Security of AI",
  "Large Language Models (LLMs)",
  // "LLM Security",
  // "Optimization Techniques",
  "Internet of Things (IoTs)",
  "Computer Vision",
];

export const blogPosts = [
  {
    slug: "federated-learning-evcs",
    title: "The Growing Need for Privacy in Connected Devices",
    excerpt:
      "From smart homes to connected cars, our devices collect massive amounts of personal data. Understanding how privacy-preserving technologies are becoming essential in modern IoT ecosystems.",
    date: "2025-11-15",
    readTime: "8 min read",
    tags: ["Privacy", "IoT", "Technology", "Cybersecurity"],
  },
  {
    slug: "genetic-algorithms-optimization",
    title: "How Data-Driven Decisions Shape Modern Infrastructure",
    excerpt:
      "Urban planning has evolved beyond intuition. Exploring how multiple factors—cost, accessibility, environmental impact—come together to guide smarter infrastructure development.",
    date: "2025-10-20",
    readTime: "6 min read",
    tags: ["Data Science", "Urban Planning", "Decision Making"],
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
    coordinates: [-85.505, 35.9748] as [number, number],
    description: "Current Location - Tennessee Tech University",
  },
];
