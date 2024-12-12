import { Project } from '../../interfaces/project.model'; 
import projectData from '../project-components/project.data.json';

export class ProjectService {
    projects: Project[];

    constructor() {
        this.projects = [...(projectData as Project[])];
    }

    getProjects(): Project[] {
        return this.projects;
    }
}