import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.model';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [],
  templateUrl: './project-header.component.html',
  styleUrl: './project-header.component.scss'
})
export class ProjectHeaderComponent {
  @Input() project: Project | null = null;
}
