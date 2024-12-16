export interface Project {
    id: string;
    title: string;
    description: string;
    github: string | null;
    website: string | null;
    enabled:  boolean;
}