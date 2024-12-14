import { Project } from '../interfaces/project.model'; 
import { Type } from '@angular/core';
import projectData from '../../assets/data/project.data.json';

export const componentRegistry: { [key: string]: Type<any> } = {};

export class ProjectService {
    projects: Project[];

    constructor() {
        this.projects = [...(projectData as Project[])];
    }

    getProjects(): Project[] {
        return this.projects;
    }

    getProject(id: string): Project | null {
        let project = this.projects.find(project => project.id === id);
        return project ? project : null
    }
}

export function RegisterComponent(key: string): ClassDecorator {
  return (target: Function) => {
    componentRegistry[key] = target as Type<any>;
  };
}