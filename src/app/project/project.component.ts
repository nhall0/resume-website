import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.model';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project | null = null;

  constructor(private router: Router) {}

  goToProject() {
    this.router.navigate(['/projects', this.project?.id]);
  }
}
