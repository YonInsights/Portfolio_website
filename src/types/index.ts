export type ProjectCategory = "all" | "highway" | "gis" | "visualization" | "data" | "machine-learning" | "transportation";

export interface ProjectTechnicalDrawing {
  title: string;
  type: "plan" | "profile" | "cross-section" | "gis-map" | "data-chart" | "3d-model";
  caption: string;
  svgType?: "interchange" | "cross-section" | "profile-curve" | "gis-corridor" | "traffic-heatmap" | "pavement-chart";
}

export interface ProjectCaseStudy {
  overview: string;
  problemContext: string;
  myRole: string;
  methodology: string[];
  softwareTools: string[];
  engineeringProcess: string[];
  keyOutputs: string[];
  results: string;
  lessonsLearned: string;
  technicalDrawings?: ProjectTechnicalDrawing[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  subcategory: string;
  shortDescription: string;
  tools: string[];
  role: string;
  keyDeliverable: string;
  featured?: boolean;
  svgBadge?: "interchange" | "gis" | "civil3d" | "ml" | "traffic" | "drainage" | "boq" | "roundabout" | "pci";
  caseStudy: ProjectCaseStudy;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  toolsAndTech: string[];
  engineeringStandards?: string[];
  badgeColor: string;
  iconName: string;
}

export interface ExperiencePosition {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  status: string;
  responsibilities: string[];
  keyProjectInvolvement: string[];
  toolsUsed: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  location: string;
  status: string;
  details: string[];
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialId?: string;
  status: "Verified" | "In Progress" | "Completed";
}

export interface ResearchProposal {
  id: string;
  title: string;
  targetFocus: string;
  researchQuestion: string;
  problemStatement: string;
  methodology: string[];
  technologyStack: string[];
  expectedContribution: string;
  collaborationIntent: string;
}

export interface FreelanceService {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  typicalTools: string[];
  bestFor: string;
}

export interface VisualizationGalleryItem {
  id: string;
  title: string;
  category: "Civil 3D" | "Infrastructure Modeling" | "Highway Visualization" | "Urban Visualization" | "Landscape Visualization" | "3D Presentation";
  description: string;
  softwareUsed: string[];
  keyFeatures: string[];
  renderType: "civil3d-corridor" | "interchange-3d" | "urban-junction" | "terrain-mesh" | "corridor-flythrough" | "roundabout-geometry";
}
