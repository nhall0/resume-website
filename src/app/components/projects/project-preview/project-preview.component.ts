import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.model';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() project: Project | null = null;

  constructor(private router: Router) {}

  goToProject() {
    this.router.navigate(['/projects', this.project?.id]);
  }
}
