import { Component, OnInit, Input } from '@angular/core';
import { NgFor, NgIf, NgStyle} from '@angular/common';

import { ProjectPreviewComponent } from "./project-preview/project-preview.component";
import { ProjectService } from '../../services/project.service';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, ProjectPreviewComponent, ButtonModule],
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

  //Loading Variables
  ticksElapsed = 0;
  ticksToLoad = 100;
  buttonPressCooldown: boolean = false;

  constructor() {}

  ngOnInit() {
    if(this.projectMode === "rectangle") {
      this.iterateProjectLoopEvery10Seconds();
    }
  }

  iterateProjectLoopEvery10Seconds() {
    setInterval(() => {
      this.ticksElapsed += 1;
      if(!this.buttonPressCooldown && this.ticksElapsed >= this.ticksToLoad+2) { //+2 for buffer
        this.iterateProject(true);
        this.ticksElapsed = 0;
      }
    }, 100);
  }

  iterateProject(up: boolean) {    
    if(up) {
      if(this.currentProject == this.projectsService.projects.length - 1) {
        this.currentProject = 0;
      } 
      else{
        this.currentProject++;
      } 
    } 
    else {
      if(this.currentProject == 0) {
        this.currentProject = this.projectsService.projects.length - 1;
      }
      else {
        this.currentProject--;
      }
    }
  }
}

