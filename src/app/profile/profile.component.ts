import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  //Profile Information - Should be moved to a service and then to a database.
  name: string = 'Niklas Hallstein';
  title: string = 'Full-Stack Software Developer';
  email: string = 'niklas@cgcg.biz';
  workplace: string = 'Cyber Guardian Consulting Group';
  position: string = 'Engineer I';

  linkedin: string = 'https://www.linkedin.com/in/niklas-hallstein-980234335/';
  github: string = 'https://github.com/nhall0'

  image: string = this.github + '.png';

  constructor() {}
}
