import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project | null = null;
}
