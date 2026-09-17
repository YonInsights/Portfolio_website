import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "infradigital-cad",
    slug: "infradigital-cad-highway-automation-suite",
    title: "Infradigital CAD: Web-Based Highway Design & BIM Automation Suite",
    category: "data",
    subcategory: "Highway Design Software & BIM Automation",
    shortDescription: "Custom-engineered web application (Infradigitalcad.com) automating horizontal/vertical alignment formatting, ERA terrain classification, superelevation computations, and earthwork audits for civil engineers.",
    tools: [
      "Full-Stack Web App",
      "Python / Flask",
      "AutoCAD Civil 3D API",
      "ERA Design Manuals",
      "AASHTO Guidelines",
      "TypeScript / React"
    ],
    role: "Founder, Lead Highway Technologist & Full-Stack Developer",
    keyDeliverable: "Live SaaS Platform (Infradigitalcad.com), Alignment Data Formatters, Terrain Classifiers & Automated CAD Scripts",
    featured: true,
    svgBadge: "civil3d",
    caseStudy: {
      overview: "Infradigital CAD (infradigitalcad.com) is an engineering assistant and automation platform developed by Yonatan Abrham to streamline the repetitive, error-prone tasks in highway alignment drafting, terrain categorization, and quantity verification.",
      problemContext: "Civil engineers spend hundreds of hours manually reformatting total station/GPS coordinate survey data, checking curve compliance against ERA/AASHTO manuals, and computing cross-section earthwork volumes in spreadsheets.",
      myRole: "Conceived, engineered, and launched the full platform from scratch: programmed the geometric calculation engines, built the web interface, implemented ERA/AASHTO standard rule-checkers, and integrated direct CSV/DXF CAD export pipelines.",
      methodology: [
        "Engineered algorithmic alignment data formatters that structure raw chainage coordinates for instant Civil 3D and AutoCAD importing.",
        "Built automated ERA terrain classification algorithms calculating transverse ground slope percentages across corridor corridors.",
        "Implemented AASHTO & ERA superelevation runoff solvers computing transition lengths and maximum side friction factors.",
        "Developed cloud-accessible civil engineering utilities that eliminate cross-sheet transcription errors."
      ],
      softwareTools: [
        "Infradigitalcad.com Live Web Engine",
        "Python (Scientific Algorithms, Geometry Processing)",
        "AutoCAD Civil 3D Scripting & Data Pipelines",
        "React & Tailwind CSS (Frontend Engineering Interface)"
      ],
      engineeringProcess: [
        "Phase 1: Identification of road design bottleneck workflows from consulting practice.",
        "Phase 2: Mathematical formulation of alignment data structuring and terrain algorithms.",
        "Phase 3: Web platform development, responsive CAD data table parser, and validation engine.",
        "Phase 4: Deployment on cloud infrastructure and testing with professional highway designers."
      ],
      keyOutputs: [
        "Live Production Web Platform at Infradigitalcad.com",
        "Automated Alignment Formatter (Horizontal & Vertical)",
        "ERA Ground Slope Terrain Classifier & Road Sign Layout Generator",
        "Interactive Superelevation & Sight Distance Calculation Suite"
      ],
      results: "Reduces alignment data preparation time by over 80% and provides practicing civil engineers and consulting firms with instantaneous, standards-compliant verification tools.",
      lessonsLearned: "Bridging software development with deep civil engineering domain knowledge produces high-impact tools that directly eliminate industrial friction in infrastructure delivery."
    }
  },
  {
    id: "bishoftu-interchange",
    slug: "bishoftu-interchange-and-access-road",
    title: "Design of Bishoftu Interchange and Access Road",
    "category": "highway",
    "subcategory": "Geometric Highway Design & BOQ",
    "shortDescription": "Full geometric design, corridor modeling, hydraulic drainage sizing, and quantity takeoff for a multi-leg highway interchange and connecting arterial access road.",
    "tools": [
      "AutoCAD Civil 3D",
      "ArcGIS Pro",
      "Global Mapper",
      "ERA / AASHTO Standards",
      "Excel VBA"
    ],
    "role": "Lead Highway Design Engineer (Geometric, Corridor & BOQ)",
    "keyDeliverable": "Comprehensive Plan & Profile Drawings, Superelevation Runoff Models, Earthwork BOQ & Drainage Hydraulics",
    "featured": true,
    "svgBadge": "interchange",
    "caseStudy": {
      "overview": "The Bishoftu Interchange and Access Road project addresses critical regional transit bottlenecks, connecting high-speed express corridors with arterial urban access roads while negotiating rolling terrain, drainage catchments, and stringent geometric design safety standards.",
      "problemContext": "Rapid urbanization and freight traffic along the central corridor generated severe peak-hour delays at at-grade junctions. The complex terrain required balancing horizontal curvature radii with vertical crest/sag curves to ensure stopping sight distance (SSD) and passing safety under varying weather conditions.",
      "myRole": "Responsible for horizontal and vertical geometric alignment design, Civil 3D multi-baseline corridor assembly creation, superelevation diagram computations, cross-section generation at 20m intervals, drainage culvert catchment analysis, and automated mass-haul earthwork quantity takeoff.",
      "methodology": [
        "Integrated multi-source topographic survey data and high-resolution DTM/DEM terrain meshes into Civil 3D.",
        "Established horizontal alignment with transition spiral curves (clothoids) satisfying minimum radius R_min = 250m for 80 km/h design speed.",
        "Engineered vertical profile curves (K-values for crest K=29 and sag K=30) ensuring proper stopping sight distances.",
        "Generated complex corridor models with custom subassemblies for travel lanes, paved shoulders, side ditches, and cut/fill daylight slopes.",
        "Executed hydraulic runoff computations (Rational Method) to size cross-drainage pipe and box culverts.",
        "Computed automated earthwork volumes using Average End Area Method and optimized mass-haul balance."
      ],
      "softwareTools": [
        "AutoCAD Civil 3D (Alignment, Profile, Corridor, Sample Lines, Section Views)",
        "ArcGIS Pro (Catchment delineation, watershed flow accumulation, slope maps)",
        "Global Mapper (Point cloud processing and DTM surface extraction)",
        "Microsoft Excel (Geometric check spreadsheets, Superelevation transition calculations, BOQ schedule)"
      ],
      "engineeringProcess": [
        "Phase 1: Terrain surface validation and LiDAR/ground survey triangulation.",
        "Phase 2: Route corridor alternative multi-criteria spatial analysis in GIS.",
        "Phase 3: Horizontal alignment geometry and spiral transition curve parameterization.",
        "Phase 4: Vertical profile grading, vertical curve optimization, and drainage grade coordination.",
        "Phase 5: Corridor modeling with conditional subassemblies for varying cut/fill geology.",
        "Phase 6: Superelevation runoff design (e_max = 6.0%) per ERA/AASHTO guidelines.",
        "Phase 7: Quantity takeoff computation (Earthwork, Subbase, Crushed Stone Base, Asphalt Binder & Wearing Course)."
      ],
      "keyOutputs": [
        "Complete 1:1000 Plan & 1:100 Profile Engineering Drawing Sheets",
        "Cross-Section Plan Set at 20m intervals with Cut/Fill hatching and offsets",
        "Superelevation Runoff Diagrams and Stationing Schedules (STA 0+000 to STA 4+850)",
        "Detailed Bill of Quantities (BOQ) with Itemized Material Schedules",
        "Drainage Layout Plan and Culvert Hydraulic Sizing Report"
      ],
      "results": "Delivered an AASHTO/ERA compliant, constructible geometric design ready for contractor bidding. The optimized vertical profile reduced net earthwork hauling distance by 18% through strategic mass-haul balancing.",
      "lessonsLearned": "Dynamic corridor assemblies and baseline targeting in Civil 3D dramatically accelerate iterative alignment adjustments while maintaining rigorous compliance with superelevation transition standards.",
      "technicalDrawings": [
        {
          "title": "Interchange Geometry & Ramp Alignment Plan",
          "type": "plan",
          "caption": "Horizontal alignment with spiral transition curves, ramp gore geometry, and stationing indicators.",
          "svgType": "interchange"
        },
        {
          "title": "Typical Dual-Carriageway Cross Section",
          "type": "cross-section",
          "caption": "Divided highway cross-section showing 2x3.65m lanes, 2.5m shoulders, asphalt layers, and drainage ditches.",
          "svgType": "cross-section"
        },
        {
          "title": "Vertical Alignment Profile & Superelevation",
          "type": "profile",
          "caption": "Continuous profile with crest/sag vertical curves, K-values, grade percentages, and superelevation runoff.",
          "svgType": "profile-curve"
        }
      ]
    }
  },
  {
    "id": "ai-traffic-addis",
    "slug": "ai-driven-traffic-management-addis-ababa",
    "title": "AI-Driven Intelligent Traffic Management for Urban Congestion",
    "category": "machine-learning",
    "subcategory": "Transportation AI & Predictive Modeling",
    "shortDescription": "Machine learning framework combining time-series forecasting, computer vision vehicle counts, and queueing theory to predict urban congestion hotspots and optimize arterial signal timing.",
    "tools": [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "PyTorch / LSTM",
      "SQL",
      "QGIS",
      "Matplotlib / Seaborn"
    ],
    "role": "Lead Transportation Data Scientist & AI Researcher",
    "keyDeliverable": "Predictive Traffic Congestion Model, Real-Time Flow Heatmap Dashboard & Dynamic Signal Optimization Algorithm",
    "featured": true,
    "svgBadge": "ml",
    "caseStudy": {
      "overview": "Urban traffic congestion in developing metropolitan areas like Addis Ababa leads to substantial economic losses, fuel waste, and emergency response delays. This project applies state-of-the-art machine learning models to historical and sensor-derived traffic data to forecast bottleneck formations 30 to 60 minutes in advance.",
      "problemContext": "Static fixed-time traffic signals fail to adapt to asymmetric morning and evening peak surges, leading to gridlocks at major roundabouts and intersections (e.g., Mexico Square, Megenagna, Meskel Square corridors).",
      "myRole": "Designed the end-to-end data pipeline: extracted and cleaned multi-modal traffic volume datasets, engineered spatial-temporal features, trained and benchmarked multiple ML architectures (Random Forest, XGBoost, LSTM), and integrated outputs into an interactive spatial dashboard.",
      "methodology": [
        "Collected and preprocessed sensor flow rates, historical incident logs, road geometry attributes, and meteorological data.",
        "Engineered temporal lag features (t-15min, t-30min, t-60min), day-of-week cyclical encodings, and spatial neighborhood adjacency graphs.",
        "Trained LSTM neural networks and XGBoost regressors to predict link-level Average Travel Speed and Queue Length.",
        "Formulated a dynamic signal split optimization function based on predicted queue accumulation rates.",
        "Mapped predicted bottleneck probabilities onto a QGIS road network layer."
      ],
      "softwareTools": [
        "Python 3.11 (NumPy, Pandas, Scipy, Statsmodels)",
        "Scikit-Learn & XGBoost (Baseline regression, feature importance analysis)",
        "PyTorch (Recurrent Neural Network & Long Short-Term Memory models for sequential flow)",
        "PostgreSQL / PostGIS (Spatial routing and historical telemetry queries)",
        "QGIS (Spatial visualization of congestion indices across road segments)"
      ],
      "engineeringProcess": [
        "Step 1: Data ingestion, missing value imputation, and sensor anomaly detection.",
        "Step 2: Exploratory Data Analysis (EDA) of diurnal traffic cycles and speed-density relationships.",
        "Step 3: Graph-based road network representation and distance-weighted matrix construction.",
        "Step 4: Machine learning model training, cross-validation, and hyperparameter tuning.",
        "Step 5: Model performance evaluation using RMSE, MAE, and MAPE metrics.",
        "Step 6: Prototype dynamic signal timing algorithm formulation."
      ],
      "keyOutputs": [
        "Trained ML Predictive Model achieving 88.4% directional flow prediction accuracy (R2 = 0.89, MAE = 3.4 km/h)",
        "Urban Congestion Probability Heatmap of Addis Ababa central corridors",
        "Comparative evaluation notebook comparing Random Forest, XGBoost, and LSTM temporal forecasting",
        "Academic Research Paper Proposal on AI in African Intelligent Transportation Systems"
      ],
      "results": "Demonstrated that predictive signal splits could theoretically reduce average vehicle delay by up to 22% during peak bottleneck conditions compared to static fixed-cycle timing.",
      "lessonsLearned": "Incorporating spatial road network topology (upstream and downstream link dependencies) into time-series models significantly outperforms isolated single-intersection predictions.",
      "technicalDrawings": [
        {
          "title": "Spatial-Temporal Congestion Matrix",
          "type": "data-chart",
          "caption": "Hourly congestion index across major arterial corridors showing peak morning and evening surges.",
          "svgType": "traffic-heatmap"
        },
        {
          "title": "Corridor GIS Vulnerability Map",
          "type": "gis-map",
          "caption": "Spatial network graph mapping predicted level of service (LOS) degradation across arterial junctions.",
          "svgType": "gis-corridor"
        }
      ]
    }
  },
  {
    "id": "jimma-corridor",
    "slug": "jimma-corridor-highway-geometric-design",
    "title": "Jimma Corridor Highway Geometric Design & Realignment",
    "category": "highway",
    "subcategory": "Corridor Geometric Design & Terrain Engineering",
    "shortDescription": "Geometric redesign and safety upgrade of a mountainous highway corridor featuring sharp hairpin turns, steep gradients, and high cut slopes.",
    "tools": [
      "AutoCAD Civil 3D",
      "Global Mapper",
      "ArcGIS Pro",
      "ERA Low Volume / Trunk Standards"
    ],
    "role": "Highway Design Engineer",
    "keyDeliverable": "Realigned Horizontal/Vertical Alignment, Sight Distance Safety Audit & Slope Stabilization Layouts",
    "featured": false,
    "svgBadge": "civil3d",
    "caseStudy": {
      "overview": "A comprehensive highway geometric redesign project aimed at eliminating accident-prone blackspots, improving climbing lane geometry on steep grades (>7%), and modernizing road infrastructure through mountainous terrain.",
      "problemContext": "Substandard curve radii (<100m) and limited stopping sight distances on steep mountain slopes contributed to frequent heavy freight vehicle rollovers and traffic blockages.",
      "myRole": "Developed alternative alignment corridors, engineered switchback curve geometry with proper widening on curves, and verified cut/fill slope stability with Civil 3D daylight criteria.",
      "methodology": [
        "Survey data reduction and DEM surface filtering for complex mountainous topography.",
        "Horizontal curve widening calculations per design vehicle (WB-15/WB-20 intermediate semi-trailers).",
        "Vertical alignment grading to minimize earthwork while ensuring maximum grade does not exceed 7.0%.",
        "Climbing lane warrant analysis and geometric integration."
      ],
      "softwareTools": [
        "AutoCAD Civil 3D",
        "ArcGIS Pro",
        "Global Mapper",
        "Microsoft Excel"
      ],
      "engineeringProcess": [
        "Topographic surface modeling from LiDAR point clouds.",
        "Horizontal alignment optimization with curve widening for heavy freight trucks.",
        "Profile design with critical length of grade evaluation for climbing lanes.",
        "Cross-section assembly drafting with benching for deep cut slopes (>8m)."
      ],
      "keyOutputs": [
        "Complete Alignment Plan & Profile Drawings (1:1000 / 1:100)",
        "Curve Widening and Superelevation Tabulation Tables",
        "Earthwork Cut/Fill Volume Calculations and Mass Haul Diagram"
      ],
      "results": "Successfully flattened dangerous curves to meet R_min = 150m standards and added dedicated truck climbing lanes, drastically enhancing corridor safety.",
      "lessonsLearned": "In steep terrain, integrating geological benching criteria directly into Civil 3D subassembly daylight parameters prevents costly redesigns during construction."
    }
  },
  {
    "id": "road-network-gis-vulnerability",
    "slug": "road-network-gis-vulnerability-analysis",
    "title": "Road Network Spatial Vulnerability & Accessibility Analysis",
    "category": "gis",
    "subcategory": "Spatial Analytics & Multi-Criteria Evaluation",
    "shortDescription": "Spatial GIS framework assessing regional road network connectivity, flood/landslide susceptibility, and travel-time accessibility to emergency facilities.",
    "tools": [
      "ArcGIS Pro",
      "QGIS",
      "PostGIS",
      "Python (GeoPandas, Shapely, NetworkX)",
      "OpenStreetMap Data"
    ],
    "role": "GIS & Spatial Analyst",
    "keyDeliverable": "Multi-Criteria Network Vulnerability Map, Isochrone Accessibility Iso-surfaces & Culvert Flood Risk Index",
    "featured": false,
    "svgBadge": "gis",
    "caseStudy": {
      "overview": "Regional infrastructure resilience requires identifying which road links are most vulnerable to natural disruptions and what impact link failures have on regional mobility.",
      "problemContext": "During heavy monsoon seasons, flash floods and slope failures isolate rural communities from hospitals and markets, highlighting the need for prioritized infrastructure investments.",
      "myRole": "Processed spatial vector and raster datasets, constructed network topology graphs, conducted Multi-Criteria Decision Analysis (AHP-MCDA), and generated accessibility isochrones.",
      "methodology": [
        "Extracted and topologically cleaned road centerlines from survey and OSM data.",
        "Computed terrain slope, soil erodibility, stream proximity, and rainfall intensity raster layers.",
        "Executed Analytical Hierarchy Process (AHP) to weight disaster vulnerability factors.",
        "Calculated shortest-path network routing and isolated node centrality using NetworkX."
      ],
      "softwareTools": [
        "ArcGIS Pro",
        "QGIS 3.34",
        "PostGIS / PostgreSQL",
        "Python (GeoPandas, Rasterio, NetworkX)"
      ],
      "engineeringProcess": [
        "Spatial data acquisition and coordinate reference system (CRS) homogenization (WGS 84 / UTM Zone 37N).",
        "Raster overlay analysis for multi-hazard susceptibility index computation.",
        "Network topological routing and critical bridge/culvert bottleneck identification.",
        "Publication-ready cartographic layout and dashboard generation."
      ],
      "keyOutputs": [
        "Regional Road Infrastructure Vulnerability Spatial Atlas (GeoTIFF / PDF)",
        "Emergency Service Travel-Time Isochrone Maps (15, 30, 45, 60-minute reach)",
        "Prioritized Culvert and Bridge Retrofitting Priority Ranking"
      ],
      "results": "Identified the top 12% critical road segments whose failure would disconnect over 35,000 rural residents from secondary healthcare facilities.",
      "lessonsLearned": "Graph theory algorithms (betweenness centrality) combined with spatial terrain rasters provide actionable insight for infrastructure investment prioritization."
    }
  },
  {
    "id": "roundabout-intersection-design",
    "slug": "urban-roundabout-and-junction-geometric-design",
    "title": "Urban Roundabout & Junction Optimization Design",
    "category": "highway",
    "subcategory": "Intersection Geometry & Traffic Safety",
    "shortDescription": "Geometric design and capacity optimization of a 4-leg urban roundabout replacing an accident-prone unsignalized junction.",
    "tools": [
      "AutoCAD Civil 3D",
      "Vehicle Tracking",
      "Excel Capacity Modeling",
      "AASHTO / NCHRP 672"
    ],
    "role": "Highway & Traffic Design Engineer",
    "keyDeliverable": "Inscribed Circle Diameter Geometry, Entry/Exit Deflection Path Curves, Fastest Path Speed Analysis & BOQ",
    "featured": false,
    "svgBadge": "roundabout",
    "caseStudy": {
      "overview": "Redesign of an overloaded urban intersection into a modern roundabout designed in accordance with NCHRP Report 672 guidelines, balancing vehicle throughput and pedestrian refuge.",
      "problemContext": "High angle collision rates and severe peak-hour queueing at an unsignalized cross-intersection.",
      "myRole": "Performed swept path analysis for standard design vehicles, engineered splitter island geometry, established entry deflection angles, and drafted pavement marking plans.",
      "methodology": [
        "Calculated Inscribed Circle Diameter (ICD = 48m) for multi-lane entry.",
        "Modeled fastest vehicle travel paths (R1 entry, R2 circulating, R3 exit, R4 left-turn, R5 right-turn) to enforce entry speeds < 40 km/h.",
        "Conducted swept path simulations for WB-15 trucks and articulated city transit buses.",
        "Engineered truck apron (overrunable area) with mountable curb details."
      ],
      "softwareTools": [
        "AutoCAD Civil 3D",
        "AutoCAD Vehicle Tracking",
        "Microsoft Excel",
        "AASHTO Standards"
      ],
      "engineeringProcess": [
        "Traffic volume turning movement count analysis (AM/PM peaks).",
        "Geometric center point and ICD sizing.",
        "Entry curb radius, exit curb radius, and entry flare design.",
        "Fastest path speed checks and visibility triangle verification.",
        "Pavement marking and regulatory sign layout drafting."
      ],
      "keyOutputs": [
        "Complete Geometric Roundabout Layout & Staking Coordinates Sheet",
        "Fastest Path Trajectory & Speed Control Analysis Report",
        "Swept Path Vehicle Tracking Simulation Turn Templates",
        "Signage, Striping, and Pedestrian Crossing Detail Drawings"
      ],
      "results": "Achieved optimal speed reduction (entry speeds lowered to 32 km/h) while increasing total junction entry capacity by 28% without requiring signal power infrastructure.",
      "lessonsLearned": "Correct entry deflection is the single most critical geometric factor in modern roundabout design to eliminate high-speed angle collisions."
    }
  },
  {
    "id": "civil3d-corridor-visualization",
    "slug": "civil3d-highway-corridor-3d-modeling",
    "title": "Civil 3D Highway Corridor 3D Digital Modeling & Visualization",
    "category": "visualization",
    "subcategory": "Digital Infrastructure & BIM",
    "shortDescription": "High-detail 3D corridor modeling, multi-baseline assembly targets, digital terrain draping, and realistic infrastructure rendering.",
    "tools": [
      "AutoCAD Civil 3D",
      "Autodesk InfraWorks",
      "Navisworks",
      "Twinmotion / 3ds Max"
    ],
    "role": "Digital Highway & 3D Visualization Specialist",
    "keyDeliverable": "3D Corridor Surface Model, Multi-Baseline Civil 3D Assemblies, Video Flythrough & Client Presentation Renders",
    "featured": false,
    "svgBadge": "civil3d",
    "caseStudy": {
      "overview": "Creation of a high-fidelity digital twin and 3D visualization model of a dual-carriageway highway corridor, including bridges, culverts, retaining walls, signage, and roadside landscaping for stakeholder presentations and engineering reviews.",
      "problemContext": "Complex interchange ramps and retaining wall transitions needed clear visual validation to detect elevation clashes and communicate design intent to non-technical client executives.",
      "myRole": "Built parametric Civil 3D corridor assemblies with custom subassemblies, integrated structural bridge models, draped orthophotography onto terrain, and generated rendered perspectives and flythrough animations.",
      "methodology": [
        "Assembled custom parametric cross-sections in Civil 3D Subassembly Composer.",
        "Assigned horizontal and vertical targets for pavement widening, curb returns, and daylight slopes.",
        "Exported corridor solid geometry to Autodesk InfraWorks for environmental context and lighting setup.",
        "Conducted clash detection between drainage pipe networks and bridge footing foundations in Navisworks."
      ],
      "softwareTools": [
        "AutoCAD Civil 3D",
        "Autodesk InfraWorks",
        "Autodesk Navisworks",
        "Twinmotion",
        "Adobe Photoshop"
      ],
      "engineeringProcess": [
        "Parametric corridor modeling and surface creation.",
        "Material mapping and texture assignment to asphalt, concrete curbs, grass verges, and guardrails.",
        "InfraWorks contextual environment lighting and terrain draping.",
        "Camera path keyframing for 4K video flythrough generation."
      ],
      "keyOutputs": [
        "Fully Rendered 4K 3D Perspective Visualizations (Day & Night)",
        "60-second 3D Corridor Flythrough Animation Video",
        "Civil 3D 3D Solid Export Package (IFC/DWG) for BIM Coordination",
        "Clash Detection Clearance Validation Report"
      ],
      "results": "Facilitated rapid client executive sign-off by clearly illustrating sightlines, interchange aesthetics, and environmental integration prior to groundbreaking.",
      "lessonsLearned": "Leveraging Civil 3D Corridor Solids directly in visualization software preserves millimetric engineering accuracy while providing photorealistic renders."
    }
  },
  {
    "id": "road-drainage-hydraulics",
    "slug": "road-drainage-and-hydraulic-culvert-design",
    "title": "Road Drainage & Hydraulic Culvert Catchment Analysis",
    "category": "highway",
    "subcategory": "Hydrology, Hydraulics & Drainage Structures",
    "shortDescription": "Catchment watershed delineation, peak discharge calculation (Rational & SCS-CN Methods), and hydraulic sizing of pipe and box culverts for trunk roads.",
    "tools": [
      "ArcGIS Pro",
      "Global Mapper",
      "AutoCAD Civil 3D",
      "HY-8 / HEC-RAS",
      "Excel Hydraulic Spreadsheets"
    ],
    "role": "Drainage & Hydraulic Design Engineer",
    "keyDeliverable": "Catchment Watershed Delineation Map, Culvert Hydraulic Sizing Schedule & Drainage Structural Drawings",
    "featured": false,
    "svgBadge": "drainage",
    "caseStudy": {
      "overview": "Comprehensive surface and sub-surface drainage design for a 35 km highway corridor subject to seasonal torrential runoff, protecting pavement structural integrity and preventing road washouts.",
      "problemContext": "Inadequate roadside ditch capacity and undersized culverts historically caused severe road shoulder erosion, pavement base saturation, and periodic traffic interruptions.",
      "myRole": "Delineated watershed basins from DEMs, calculated 10-year, 25-year, and 50-year design flood discharges, sized reinforced concrete pipe (RCP) and reinforced concrete box (RCBC) culverts, and engineered energy dissipation structures.",
      "methodology": [
        "Hydrological modeling using Rational Method for small basins (<0.8 km2) and SCS Unit Hydrograph for larger catchments.",
        "Intensity-Duration-Frequency (IDF) curve synthesis from regional meteorological station data.",
        "Hydraulic culvert sizing (Inlet vs Outlet Control analysis) to ensure Headwater-to-Diameter (HW/D) ratio < 1.2 at 25-year peak flow.",
        "Trapezoidal roadside ditch Manning equation sizing for longitudinal drainage."
      ],
      "softwareTools": [
        "ArcGIS Pro (Hydrology toolset)",
        "Global Mapper",
        "AutoCAD Civil 3D",
        "Microsoft Excel Hydraulic Solver"
      ],
      "engineeringProcess": [
        "DEM sink filling, flow direction, and flow accumulation grid generation.",
        "Watershed boundary delineation at all road stream crossing locations.",
        "Runoff coefficient (C) and Curve Number (CN) computation based on soil and land cover.",
        "Culvert barrel sizing, invert elevation fixing, and riprap apron scour protection design.",
        "Drafting longitudinal drainage ditch profiles and outlet detail drawings."
      ],
      "keyOutputs": [
        "Corridor Drainage Catchment Map with Watershed Boundaries (1:10000)",
        "Culvert Hydraulic Sizing Summary Table (50+ crossing structures)",
        "Standard Reinforced Concrete Culvert Structural Drawings (Single/Double Box & Pipes)",
        "Longitudinal Ditch Profile Sheets and Scour Energy Dissipator Details"
      ],
      "results": "Engineered a resilient drainage network that eliminates overtopping risks and prevents subgrade moisture degradation, extending pavement design lifespan.",
      "lessonsLearned": "Accurate DEM depression-filling in GIS prior to flow accumulation is paramount to prevent erroneous culvert catchment area underestimation."
    }
  },
  {
    "id": "road-quantity-takeoff-boq",
    "slug": "automated-road-quantity-takeoff-and-boq",
    "title": "Automated Road Quantity Takeoff & BOQ Computation System",
    "category": "data",
    "subcategory": "Data Analytics & Infrastructure Cost Engineering",
    "shortDescription": "Automated pipeline extracting Civil 3D section volume data, material layers, and structural quantities into standardized Bill of Quantities (BOQ) with dynamic pricing models.",
    "tools": [
      "Python",
      "Excel VBA",
      "AutoCAD Civil 3D",
      "SQL",
      "ERA Standard Technical Specs"
    ],
    "role": "Quantity Takeoff & Cost Engineer",
    "keyDeliverable": "Automated BOQ Extraction Tool, Mass Haul Earthwork Balance Model & Standardized Pay Item Schedule",
    "featured": false,
    "svgBadge": "boq",
    "caseStudy": {
      "overview": "Development of an automated data extraction and computation workflow that bridges Civil 3D corridor volume reports with standard highway Bill of Quantities (BOQ) pay items (Division 1000 to 7000 per ERA standards).",
      "problemContext": "Manual quantity takeoff from hundreds of cross-section sheets is error-prone, labor-intensive, and introduces discrepancies when alignment iterations occur.",
      "myRole": "Structured relational data tables, wrote Python and VBA scripts to parse Civil 3D XML/CSV volume outputs, automated cut/fill bulk density shrinkage/swell corrections, and calculated unit rate itemizations.",
      "methodology": [
        "Extracted station-by-station volume reports from Civil 3D Material Sections.",
        "Implemented shrinkage (15%) and swell (20%) compaction adjustment factors for rocky and cohesive soils.",
        "Mapped geometric elements to standardized Standard Method of Measurement (CESMM4 / ERA) item numbers.",
        "Created a dynamic parameter-driven pricing model enabling rapid sensitivity testing."
      ],
      "softwareTools": [
        "Python 3.11 (Pandas, OpenPyXL)",
        "Excel VBA",
        "AutoCAD Civil 3D QTO Manager",
        "SQLite"
      ],
      "engineeringProcess": [
        "Schema design for road construction pay items (Clearing, Earthwork, Subbase, Crushed Stone Base, Asphalt, Drainage, Ancillaries).",
        "Data extraction script creation for Civil 3D XML section reports.",
        "Automated mass-haul balancing algorithm with free-haul and overhaul distance calculations.",
        "Automated generation of formatted tender-ready BOQ Excel workbooks."
      ],
      "keyOutputs": [
        "Automated Python/VBA BOQ Generation Suite",
        "Standardized 7-Division Bill of Quantities Workbook",
        "Earthwork Mass Haul Balance Graph & Borrow Pit Hauling Schedule",
        "Material Takeoff Comparison Variance Report"
      ],
      "results": "Cut quantity takeoff preparation time from 4 days to 45 minutes for alignment revisions, virtually eliminating cross-sheet calculation discrepancies.",
      "lessonsLearned": "Standardizing pay item code taxonomies across engineering drawings and BOQ spreadsheets is the backbone of automated digital infrastructure delivery."
    }
  },
  {
    "id": "pavement-condition-ml",
    "slug": "pavement-condition-index-ml-prediction",
    "title": "Pavement Condition Index (PCI) Machine Learning Classifier",
    "category": "machine-learning",
    "subcategory": "Predictive Infrastructure Asset Management",
    "shortDescription": "Supervised machine learning model classifying highway pavement distress severity and forecasting Pavement Condition Index (PCI) degradation trajectories.",
    "tools": [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Matplotlib",
      "XGBoost",
      "Random Forest",
      "GIS"
    ],
    "role": "Data Scientist & Pavement Analytics Specialist",
    "keyDeliverable": "Trained PCI Degradation Classifier, Feature Importance Report & Maintenance Prioritization Matrix",
    "featured": false,
    "svgBadge": "pci",
    "caseStudy": {
      "overview": "Applied machine learning classifiers to predict Pavement Condition Index (PCI) ratings (Good, Satisfactory, Fair, Poor, Serious, Failed) based on cumulative Equivalent Single Axle Loads (ESALs), pavement age, layer thicknesses, drainage quality, and climate indices.",
      "problemContext": "Road agencies lack automated tools to forecast which highway sections will degrade rapidly, leading to reactive and costly full-depth reconstructions rather than proactive, low-cost preventive sealings.",
      "myRole": "Formulated the problem, cleaned and normalized historical pavement distress data (alligator cracking, rutting, potholes, ravelling), trained ensemble classification models, and built an automated maintenance decision matrix.",
      "methodology": [
        "Aggregated 10+ years of pavement condition survey datasets with 15 engineered features.",
        "Addressed class imbalance across severe distress classes using SMOTE (Synthetic Minority Over-sampling Technique).",
        "Trained and validated Random Forest, XGBoost, and Support Vector Classifiers using 5-fold cross-validation.",
        "Extracted SHAP (SHapley Additive exPlanations) values to interpret feature impacts on road degradation speed."
      ],
      "softwareTools": [
        "Python (Pandas, Scikit-Learn, XGBoost, SHAP, Seaborn)",
        "Jupyter Notebook",
        "QGIS"
      ],
      "engineeringProcess": [
        "Data cleaning, missing value filtering, and ASTM D6433 PCI calculation standard mapping.",
        "Exploratory data analysis of pavement life-cycle deterioration curves.",
        "Model training, hyperparameter optimization via GridSearchCV, and confusion matrix analysis.",
        "Feature importance ranking revealing that drainage rating and heavy truck percentage drive 64% of rapid failures.",
        "Exporting predictions to GIS for spatial infrastructure asset mapping."
      ],
      "keyOutputs": [
        "Trained Random Forest & XGBoost Classifier (91.2% Overall F1-Score)",
        "SHAP Interpretability Feature Importance Report",
        "Proactive Pavement Maintenance Prioritization Decision Matrix",
        "GIS Road Segment Deterioration Forecast Map"
      ],
      "results": "Demonstrated that prioritizing seal-coating based on predictive ML classification could save up to 30% in 10-year road network maintenance budgets by arresting structural decay early.",
      "lessonsLearned": "Machine learning bridges the gap between pavement engineering physics and large-scale asset management, empowering road agencies with data-backed budgeting."
    }
  },
  {
    "id": "origin-destination-traffic-analytics",
    "slug": "transportation-od-matrix-data-analytics",
    "title": "Transportation Corridor Origin-Destination Data Analytics",
    "category": "data",
    "subcategory": "Transportation Big Data & Flow Analytics",
    "shortDescription": "Large-scale exploratory data analysis and spatial clustering of metropolitan commuter mobility patterns to inform arterial road expansion planning.",
    "tools": [
      "Python",
      "SQL / PostgreSQL",
      "Pandas",
      "Seaborn",
      "Kepler.gl",
      "Geopandas"
    ],
    "role": "Transportation Data Analyst",
    "keyDeliverable": "Interactive Origin-Destination Chord Diagrams, Trip Distance Distribution Models & Corridor Expansion Recommendation",
    "featured": false,
    "svgBadge": "traffic",
    "caseStudy": {
      "overview": "Comprehensive data analysis of metropolitan travel demand, passenger flow distributions, and trip generation rates across traffic analysis zones (TAZs) to support evidence-based highway corridor capacity expansions.",
      "problemContext": "Traditional manual roadside passenger interviews capture limited sample sizes. Combining spatial trip records and transit survey logs required robust exploratory analytics and visualization.",
      "myRole": "Wrote SQL aggregation queries, cleaned messy multi-source movement logs, applied DBSCAN clustering to identify major trip generation centroids, and produced interactive visual flows.",
      "methodology": [
        "Parsed and filtered over 500,000 spatial mobility records using SQL and Pandas.",
        "Applied DBSCAN spatial clustering to detect high-density pick-up and drop-off traffic clusters.",
        "Constructed Origin-Destination (O-D) flow matrices across 45 administrative sub-zones.",
        "Calculated travel-time decay functions and peak-hour trip generation rates."
      ],
      "softwareTools": [
        "Python (Pandas, GeoPandas, NumPy, Scikit-Learn)",
        "PostgreSQL",
        "Kepler.gl",
        "Plotly / Seaborn"
      ],
      "engineeringProcess": [
        "Data ingestion, coordinate filtering, and noise removal.",
        "Spatial join of trip coordinate pairs with administrative Traffic Analysis Zones (TAZ).",
        "SQL group-by aggregations for directional flow volume ranking.",
        "Interactive map and chord diagram generation for transportation planners."
      ],
      "keyOutputs": [
        "Metropolitan Origin-Destination Flow Matrix and Chord Diagrams",
        "Interactive Kepler.gl Spatial Mobility Web Map",
        "Peak-Hour Trip Distance & Travel Time Distribution Report",
        "Arterial Highway Capacity Expansion Priority Brief"
      ],
      "results": "Pinpointed three previously unmonitored high-volume orbital travel corridors that bypass the city center, providing the empirical justification for new ring-road bypass links.",
      "lessonsLearned": "Data analytics turns raw spatial movements into clear engineering evidence, ensuring capital road investments directly target actual commuter bottlenecks."
    }
  },
  {
    "id": "terrain-slope-gis-mapping",
    "slug": "terrain-and-slope-stability-gis-corridor-mapping",
    "title": "Terrain & Slope Stability GIS Corridor Mapping",
    "category": "gis",
    "subcategory": "Terrain Modeling & Geological Hazard GIS",
    "shortDescription": "Digital elevation model (DEM) terrain processing, slope aspect modeling, and cut/fill earthwork hazard zonation for highway alignment selection.",
    "tools": [
      "ArcGIS Pro",
      "QGIS",
      "Global Mapper",
      "Python (GDAL, Rasterio)",
      "SRTM / ALOS DEMs"
    ],
    "role": "GIS & Terrain Analyst",
    "keyDeliverable": "High-Resolution Slope Gradient Map, Terrain Cut Suitability Index & Alignment Risk Heatmap",
    "featured": false,
    "svgBadge": "gis",
    "caseStudy": {
      "overview": "Spatial terrain characterization across a 60 km candidate highway corridor, evaluating topography, slope gradients, watershed boundaries, and geological cut hazard zones to select the optimal geometric alignment route.",
      "problemContext": "Selecting highway alignments without detailed terrain analysis leads to excessive cut/fill quantities, unstable side slopes, and high construction costs.",
      "myRole": "Processed 12.5m resolution ALOS PALSAR DEMs, generated slope gradient, aspect, and curvature rasters, and integrated geological fault lines to compute an Alignment Suitability Index.",
      "methodology": [
        "Extracted contour vectors (1m and 5m intervals) and generated triangular irregular networks (TIN).",
        "Classified slope angles into standard engineering zones (<5% Flat, 5-15% Rolling, 15-30% Mountainous, >30% Steep Escarpment).",
        "Calculated Least-Cost Path alignments in GIS balancing terrain grade constraints and distance.",
        "Exported terrain surfaces directly into Civil 3D for geometric design."
      ],
      "softwareTools": [
        "ArcGIS Pro",
        "QGIS",
        "Global Mapper",
        "Python GDAL",
        "AutoCAD Civil 3D"
      ],
      "engineeringProcess": [
        "DEM mosaicing, reprojection, and vertical exaggeration analysis.",
        "Topographic slope and hydrological flow direction calculation.",
        "Multi-factor raster overlay for corridor corridor ranking.",
        "Exporting 3D surface meshes for highway engineering teams."
      ],
      "keyOutputs": [
        "Corridor Slope & Aspect Geomorphic Classification Map",
        "Least-Cost Path Alignment Alternatives Comparison Sheet",
        "3D Surface TIN Mesh package for Civil 3D Corridor Modeling"
      ],
      "results": "Identified an optimal northern route bypass that avoided 4.2 km of unstable >35% side-slopes, reducing estimated earthwork excavation costs by 22%.",
      "lessonsLearned": "Thorough GIS terrain pre-processing before entering Civil 3D ensures highway alignments align naturally with existing topography."
    }
  },
  {
    "id": "urban-intersection-3d-viz",
    "slug": "urban-intersection-3d-engineering-visualization",
    "title": "Urban Intersection 3D Engineering & Landscape Visualization",
    "category": "visualization",
    "subcategory": "3D Presentation & Visual Impact Assessment",
    "shortDescription": "Photorealistic 3D engineering renders of urban intersections, pedestrian overpasses, traffic signal gantries, and roadside green infrastructure.",
    "tools": [
      "Autodesk InfraWorks",
      "AutoCAD Civil 3D",
      "Twinmotion",
      "Adobe Photoshop"
    ],
    "role": "3D Visualization & Presentation Engineer",
    "keyDeliverable": "High-Resolution 3D Presentation Views, Visual Impact Assessment Images & Lighting Simulation",
    "featured": false,
    "svgBadge": "civil3d",
    "caseStudy": {
      "overview": "3D rendering and visual impact assessment of a modernized urban intersection incorporating dedicated bus lanes, grade-separated pedestrian skywalks, and landscaped medians.",
      "problemContext": "Municipal stakeholders and civic planners required clear, accessible 3D visual materials to understand how the new highway geometry would integrate with the existing urban landscape and pedestrian flows.",
      "myRole": "Modeled the 3D infrastructure elements, configured accurate physical lighting and atmospheric conditions, mapped realistic PBR materials, and rendered high-resolution presentation scenes.",
      "methodology": [
        "Imported Civil 3D alignments and pavement geometry into Autodesk InfraWorks.",
        "Added realistic street furniture, lighting poles, traffic signals, and contextual building masses.",
        "Rendered daytime and night-time perspectives to verify driver visibility and aesthetic lighting quality.",
        "Created comparative Before vs After visual slider boards."
      ],
      "softwareTools": [
        "Autodesk InfraWorks",
        "AutoCAD Civil 3D",
        "Twinmotion",
        "Adobe Photoshop"
      ],
      "engineeringProcess": [
        "CAD geometry import and alignment verification.",
        "Vegetation and landscape asset placement.",
        "Sun study and shadow analysis at various times of day.",
        "Final post-processing and presentation board assembly."
      ],
      "keyOutputs": [
        "Set of 6 High-Resolution 4K Presentation Renderings",
        "Pedestrian Sightline and Driver Perspective Visual Views",
        "Before vs After Infrastructure Transformation Comparison Boards"
      ],
      "results": "Provided the visual centerpieces for municipal planning approval meetings, receiving unanimous praise from urban planning commissioners.",
      "lessonsLearned": "3D engineering visualization is an essential communication bridge that translates complex CAD engineering drawings into intuitive, compelling real-world imagery."
    }
  },
  {
    id: "harar-kombolcha-road",
    slug: "harar-kombolcha-ejersagoro-road-project",
    title: "Harar-Kombolcha-Ejersagoro-Fugnanbira-Bombas Road (97.22 km)",
    category: "highway",
    subcategory: "Trunk Highway Engineering & Construction Support",
    shortDescription: "Geometric design review, contractor cross-section verification, right-of-way resolution, and quantity takeoff for a 97.22 km major regional corridor in eastern Ethiopia.",
    tools: [
      "AutoCAD Civil 3D",
      "AutoCAD",
      "ERA Design Manuals",
      "Excel (BOQ Modeling)",
      "AASHTO Guidelines"
    ],
    role: "Junior Highway Design Engineer (Best Consulting Engineers PLC)",
    keyDeliverable: "Contractor Cross-Section Verifications, Right-of-Way Realignment Plans, Earthwork Computations & Technical Reports",
    featured: false,
    svgBadge: "civil3d",
    caseStudy: {
      overview: "Engineering design review and construction technical support for the Harar-Kombolcha-Ejersagoro-Fugnanbira-Bombas & Ejersagoro-Ahmed Imam 97.22 km road corridor for the Ethiopian Roads Administration (ERA).",
      problemContext: "Extensive rural and peri-urban corridor with varied soil conditions, severe topography, and frequent right-of-way (ROW) conflicts requiring iterative cross-section verification and geometric adjustments.",
      myRole: "Collaborated directly with civil contractors and ERA client representatives, verified contractor cross-sections, calculated earthwork cut/fill quantities, resolved right-of-way conflicts via geometric realignment, and managed technical reporting.",
      methodology: [
        "Reviewed and verified contractor-submitted cross-section templates at regular chainage intervals.",
        "Computed cut/fill earthwork volumes and verified pavement subbase/base course material takeoffs.",
        "Engineered localized alignment realignments to circumvent property encroachments and severe rock cuts.",
        "Compiled technical compliance reports and documentation for regulatory and client sign-off."
      ],
      softwareTools: [
        "AutoCAD Civil 3D",
        "AutoCAD",
        "Microsoft Excel (BOQ & Quantity Spreadsheets)",
        "ERA Standard Technical Specifications"
      ],
      engineeringProcess: [
        "Phase 1: Alignment and survey ground control verification.",
        "Phase 2: Cross-section verification and subgrade layer thickness checks.",
        "Phase 3: Right-of-way conflict identification and collaborative geometric realignment.",
        "Phase 4: Material volume audit and Interim Payment Certificate (IPC) quantity verification."
      ],
      keyOutputs: [
        "Verified Contractor Cross-Section Plan Sets (97.22 km)",
        "Right-of-Way Collaborative Realignment Sheets",
        "Material Takeoff & Earthwork Verification Schedules",
        "Comprehensive Project Design & Inspection Reports"
      ],
      results: "Successfully resolved complex right-of-way challenges across key town sections while maintaining design speed standards, ensuring continuous progress across all 97.22 kilometers.",
      lessonsLearned: "Close field coordination between consulting engineers, contractors, and local communities is essential for navigating right-of-way constraints without delaying execution."
    }
  },
  {
    id: "eleka-ai-chatbot",
    slug: "eleka-ai-personalized-learning-chatbot",
    title: "Eleka Inc. AI Chatbot & Adaptive Learning Roadmap Engine",
    category: "machine-learning",
    subcategory: "NLP, Conversational AI & Data Engineering",
    shortDescription: "AI-driven recommendation and conversational chatbot engine that analyzes user learning profiles and generates personalized curriculum roadmaps with automated PDF export.",
    tools: [
      "Python",
      "NLP (Natural Language Processing)",
      "Scikit-Learn",
      "Pandas / NumPy",
      "REST APIs",
      "ReportLab / PDF Automation"
    ],
    role: "Machine Learning Engineer (Freelance / Eleka Inc., Rwanda)",
    keyDeliverable: "Adaptive Recommendation Algorithm, Interactive Chatbot Microservice & Automated PDF Curriculum Generation Pipeline",
    featured: false,
    svgBadge: "ml",
    caseStudy: {
      overview: "Developed a personalized AI recommendation and conversational assistant engine for Eleka Inc. that diagnoses individual learner skill baselines, goals, and learning styles to formulate custom learning paths.",
      problemContext: "Learners face cognitive overload when navigating generic online course catalogs, leading to high drop-off rates and inefficient learning journeys.",
      myRole: "Engineered NLP text processing algorithms, designed customer profile feature vectors, implemented adaptive recommendation logic, and built an automated Python PDF generator for exportable learning roadmaps.",
      methodology: [
        "Constructed user profile embeddings based on stated career goals, current experience levels, and preferred learning media.",
        "Trained NLP classification models to parse conversational queries and match intent with modular skill ontologies.",
        "Built dynamic ranking algorithms to sequence learning modules based on prerequisite dependencies.",
        "Developed an automated PDF generation pipeline using Python to deliver styled, printable study plans."
      ],
      softwareTools: [
        "Python 3.11",
        "Scikit-Learn & SpaCy / NLTK",
        "Pandas & NumPy",
        "FastAPI / REST API",
        "ReportLab (Automated PDF generation)"
      ],
      engineeringProcess: [
        "User intent taxonomic hierarchy design and data collection.",
        "Recommendation algorithm development and cold-start handling.",
        "Conversational dialog flow orchestration and context state management.",
        "Automated PDF document design and dynamic rendering microservice integration."
      ],
      keyOutputs: [
        "End-to-End Conversational Recommendation AI Microservice",
        "Automated Dynamic PDF Curriculum Export Pipeline",
        "Comprehensive API Documentation and Evaluation Benchmarks"
      ],
      results: "Significantly boosted user onboarding completion rates and enabled automated, instant distribution of customized learning curricula.",
      lessonsLearned: "Coupling NLP intent classification with structured deterministic document generation creates practical, high-value AI solutions that users can immediately action."
    }
  },
  {
    id: "ayat-tsebel-3d",
    slug: "ayat-tsebel-concept-design-3d-visualization",
    title: "Ayat Tsebel Infrastructure Concept Design & 3D Visualization",
    category: "visualization",
    subcategory: "Urban Infrastructure & 3D Presentation",
    shortDescription: "Conceptual civil infrastructure design, 3D architectural corridor modeling, and cinematic video rendering for client executive presentation.",
    tools: [
      "AutoCAD Civil 3D",
      "Autodesk InfraWorks",
      "Adobe Premiere Pro",
      "Adobe Photoshop",
      "G&Y Consulting Standards"
    ],
    role: "3D Infrastructure Visualization Specialist (G&Y Consulting Engineers)",
    keyDeliverable: "3D Concept Models, Photo-Realistic Renders & Cinematic Video Walkthrough",
    featured: false,
    svgBadge: "civil3d",
    caseStudy: {
      overview: "Creation of a conceptual infrastructure design and high-impact 3D visual presentation for the Ayat Tsebel development project in collaboration with G&Y Consulting Engineers plc.",
      problemContext: "The project required an attractive, highly realistic visual presentation to convey the site geometry, road access, and environmental context to investors and municipal authorities.",
      myRole: "Developed the 3D infrastructure concept models, textured roadways and landscape elements, set up atmospheric illumination, and produced a cinematic video render for client presentation.",
      methodology: [
        "Integrated site survey contours and layout plans into 3D CAD modeling software.",
        "Engineered roadway access, pedestrian promenades, and landscaped drainage swales.",
        "Applied realistic physical materials, lighting, and environmental assets in InfraWorks and 3D rendering engines.",
        "Edited and post-processed cinematic flythrough video with titles and presentation callouts in Premiere Pro."
      ],
      softwareTools: [
        "AutoCAD Civil 3D",
        "Autodesk InfraWorks",
        "Adobe Premiere Pro",
        "Adobe Photoshop",
        "Adobe After Effects"
      ],
      engineeringProcess: [
        "Conceptual geometry layout and digital terrain elevation modeling.",
        "3D surface modeling and material texture mapping.",
        "Camera choreography and keyframe animation for video flythrough.",
        "Post-production video editing and client presentation package compilation."
      ],
      keyOutputs: [
        "Cinematic 3D Video Walkthrough & Client Presentation Render",
        "High-Resolution 4K Rendered Architectural Perspectives",
        "Conceptual Site Geometry & Master Plan Drawings"
      ],
      results: "Delivered a compelling presentation package that secured client executive approval and established the visual benchmark for the development phase.",
      lessonsLearned: "Blending engineering accuracy with cinematic visual storytelling transforms technical design proposals into persuasive, memorable presentations."
    }
  }
];
