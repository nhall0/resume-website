import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

import { Project } from '../../../interfaces/project.model';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() project: Project | null = null;
  @Input() showProgressBar: boolean = false;

  constructor(private router: Router) {}

  goToProject() {
    this.router.navigate(['/projects', this.project?.id]);
  }
}
