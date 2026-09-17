import type { FreelanceService } from "../types";

export const servicesData: FreelanceService[] = [
  {
    "id": "srv-highway-design",
    "title": "Highway & Geometric Road Design",
    "category": "Engineering",
    "description": "Complete horizontal and vertical geometric alignment engineering for highways, trunk roads, access corridors, and urban arterials complying with AASHTO and ERA manuals.",
    "deliverables": [
      "Horizontal alignment design with spiral transitions (clothoids)",
      "Vertical profile grading and crest/sag curve calculations",
      "Superelevation diagram schedules and runoff calculations",
      "Cross-sections at custom intervals with cut/fill daylight slopes",
      "Complete 1:1000 Plan & 1:100 Profile production-ready drawing sets"
    ],
    "typicalTools": [
      "AutoCAD Civil 3D",
      "Global Mapper",
      "ERA/AASHTO Standards"
    ],
    "bestFor": "Engineering consultancies, EPC contractors, and infrastructure developers."
  },
  {
    "id": "srv-gis-mapping",
    "title": "GIS Mapping & Spatial Analysis",
    "category": "GIS & Geomatics",
    "description": "Comprehensive geoprocessing, DEM terrain analysis, route corridor alternative selection, and infrastructure asset mapping.",
    "deliverables": [
      "Multi-Criteria Decision Analysis (MCDA) route suitability maps",
      "DEM slope, aspect, elevation contour, and cut/fill hazard zonation",
      "Watershed & hydrological catchment delineation for drainage design",
      "Network routing, accessibility isochrones, and vulnerability spatial atlases",
      "Clean geodatabases, shapefiles, and high-resolution cartographic prints"
    ],
    "typicalTools": [
      "ArcGIS Pro",
      "QGIS 3.x",
      "PostGIS",
      "Python GeoPandas"
    ],
    "bestFor": "Regional planning agencies, environmental consultancies, and civil firms."
  },
  {
    "id": "srv-civil3d-modeling",
    "title": "Civil 3D Corridor Modeling & BIM",
    "category": "Digital Engineering",
    "description": "Advanced parametric 3D corridor modeling, multi-baseline assembly targeting, surface grading, and BIM 3D solids coordination.",
    "deliverables": [
      "Parametric corridor assemblies and Subassembly Composer profiles",
      "Accurate corridor top/datum surfaces and daylight boundary models",
      "3D Solid exports (DWG/IFC) for BIM integration and clash detection",
      "Volume surfaces and earthwork staging calculations"
    ],
    "typicalTools": [
      "AutoCAD Civil 3D",
      "Subassembly Composer",
      "Navisworks"
    ],
    "bestFor": "BIM managers, civil engineering design teams, and infrastructure contractors."
  },
  {
    "id": "srv-3d-viz",
    "title": "3D Infrastructure & Landscape Visualization",
    "category": "Visualization",
    "description": "High-impact 3D engineering renders, stakeholder presentation imagery, and dynamic video flythrough simulations of highway corridors and urban intersections.",
    "deliverables": [
      "Photorealistic 4K perspective renderings (Day / Sunset / Night)",
      "Highway corridor flythrough and driver perspective video animations",
      "Before vs After infrastructure modernization visual boards",
      "Visual Impact Assessment (VIA) presentation decks"
    ],
    "typicalTools": [
      "Autodesk InfraWorks",
      "Twinmotion",
      "Civil 3D",
      "Photoshop"
    ],
    "bestFor": "Client presentations, public consultation meetings, and tender bids."
  },
  {
    "id": "srv-intersection-roundabout",
    "title": "Intersection & Roundabout Geometric Design",
    "category": "Engineering",
    "description": "Capacity-optimized geometric design of modern roundabouts, at-grade signalized/unsignalized junctions, and interchange ramp terminals.",
    "deliverables": [
      "Inscribed Circle Diameter (ICD), entry deflection, and splitter island layout",
      "Fastest vehicle travel path speed checks (R1 to R5 radii)",
      "Swept path vehicle tracking simulations for heavy trucks and transit buses",
      "Pavement markings, regulatory signage, and pedestrian crossing details"
    ],
    "typicalTools": [
      "AutoCAD Civil 3D",
      "AutoCAD Vehicle Tracking",
      "NCHRP 672"
    ],
    "bestFor": "Municipal transport departments, urban developers, and highway engineers."
  },
  {
    "id": "srv-drainage-hydraulics",
    "title": "Road Drainage & Hydraulic Culvert Design",
    "category": "Engineering",
    "description": "Hydrological runoff calculations, catchment sizing, and hydraulic design of roadside ditches, pipe culverts, and reinforced concrete box culverts.",
    "deliverables": [
      "Watershed catchment delineation and peak discharge computations",
      "Culvert hydraulic sizing schedules (Inlet/Outlet control checks)",
      "Longitudinal roadside ditch gradient profiles and lining specifications",
      "Standard structural drawings for single/multi-cell RC box and pipe culverts"
    ],
    "typicalTools": [
      "ArcGIS Pro",
      "HY-8 / HEC-RAS",
      "Civil 3D",
      "Excel Solvers"
    ],
    "bestFor": "Trunk road design packages and climate-resilient road upgrades."
  },
  {
    "id": "srv-boq-takeoff",
    "title": "Road Quantity Takeoff & BOQ Preparation",
    "category": "Cost Engineering",
    "description": "Automated data extraction of earthwork volumes, pavement layer areas, drainage concrete, and road furniture into standardized Bill of Quantities.",
    "deliverables": [
      "Station-by-station earthwork cut/fill volume schedules with mass haul curves",
      "Pavement material quantity takeoff (Subbase, Crushed Stone Base, Asphalt layers)",
      "Itemized 7-Division Bill of Quantities (BOQ) per ERA / CESMM4 standards",
      "Material variance analysis and unit rate cost estimation workbooks"
    ],
    "typicalTools": [
      "Python",
      "Excel VBA",
      "Civil 3D QTO",
      "Standard Specifications"
    ],
    "bestFor": "Tender preparation, contractor bidding, and cost estimation."
  },
  {
    "id": "srv-traffic-data-ml",
    "title": "Transportation Data Analytics & Machine Learning",
    "category": "Data Science & AI",
    "description": "Statistical exploratory data analysis, Origin-Destination commuter flow modeling, time-series traffic prediction, and pavement condition ML classifiers.",
    "deliverables": [
      "Cleaned, structured transportation datasets and relational SQL schemas",
      "Exploratory data analysis reports with interactive flow charts and heatmaps",
      "Trained predictive ML models (Congestion forecasting, PCI classification)",
      "Interactive geospatial web dashboards and decision-support tools"
    ],
    "typicalTools": [
      "Python (Pandas, Scikit-Learn, PyTorch)",
      "SQL",
      "QGIS",
      "Kepler.gl"
    ],
    "bestFor": "Smart city initiatives, transport research teams, and data-driven infrastructure firms."
  }
];
