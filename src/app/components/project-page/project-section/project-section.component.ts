import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
  @Input() title = '';
  @Input() stacked = false;
}
