export interface Project {
    id: string;
    title: string;
    description: string;
    status: string;
    date: Date | string;
    image: string | null;
    github: string | null;
    website: string | null;
    technologies: string[] | null;
}