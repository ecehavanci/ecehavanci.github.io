export type LanguageType = 'en' | 'tr';

export interface EducationItem {
    school: string;
    degree: string;
    duration: string;
    description: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    workPlace: string;
    work: string;
    description: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    link: string;
}