export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  project: string;
  avatarText: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Eng. Kedir Abdella',
    role: 'General Manager & Principal Engineer',
    organization: 'Meteoric Engineering Consultant PLC',
    project: 'Highway Corridor Studies & ESIA Technical Compliance',
    avatarText: 'KA',
    quote: 'Yonatan demonstrated strong technical knowledge in highway geometric design and document organization. He effectively participated in the preparation of project reports, geometric compliance checks, and multidisciplinary coordination under strict deadlines.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Senior Resident Engineer',
    role: 'Project Supervision Directorate',
    organization: 'Best Consulting Engineers PLC',
    project: 'Harar-Kombolcha 97.22 km Road Project',
    avatarText: 'BC',
    quote: 'Yonatan handled complex contractor cross-section verifications and right-of-way realignments with exceptional precision. His Civil 3D proficiency and quantity takeoff accuracy were vital in keeping this 97 km trunk corridor on schedule.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Product & Engineering Lead',
    role: 'AI & Data Products Division',
    organization: 'Eleka Inc. (Rwanda / Remote)',
    project: 'AI Chatbot & Personalized Curriculum Engine',
    avatarText: 'EI',
    quote: 'Yonatan designed an intelligent conversational agent and automated PDF curriculum pipeline using Python and NLP that dramatically improved learner onboarding. His ability to turn data into scalable tools is outstanding.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Senior Urban Infrastructure Planner',
    role: 'Civil & Architectural Services',
    organization: 'G&Y Consulting Engineers plc',
    project: 'Ayat Tsebel 3D Concept Design & Visualization',
    avatarText: 'GY',
    quote: 'The 3D infrastructure models, InfraWorks contextual renders, and cinematic video flythroughs produced by Yonatan gave our clients complete visual confidence and accelerated project stakeholder approvals.',
    rating: 5
  }
];
