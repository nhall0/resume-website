import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { NgFor, NgIf } from '@angular/common';
import { ProjectPreviewComponent } from "./project-preview/project-preview.component";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, ButtonModule, ProjectPreviewComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  //Inputs + Outputs
  @Input() projectMode: "grid" | "rectangle" = "grid";

  //Services
  projectsService: ProjectService = new ProjectService();

  //Rectangle Mode Variables
  currentProject: number = 0; 
  
  constructor() {}

  ngOnInit() {
    
  }
}
