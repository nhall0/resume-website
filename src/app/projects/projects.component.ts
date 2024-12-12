import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project-components/project.service';
import { NgFor } from '@angular/common';
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projectsService: ProjectService = new ProjectService();

  constructor() {}

  ngOnInit() {
    console.log(this.projectsService.getProjects()); 
  }
}
