import type { ExpertiseItem } from "../types";

export const expertiseData: ExpertiseItem[] = [
  {
    "id": "highway-engineering",
    "title": "Highway & Geometric Engineering",
    "subtitle": "Standards-Compliant Road Infrastructure Design",
    "description": "Comprehensive highway design from route feasibility to detailed construction drawings, adhering to AASHTO Green Book, ERA Design Manuals, and international geometric design criteria.",
    "capabilities": [
      "Highway Geometric Design (Horizontal & Vertical Alignment)",
      "Superelevation Transitions, Runoff & Spiral Curve Parameters",
      "At-Grade Intersection & Modern Roundabout Design",
      "Interchange Ramp Geometry & Taper/Gore Layouts",
      "Surface & Sub-surface Road Drainage Hydraulics (Culverts & Ditches)",
      "Cross-Section Assembly Modeling & Daylight Grading",
      "Earthwork Mass Haul Balancing & Quantity Takeoff (BOQ)",
      "Sight Distance Analysis (Stopping SSD, Passing PSD, Decision DSD)"
    ],
    "toolsAndTech": [
      "AutoCAD Civil 3D",
      "AutoCAD Vehicle Tracking",
      "Global Mapper",
      "HY-8 / HEC-RAS Hydraulic Modeling",
      "Microsoft Excel Advanced Engineering Solvers"
    ],
    "engineeringStandards": [
      "AASHTO A Policy on Geometric Design of Highways",
      "ERA Geometric Design Manual (2013/2020)",
      "TRB Highway Capacity Manual (HCM)",
      "NCHRP Report 672 (Roundabouts)"
    ],
    "badgeColor": "border-[#005C5C] text-[#005C5C] bg-[#005C5C]/10",
    "iconName": "Compass"
  },
  {
    "id": "gis-spatial-analysis",
    "title": "GIS & Spatial Infrastructure Analytics",
    "subtitle": "Spatial Modeling, Route Analysis & Terrain Geomatics",
    "description": "Advanced geoprocessing, raster terrain analysis, multi-criteria corridor evaluation, and network topology analysis for infrastructure planning and asset management.",
    "capabilities": [
      "Digital Elevation Model (DEM/DTM) Processing & Slope/Aspect Mapping",
      "Multi-Criteria Decision Analysis (AHP-MCDA) for Route Corridor Selection",
      "Hydrological Watershed & Catchment Delineation for Road Drainage",
      "Road Network Graph Topology, Routing & Betweenness Centrality",
      "Spatial Accessibility Isochrone Modeling for Essential Services",
      "Disaster Hazard Vulnerability Mapping (Flood/Landslide Risk Zones)",
      "High-Precision Survey Data & Georeferencing Transformations"
    ],
    "toolsAndTech": [
      "ArcGIS Pro / ArcMap",
      "QGIS 3.x with GDAL/GRASS/SAGA Plugins",
      "PostGIS / PostgreSQL Spatial Database",
      "Python Geospatial Stack (GeoPandas, Shapely, Rasterio, NetworkX)",
      "Google Earth Engine & Satellite Remote Sensing"
    ],
    "badgeColor": "border-[#078F91] text-[#078F91] bg-[#078F91]/10",
    "iconName": "Map"
  },
  {
    "id": "3d-visualization",
    "title": "3D Infrastructure Visualization & Digital Modeling",
    "subtitle": "BIM Corridor Modeling & Realistic Engineering Renders",
    "description": "Transforming technical CAD alignments and terrain models into high-fidelity 3D digital twins, stakeholder presentations, and clash-detection coordination models.",
    "capabilities": [
      "Civil 3D Parametric Corridor Solids & Multi-Baseline Assemblies",
      "Digital Terrain Surface Draping & Orthomosaic Integration",
      "Urban Junction, Roundabout & Interchange 3D Spatial Renders",
      "Infrastructure Flythrough & Driver Perspective Video Simulations",
      "Visual Impact Assessment (VIA) & Stakeholder Presentation Assets",
      "BIM Coordination, IFC Model Export & Clearance Verification"
    ],
    "toolsAndTech": [
      "AutoCAD Civil 3D Subassembly Composer",
      "Autodesk InfraWorks",
      "Autodesk Navisworks Manage",
      "Twinmotion / Lumion / 3ds Max",
      "Adobe Photoshop & Illustrator for Cartography & Presentation"
    ],
    "badgeColor": "border-[#08B9BD] text-[#005C5C] bg-[#08B9BD]/10",
    "iconName": "Layers"
  },
  {
    "id": "data-analytics",
    "title": "Data Analytics & Transportation Datasets",
    "subtitle": "Exploratory Data Analysis, SQL Pipelines & BOQ Automation",
    "description": "Harnessing statistical data processing, SQL databases, and automated scripting to extract engineering insights, analyze commuter patterns, and automate project workflows.",
    "capabilities": [
      "Automated Bill of Quantities (BOQ) Data Extraction from Civil 3D",
      "Exploratory Data Analysis (EDA) on Large-Scale Traffic & Sensor Logs",
      "Origin-Destination (O-D) Movement Matrix Computation",
      "Statistical Time-Series Trend Analysis & Forecasting",
      "Relational Database Modeling & Complex SQL Performance Queries",
      "Dynamic Engineering KPI Dashboards & Interactive Data Visualizations"
    ],
    "toolsAndTech": [
      "Python (Pandas, NumPy, Scipy, Statsmodels)",
      "SQL (PostgreSQL, SQLite, MySQL)",
      "Microsoft Excel (Power Query, VBA, Advanced Dynamic Formulas)",
      "Kepler.gl / Plotly / Matplotlib / Seaborn",
      "Power BI / Interactive Web Dashboards"
    ],
    "badgeColor": "border-[#005C5C] text-[#005C5C] bg-[#005C5C]/10",
    "iconName": "BarChart3"
  },
  {
    "id": "machine-learning",
    "title": "Machine Learning & Transportation AI",
    "subtitle": "Predictive Modeling, Clustering & Congestion Forecasting",
    "description": "Deploying supervised and unsupervised machine learning algorithms to solve complex transportation bottlenecks, forecast infrastructure degradation, and optimize traffic signals.",
    "capabilities": [
      "Time-Series Traffic Congestion & Travel Speed Forecasting (LSTM, XGBoost)",
      "Pavement Condition Index (PCI) Degradation Classification",
      "DBSCAN & K-Means Spatial Mobility Clustering",
      "Feature Engineering for Spatial-Temporal Infrastructure Datasets",
      "Model Interpretability & Feature Attribution (SHAP, Permutation Importance)",
      "Dynamic Traffic Signal Optimization Algorithm Prototyping"
    ],
    "toolsAndTech": [
      "Python 3.11",
      "Scikit-Learn (Ensemble models, Classifiers, Regressors)",
      "PyTorch / TensorFlow (Sequential LSTM networks)",
      "XGBoost & LightGBM Gradient Boosted Decision Trees",
      "JupyterLab / VS Code / Git Version Control"
    ],
    "badgeColor": "border-[#078F91] text-[#078F91] bg-[#078F91]/10",
    "iconName": "Cpu"
  }
];
