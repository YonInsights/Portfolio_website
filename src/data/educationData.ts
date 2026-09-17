import type { EducationItem, CertificationItem } from "../types";

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BSc in Civil Engineering",
    institution: "University of Gondar",
    field: "Civil & Transportation Infrastructure Engineering",
    location: "Gondar, Ethiopia",
    status: "Graduated (2017 – 2022)",
    details: [
      "Rigorous 5-year engineering curriculum focused on Highway Geometric Design, Transportation Engineering, Soil Mechanics & Foundation Engineering, Hydraulics, and Construction Management.",
      "Graduation Thesis & Capstone Project centered on Highway Route Geometric Alignment, Pavement Design, and BOQ Quantity Takeoff adhering to ERA/AASHTO standards."
    ],
    coursework: [
      "Highway Engineering I & II",
      "Transportation Planning & Traffic Engineering",
      "Soil Mechanics & Geotechnical Engineering",
      "Hydraulics & Water Resources Engineering",
      "Surveying & Geomatics Engineering",
      "Reinforced Concrete Structures",
      "Construction Management & Cost Estimation"
    ]
  },
  {
    id: "edu-2",
    degree: "MSc in Data Science and Information Systems",
    institution: "Osiri University",
    field: "Data Science, Machine Learning & Information Systems",
    location: "Lincoln, Nebraska, United States",
    status: "Conferred (2024 – 2025)",
    details: [
      "Advanced postgraduate curriculum combining Statistical Learning, Machine Learning Engineering, Big Data Analytics, and Enterprise Information Architecture.",
      "Applied research and engineering projects focusing on predictive infrastructure modeling, intelligent transport systems, and AI-driven data automation."
    ],
    coursework: [
      "Applied Machine Learning & Statistical Inference",
      "Data Engineering & Cloud Information Systems",
      "Natural Language Processing & AI Agents",
      "Big Data Analytics & SQL Modeling",
      "Predictive Analytics & Time Series"
    ]
  },
  {
    id: "edu-3",
    degree: "Master of Art in Project Management (MAPM)",
    institution: "American College of Technology (ACT)",
    field: "Infrastructure & Project Management",
    location: "Addis Ababa, Ethiopia",
    status: "Completed (2022 – 2025)",
    details: [
      "Specialized management program developing leadership in complex civil works, agile project execution, procurement strategies, and financial risk governance.",
      "Applied project management methodologies to infrastructure corridor delivery, schedule optimization, and stakeholder management."
    ],
    coursework: [
      "Project Initiation, Planning & Scheduling",
      "Construction Cost Estimating & Financial Control",
      "Risk Governance & Contract Administration",
      "Agile & Hybrid Project Methodologies",
      "Strategic Leadership in Engineering Works"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Google Project Management Professional Certificate",
    issuer: "Google / Coursera (6-Course Specialization)",
    date: "Sep 2023",
    credentialId: "MRH6SGRNT6K5",
    skills: [
      "Project Initiation & Planning",
      "Agile Project Management",
      "Risk Management",
      "Execution Governance",
      "Procurement"
    ],
    status: "Verified"
  },
  {
    id: "cert-2",
    name: "Construction Management Specialization",
    issuer: "Columbia University / Coursera (5-Course Specialization)",
    date: "Jan 2024",
    credentialId: "8HQMBLT4JGHQ",
    skills: [
      "Project Scheduling",
      "Cost Estimating & Cost Control",
      "Construction Finance",
      "Contract Administration"
    ],
    status: "Verified"
  },
  {
    id: "cert-3",
    name: "Autodesk Civil 3D 2025 Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jan 2025",
    credentialId: "70f1b17d036fccc21906947558539118132b911be74505b566b9b83023b3cb1",
    skills: [
      "BIM & 3D Corridor Modeling",
      "Parametric Alignments",
      "Surface Grading",
      "Cross-Sections & Volumes"
    ],
    status: "Verified"
  },
  {
    id: "cert-4",
    name: "Learning Autodesk Subassembly Composer",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    credentialId: "3a55326c5e02d2455f36be2fc96600304916e3f1962cf30828a06b07e1e9e983",
    skills: [
      "Custom Subassemblies",
      "Parametric Cross-Sections",
      "Target Parameters & Decision Trees",
      "Corridor Assemblies"
    ],
    status: "Verified"
  },
  {
    id: "cert-5",
    name: "Civil 3D: Basic Roadway Design",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    credentialId: "deb4291a7385aa843635faa415b7eb5a40de0f3239bdd1b4a658aaec1c6fc",
    skills: [
      "Horizontal & Vertical Alignments",
      "Superelevation Design",
      "Plan & Profile Production",
      "Junction Geometry"
    ],
    status: "Verified"
  },
  {
    id: "cert-6",
    name: "AutoCAD Civil 3D - MEGA course for Civil Works",
    issuer: "Udemy / AulaGEO Academy (13 hrs)",
    date: "Oct 2023",
    credentialId: "UC-e60c092b-a4b5-45b8-a7fe-8ed86f330e8",
    skills: [
      "Design-Optimized Alignments",
      "Subassembly Applications",
      "Mass-Haul Analysis",
      "Earthwork Takeoff"
    ],
    status: "Verified"
  },
  {
    id: "cert-7",
    name: "AI Enhanced Project Management",
    issuer: "10 Academy (12-Week Intensive Program)",
    date: "Oct 2024",
    skills: [
      "AI Automation in PM",
      "NLP Workflow Optimization",
      "Data-Driven Roadmapping",
      "No-Code Platforms"
    ],
    status: "Verified"
  },
  {
    id: "cert-8",
    name: "Data Analysis Program",
    issuer: "ALX Africa",
    date: "Aug 2023",
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Python Data Science",
      "Power BI / Tableau"
    ],
    status: "Verified"
  },
  {
    id: "cert-9",
    name: "Quantity Surveyor's Guide for Pre-Contracts Management",
    issuer: "Udemy",
    date: "Oct 2022",
    credentialId: "UC-cd049062-7559-4d77-b719-abd696f0ea55",
    skills: [
      "BOQ Preparation",
      "Pre-Contracts Tendering",
      "Material Takeoff",
      "Cost Estimation"
    ],
    status: "Verified"
  },
  {
    id: "cert-10",
    name: "Complete Course in AutoCAD: 2D and 3D",
    issuer: "Udemy / CADCIM Technologies (16.5 hrs)",
    date: "Oct 2021",
    credentialId: "UC-d3260481-3885-49b2-9316-91385a509a2a",
    skills: [
      "Engineering Drafting",
      "3D Solid Modeling",
      "Standard Layouts & Sheet Sets",
      "Dimensioning"
    ],
    status: "Verified"
  }
];
