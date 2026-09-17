import type { ResearchProposal } from "../types";

export const researchData: ResearchProposal[] = [
  {
    "id": "res-1",
    "title": "Spatial-Temporal Machine Learning for Congestion Forecasting in Rapidly Growing Metropolises",
    "targetFocus": "Intelligent Transportation Systems (ITS) & Urban Mobility",
    "researchQuestion": "How can graph neural networks (GNNs) and hybrid LSTM-XGBoost architectures leverage sparse GPS telemetry and road geometry constraints to accurately predict dynamic congestion propagation in developing cities?",
    "problemStatement": "Rapidly urbanizing cities face severe traffic congestion with minimal high-density inductive loop sensor infrastructure. Traditional macroscopic traffic models fail to capture spontaneous bottleneck formation, while pure deep learning models often violate fundamental road network capacity physics.",
    "methodology": [
      "Formulate a spatial-temporal graph representation where intersections are nodes and road segments are directed edges with geometric capacity attributes.",
      "Integrate weather anomalies, public transport boarding surges, and geometric bottle-neck parameters into the node feature matrix.",
      "Benchmark Physics-Informed Neural Networks (PINN) against traditional LWR traffic flow equations.",
      "Evaluate signal timing intervention strategies using SUMO (Simulation of Urban MObility)."
    ],
    "technologyStack": [
      "Python",
      "PyTorch Geometric",
      "SUMO Microscopic Simulator",
      "PostGIS",
      "QGIS",
      "XGBoost"
    ],
    "expectedContribution": "A robust, low-cost, physics-guided machine learning framework capable of real-time urban congestion mitigation in sensor-sparse transportation networks.",
    "collaborationIntent": "Open for MSc / PhD research proposals, collaborative grant applications, and joint academic publications."
  },
  {
    "id": "res-2",
    "title": "Data-Driven Highway Geometric Safety Auditing and Automated Accident Blackspot Remediation",
    "targetFocus": "Highway Safety, Geometric Design & Computer Vision",
    "researchQuestion": "Can combining high-resolution digital terrain models, vehicle dynamic telemetry, and historical crash coordinates automate the identification of geometric design non-conformities and prioritize safety retrofits?",
    "problemStatement": "Mountainous and rolling terrain roads often exhibit hidden geometric safety risks — such as inadequate stopping sight distances on compound horizontal-vertical curves — that traditional manual safety audits fail to systematically pinpoint before fatal crashes occur.",
    "methodology": [
      "Extract continuous 3D alignment parameters (instantaneous curvature, longitudinal grade, superelevation runoff rate) directly from Civil 3D solid models.",
      "Simulate 3D driver eye height (1.08m) and object height (0.60m) line-of-sight rays against 3D cut slopes and roadside barriers.",
      "Apply spatial Poisson-Tweedie regression to correlate sight distance deficits with crash frequency.",
      "Generate an automated Safety Deficit Index (SDI) per 50m highway segment."
    ],
    "technologyStack": [
      "AutoCAD Civil 3D API",
      "Python (Shapely, Scipy)",
      "ArcGIS Pro Spatial Analyst",
      "R / Python Statistical Modeling"
    ],
    "expectedContribution": "An automated 3D geometric safety audit tool that streamlines pre-construction safety verification and prioritizes low-cost geometric remediation on existing road corridors.",
    "collaborationIntent": "Seeking research partnerships with transportation research institutes, road safety agencies, and academic advisors."
  },
  {
    "id": "res-3",
    "title": "Predictive Pavement Life-Cycle Asset Management using Geospatial Machine Learning",
    "targetFocus": "Infrastructure Asset Management & Predictive Maintenance",
    "researchQuestion": "What are the dominant multi-modal interactions between heavy vehicle axle loadings, subgrade soil plasticity, drainage quality, and climate factors that accelerate non-linear pavement deterioration?",
    "problemStatement": "Road transport authorities struggle with rigid, calendar-based resurfacing schedules. Proactive, machine-learning-driven pavement deterioration modeling can optimize limited capital maintenance budgets by forecasting structural failure inflection points.",
    "methodology": [
      "Assemble multi-temporal GIS pavement distress surveys, Falling Weight Deflectometer (FWD) readings, and daily precipitation rasters.",
      "Train survival analysis models (Cox Proportional Hazards) and gradient boosted trees to model the time-to-failure for asphalt concrete layers.",
      "Formulate a multi-objective optimization algorithm balancing life-cycle carbon emissions with agency maintenance budgets."
    ],
    "technologyStack": [
      "Python",
      "Scikit-Survival",
      "QGIS / PostGIS",
      "Google Earth Engine",
      "Civil 3D"
    ],
    "expectedContribution": "An interpretable AI decision-support platform enabling road agencies to optimize pavement preservation timing, achieving up to 30% life-cycle cost savings.",
    "collaborationIntent": "Targeting graduate research fellowships, transportation asset management labs, and doctoral research programs."
  }
];
