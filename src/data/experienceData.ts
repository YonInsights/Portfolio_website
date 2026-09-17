import type { ExperiencePosition } from "../types";

export const experienceData: ExperiencePosition[] = [
  {
    id: "exp-eec",
    organization: "Ethiopian Engineering Corporation",
    role: "Highway Engineer",
    period: "Nov 2025 – Present",
    location: "Addis Ababa, Ethiopia · On-site",
    status: "Present",
    responsibilities: [
      "Serving as a consultant-side Highway Design Engineer responsible for geometric alignment, corridor modeling, and technical standard compliance for governmental road infrastructure projects.",
      "Lead geometric road design and corridor modeling for trunk, link, and main access road projects using Autodesk Civil 3D in strict compliance with Ethiopian Roads Administration (ERA 2013) and AASHTO design guidelines.",
      "Establish horizontal and vertical alignments, compute curve radii, transition spirals, and superelevation runoff rates based on specified terrain classifications (flat, rolling, mountainous, escarpment).",
      "Coordinate cross-sectional design, surface grading, and earthwork cut-and-fill quantity calculations to optimize mass-haul efficiency.",
      "Review topographical survey data, Digital Elevation Models (DEM), and ground surfaces to identify spatial constraints and hydraulic crossing locations.",
      "Interface geometric alignment models with cross-disciplinary drainage, geotechnical, and structural teams to resolve alignment clashes before tender issuance."
    ],
    keyProjectInvolvement: [
      "Governmental Trunk & Link Road Infrastructure Corridor Projects",
      "Autodesk Civil 3D Multi-Baseline Corridor Modeling & Standard Compliance",
      "Cross-Disciplinary Geometric, Drainage & Structural Clash Resolution"
    ],
    toolsUsed: [
      "Autodesk Civil 3D",
      "AutoCAD",
      "InfraWorks",
      "LandXML",
      "ERA 2013 Design Manuals",
      "AASHTO Green Book"
    ]
  },
  {
    id: "exp-infradigital",
    organization: "Infradigital CAD (infradigitalcad.com)",
    role: "Founder & Lead Infrastructure Technologist",
    period: "2024 – Present",
    location: "Addis Ababa, Ethiopia / Cloud Platform",
    status: "Present",
    responsibilities: [
      "Engineered and launched Infradigitalcad.com, a web-based highway design and BIM automation platform used by civil engineers to accelerate drafting and calculations.",
      "Developed algorithmic horizontal and vertical alignment formatters that clean and structure raw survey coordinates for instant CAD import.",
      "Programmed automated ERA terrain slope classifiers, superelevation runoff solvers, and earthwork validation utilities adhering to ERA/AASHTO standards.",
      "Integrated full-stack engineering interfaces with Python computational geometry engines, cutting design turnaround times by up to 80%."
    ],
    keyProjectInvolvement: [
      "Infradigital CAD Highway Automation Web Suite (infradigitalcad.com)",
      "Automated Alignment Formatter & Survey Data Cleaning Tool",
      "ERA Ground Slope Terrain Classifier & Road Sign Generator"
    ],
    toolsUsed: [
      "Python",
      "AutoCAD Civil 3D API",
      "TypeScript & React",
      "ERA Design Manuals",
      "AASHTO Guidelines"
    ]
  },
  {
    id: "exp-omega",
    organization: "Omega Consulting Engineers Plc.",
    role: "Highway Engineer",
    period: "Jun 2025 – Nov 2025 · 6 mos",
    location: "Jimma, Oromia Region, Ethiopia · Hybrid",
    status: "Completed",
    responsibilities: [
      "Served as Highway Engineer for the Jimma Aba Jifar Airport to Bosona Jimma and Bosona Jimma internal road project.",
      "Conducted geometric road design, route alignment studies, and dual-carriageway cross-section drafting using AutoCAD Civil 3D.",
      "Calculated earthwork cut/fill quantities, generated mass-haul schedules, and resolved right-of-way (ROW) geometric constraints.",
      "Coordinated with municipal stakeholders and contractors on construction alignment staking and junction optimization."
    ],
    keyProjectInvolvement: [
      "Jimma Aba Jifar Airport to Bosona Jimma Road Corridor",
      "Bosona Jimma Internal Urban Road Network",
      "Junction & Roundabout Geometric Optimization"
    ],
    toolsUsed: [
      "AutoCAD Civil 3D 2026",
      "InfraWorks",
      "Global Mapper v26",
      "ERA Design Manuals",
      "Microsoft Excel"
    ]
  },
  {
    id: "exp-meteoric",
    organization: "Meteoric engineers consultant PLC",
    role: "Highway Engineer",
    period: "Feb 2025 – Jul 2025 · 6 mos",
    location: "Addis Ababa, Ethiopia · Hybrid",
    status: "Completed",
    responsibilities: [
      "Engaged in highway corridor studies, route alignment evaluations, and geometric design reviews for trunk and regional road networks.",
      "Prepared detailed engineering inspection reports, environmental and social impact assessments (ESIA), and comprehensive design reports.",
      "Supervised roadway design drafting, verified superelevation transitions, and ensured strict technical compliance with regulatory standards.",
      "Coordinated with multidisciplinary engineering teams (hydrology, structural, geotechnical) to meet project delivery schedules."
    ],
    keyProjectInvolvement: [
      "Highway Corridor Feasibility & Geometric Reviews",
      "Environmental & Social Impact Assessment (ESIA) Integration",
      "Technical Road Design Compliance & Final Tender Documentation"
    ],
    toolsUsed: [
      "AutoCAD Civil 3D",
      "AutoCAD",
      "Google Earth Pro",
      "Global Mapper",
      "Technical Reporting"
    ]
  },
  {
    id: "exp-best",
    organization: "Best Consulting Engineers",
    role: "Junior Highway Engineer",
    period: "Jun 2023 – Mar 2025 · 1 yr 10 mos",
    location: "Harar, Ethiopia · On-site",
    status: "Completed",
    responsibilities: [
      "Delivered geometric design support and technical consultation for the 97.22 km Harar-Kombolcha-Ejersagoro-Fugnanbira-Bombas & Ejersagoro-Ahmed Imam Road Project.",
      "Collaborated closely with civil construction contractors and Ethiopian Roads Administration (ERA) client representatives.",
      "Verified contractor road cross-sections, computed earthwork cut/fill quantities, and structured material documentation.",
      "Resolved complex right-of-way (ROW) issues through collaborative site redesign and alignment adjustments.",
      "Managed technical filing and authored detailed engineering reports for internal and client records."
    ],
    keyProjectInvolvement: [
      "Harar-Kombolcha-Ejersagoro-Fugnanbira-Bombas & Ejersagoro-Ahmed Imam Road Project (97.22 km)",
      "Contractor Cross-Section & BOQ Verification",
      "Right-of-Way (ROW) Geometric Realignment"
    ],
    toolsUsed: [
      "AutoCAD Civil 3D",
      "AutoCAD",
      "ERA Design Standards",
      "Excel (BOQ Modeling)",
      "AASHTO Guidelines"
    ]
  },
  {
    id: "exp-eleka",
    organization: "Eleka Inc.",
    role: "Machine Learning Engineer (Freelance)",
    period: "Sep 2024 – Jan 2025 · 5 mos",
    location: "Rwanda · Remote",
    status: "Completed",
    responsibilities: [
      "Architected and deployed an AI conversational chatbot and personalized recommendation engine leveraging user learning profile data.",
      "Analyzed user goals, proficiency levels, and learning modalities to dynamically generate tailored learning roadmaps and curated resources.",
      "Implemented Python, Natural Language Processing (NLP), and data engineering pipelines to dynamically export structured learning curricula into formatted PDFs.",
      "Integrated machine learning models with REST API microservices for fast, reliable, low-latency inference."
    ],
    keyProjectInvolvement: [
      "AI Personalized Learning Roadmap Generator",
      "Conversational Recommendation Chatbot Engine",
      "Automated Multi-Format PDF Curriculum Export Pipeline"
    ],
    toolsUsed: [
      "Python",
      "Data Engineering",
      "NLP & Scikit-Learn",
      "Pandas / NumPy",
      "REST APIs"
    ]
  },
  {
    id: "exp-ifh",
    organization: "IFH Engineering PLC",
    role: "Site Engineer",
    period: "Mar 2023 – Aug 2023 · 6 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    status: "Completed",
    responsibilities: [
      "Supervised structural and highway construction works on site in strict accordance with approved technical drawings and specifications.",
      "Minimized construction equipment downtime through proactive plant scheduling, maintenance coordination, and site logistics.",
      "Improved field resource utilization, material tracking, and workforce productivity through efficient cross-team collaboration.",
      "Monitored concrete pours, rebar placement tolerances, and earthwork compaction quality assurance standards."
    ],
    keyProjectInvolvement: [
      "Structural Bridge & Box Culvert Construction Supervision",
      "Equipment & Heavy Machinery Logistics Optimization",
      "Site Management & Quality Assurance Standards"
    ],
    toolsUsed: [
      "Site Management",
      "Construction Site Supervision",
      "AutoCAD",
      "Total Station Surveying",
      "Quality Control Protocols"
    ]
  },
  {
    id: "exp-gerar",
    organization: "Gerar",
    role: "Graphic Designer",
    period: "Jan 2023 – Mar 2023 · 3 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    status: "Completed",
    responsibilities: [
      "Created technical drawings, graphics, and digital product designs for presentation and publishing.",
      "Designed marketing graphics, project diagrams, and user interface elements with high visual polish.",
      "Collaborated with product teams to align graphic collateral with brand standards."
    ],
    keyProjectInvolvement: [
      "Image Design & Product Design",
      "Technical Graphics & Presentation Visuals"
    ],
    toolsUsed: [
      "Image Design",
      "Product Design",
      "Adobe Creative Suite",
      "Visual Schematics"
    ]
  },
  {
    id: "exp-best-intern",
    organization: "Best Consulting Engineers PLC",
    role: "Intern Structural Inspector",
    period: "Jun 2021 – Feb 2022 · 9 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    status: "Completed",
    responsibilities: [
      "Conducted structural inspections and site supervision for the Alexander Pushkin Square-Gotera Interchange Road Project (3.8 km road with 3 segments, two-lane 320m tunnel, and 45m box girder bridge built by China First Highway Engineering Co.).",
      "Maintained accurate daily construction logs, weather records, equipment utilization sheets, and progress tracking reports.",
      "Conducted regular site safety inspections and assisted senior resident engineers in survey verification, centerline setting out, and interim quantity measurements."
    ],
    keyProjectInvolvement: [
      "Alexander Pushkin Square - Gotera Interchange Project (3.8 km, 320m Tunnel, 45m Box Girder Bridge)",
      "Construction Site Inspections & Site Supervision",
      "Tunnel & Structural Bridge Quality Assurance Monitoring"
    ],
    toolsUsed: [
      "Construction Site Inspections",
      "Site Supervision",
      "AutoCAD",
      "Survey Verification",
      "Technical Progress Reporting"
    ]
  }
];

