export interface Experience {
    id: string;
    company: string;
    role: string;
    start: string;
    end: string;
    bullets: string[];
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    year: string;
    gpa: string;
}

export interface Project {
    id: string;
    name: string;
    tech: string;
    description: string;
    link: string;
}

export interface Hobby {
    id: string;
    name: string;
    icon?: string;
}

export interface Language {
    id: string;
    name: string;           // e.g. "English"
    proficiency: string;    // e.g. "Native", "C2", "Intermediate"
}

export interface Certification {
    id: string;
    name: string;           // e.g. "AWS Solutions Architect"
    issuer: string;         // e.g. "Amazon Web Services"
    date: string;           // e.g. "2024"
    link?: string;          // optional credential URL
}

export interface Award {
    id: string;
    title: string;          // e.g. "Best Hackathon Project"
    issuer: string;         // e.g. "HackMIT"
    date: string;
    description?: string;
}

export interface Volunteer {
    id: string;
    organization: string;
    role: string;
    start: string;
    end: string;
    bullets: string[];
}

export interface Publication {
    id: string;
    title: string;
    publisher: string;
    date: string;
    link?: string;
}

export interface ResumeData {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
    summary: string;
    skills: string;
    hobbies: Hobby[];
    languages: Language[];
    certifications: Certification[];
    awards: Award[];
    volunteer: Volunteer[];
    publications: Publication[];
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    accentColor: string;
    secondaryColor: string;
    layout: 'classic' | 'modern' | 'compact' | 'modern+';
    profilePicture: string;
}