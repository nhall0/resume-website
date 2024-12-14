import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getComponent } from '../../helpers/project-components.loader';
import { ProjectHeaderComponent } from "./project-header/project-header.component";
import { Project } from '../../interfaces/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  template: `<app-project-header class='project-header' [project]='currentProject'></app-project-header><ng-container #dynamicContainer></ng-container>`,
  imports: [ProjectHeaderComponent],
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  
  currentProject: Project | null = null;
  projectService: ProjectService = new ProjectService();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const componentKey = params['id'];
      this.currentProject = this.projectService.getProject(componentKey);
      const component = getComponent(componentKey);

      if (component) {
        this.loadComponent(component);
      } else {
        console.error('Component not found for ID:', componentKey);
      }
    });
  }

  private loadComponent(component: any): void {
    this.container.clear();
    this.container.createComponent(component);
  }
}
