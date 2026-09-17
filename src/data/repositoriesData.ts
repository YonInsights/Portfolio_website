export interface RepositoryItem {
  id: string;
  name: string;
  title: string;
  category: "Software Tool" | "Machine Learning" | "Highway Engineering" | "GIS & Spatial" | "Web Application";
  description: string;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  badge: string;
  featured?: boolean;
}

export const repositoriesData: RepositoryItem[] = [
  {
    id: "repo-infradigital",
    name: "infradigital-cad-suite",
    title: "Infradigital CAD: Web-Based Highway Design & BIM Suite",
    category: "Software Tool",
    description: "Cloud-native civil engineering platform automating horizontal/vertical alignment data cleaning, ERA terrain slope classification, AASHTO superelevation runoff solvers, and earthwork validation.",
    highlights: [
      "Algorithmic coordinate formatters converting raw survey data to Civil 3D/AutoCAD inputs in seconds",
      "Automated ERA ground slope terrain classification and road sign generation engines",
      "In-browser AASHTO Green Book & ERA 2013 curve compliance calculators",
      "Reduces alignment drafting and verification turnaround times by up to 80%"
    ],
    techStack: ["TypeScript", "React", "Python", "Civil 3D API", "Tailwind CSS", "LandXML"],
    repoUrl: "https://github.com/YonInsights/Portfolio_website",
    liveUrl: "https://infradigitalcad.com",
    badge: "Flagship Software",
    featured: true
  },
  {
    id: "repo-traffic-ai",
    name: "urban-traffic-ai-predictor",
    title: "AI-Driven Urban Traffic Congestion & Signal Timing Predictor",
    category: "Machine Learning",
    description: "Spatial-temporal machine learning framework combining LSTM neural networks and XGBoost regressors to forecast arterial bottleneck formations and dynamically optimize traffic signal splits.",
    highlights: [
      "88.4% predictive directional speed accuracy (R² = 0.89, MAE = 3.4 km/h) on urban corridor telemetry",
      "Engineered temporal lag features and spatial adjacency graphs across arterial intersections",
      "Formulated dynamic signal split optimization function reducing simulated peak delays by up to 22%",
      "Integrated GIS spatial vulnerability heatmaps for traffic management centers"
    ],
    techStack: ["Python 3.11", "PyTorch (LSTM)", "XGBoost", "Scikit-Learn", "QGIS", "PostGIS"],
    repoUrl: "https://github.com/YonInsights/urban-traffic-ai-predictor",
    badge: "AI / Transportation",
    featured: true
  },
  {
    id: "repo-alignment-tool",
    name: "civil3d-alignment-formatter",
    title: "Automated Road Alignment Formatter & LandXML Parser",
    category: "Highway Engineering",
    description: "High-speed Python automation utility parsing unstructured total station coordinate surveys, structuring station-offset geometry, and exporting clean LandXML datasets for Autodesk Civil 3D.",
    highlights: [
      "Parses multi-format CSV/TXT survey coordinates and standardizes chainage stationing",
      "Fits horizontal curve radii and detects tangent-to-curve deflection angle mismatches",
      "Automates LandXML file generation to eliminate manual point-by-point Civil 3D drafting",
      "Tested and validated on major regional corridor survey files"
    ],
    techStack: ["Python", "Pandas", "LandXML", "OpenPyXL", "AutoCAD Civil 3D"],
    repoUrl: "https://github.com/YonInsights/civil3d-alignment-formatter",
    liveUrl: "https://infradigitalcad.com",
    badge: "CAD Automation",
    featured: true
  },
  {
    id: "repo-pci-ml",
    name: "pavement-pci-ml-classifier",
    title: "Pavement Condition Index (PCI) Degradation Classifier",
    category: "Machine Learning",
    description: "Supervised machine learning pipeline evaluating pavement distress severity (rutting, alligator cracking, potholes) and predicting ASTM D6433 PCI lifecycle deterioration curves.",
    highlights: [
      "91.2% Overall F1-Score utilizing Random Forest and XGBoost ensemble classifiers",
      "SHAP interpretability analysis revealing drainage rating and ESALs drive 64% of early failures",
      "Generates proactive 10-year road asset maintenance prioritization schedules saving up to 30% budget",
      "Spatial GIS export for municipal road network asset management"
    ],
    techStack: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Pandas", "ASTM D6433"],
    repoUrl: "https://github.com/YonInsights/pavement-pci-ml-classifier",
    badge: "Asset Management"
  },
  {
    id: "repo-boq-calculator",
    name: "highway-boq-earthwork-automation",
    title: "Automated Road Quantity Takeoff & Mass-Haul BOQ Engine",
    category: "Software Tool",
    description: "Automated data pipeline extracting station-by-station Civil 3D corridor volume tables, applying geotechnical shrinkage/swell factors, and formatting 7-division ERA/CESMM4 tender BOQs.",
    highlights: [
      "Reduces manual quantity takeoff preparation from 4 days to 45 minutes for alignment revisions",
      "Computes Mass-Haul balancing diagrams with free-haul and overhaul distance cost optimization",
      "Maps geometric corridor cross-sections directly to standardized Division 1000-7000 pay items",
      "Eliminates cross-sheet spreadsheet transcription errors in construction bidding"
    ],
    techStack: ["Python", "Excel VBA", "AutoCAD Civil 3D QTO", "SQLite", "ERA Specs"],
    repoUrl: "https://github.com/YonInsights/highway-boq-earthwork-automation",
    badge: "Cost Engineering"
  },
  {
    id: "repo-gis-vulnerability",
    name: "gis-infrastructure-vulnerability",
    title: "Spatial Road Network Vulnerability & Catchment GIS Pipeline",
    category: "GIS & Spatial",
    description: "Multi-Criteria Decision Analysis (AHP-MCDA) and graph-theory network routing framework assessing road network connectivity, flood susceptibility, and emergency accessibility.",
    highlights: [
      "AHP spatial overlay weighting terrain slope, soil erodibility, stream proximity, and rainfall intensity",
      "Computes 15, 30, 45, and 60-minute emergency healthcare travel-time isochrone surfaces",
      "Identifies critical bridge and culvert failure points using NetworkX betweenness centrality",
      "Automated hydrological watershed delineation for drainage culvert sizing"
    ],
    techStack: ["Python (GeoPandas, NetworkX)", "ArcGIS Pro", "QGIS", "PostGIS", "GDAL"],
    repoUrl: "https://github.com/YonInsights/gis-infrastructure-vulnerability",
    badge: "Spatial Analytics"
  },
  {
    id: "repo-eleka-ai",
    name: "eleka-ai-curriculum-engine",
    title: "Eleka AI Conversational Assistant & Dynamic PDF Generator",
    category: "Machine Learning",
    description: "Production conversational AI assistant and adaptive recommendation engine that analyzes learner profiles and generates customized curriculum study roadmaps with automated PDF export.",
    highlights: [
      "NLP text processing pipeline matching student queries with modular skill ontologies",
      "Adaptive recommendation logic sequencing modules based on prerequisite dependencies",
      "High-speed automated PDF generation microservice using Python ReportLab",
      "Deployed as a REST API microservice for seamless web and mobile client integration"
    ],
    techStack: ["Python 3.11", "FastAPI", "NLP (SpaCy/NLTK)", "Scikit-Learn", "ReportLab PDF"],
    repoUrl: "https://github.com/YonInsights/eleka-ai-curriculum-engine",
    badge: "Conversational AI"
  },
  {
    id: "repo-portfolio",
    name: "Portfolio_website",
    title: "Civil/Highway Engineering & Data Science Portfolio",
    category: "Web Application",
    description: "Modern, high-performance portfolio website built with React 19, TypeScript, and Tailwind CSS. Features in-browser AASHTO/ERA geometric design calculator, project case studies, and recruiter hub.",
    highlights: [
      "In-browser interactive AASHTO/ERA highway geometric design calculator (minimum radius, SSD)",
      "Comprehensive multi-tab portfolio hub with full engineering case studies and technical drawings",
      "Modern dark-teal executive aesthetics with responsive layout and instant CV download",
      "100% production build passing with 0 TypeScript/lint errors"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    repoUrl: "https://github.com/YonInsights/Portfolio_website",
    liveUrl: "https://github.com/YonInsights/Portfolio_website",
    badge: "Web App / Open Source"
  }
];
