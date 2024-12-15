import { Component } from '@angular/core';
import { ProjectSectionComponent } from '../../project-section/project-section.component';

@Component({
  selector: 'app-game-development',
  standalone: true,
  imports: [ ProjectSectionComponent],
  templateUrl: './game-development.component.html',
  styleUrl: './game-development.component.scss'
})
export class GameDevelopmentComponent {

}
