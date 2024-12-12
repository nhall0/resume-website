import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name: string = 'Niklas Hallstein';
  title: string = 'Software Developer';
  email: string = 'niklas@cgcg.biz';
  workplace: string = 'Cyber Guardian Consulting Group';
  position: string = 'Engineer I';

  linkedin: string = 'https://www.linkedin.com/in/niklas-hallstein-980234335/';
  github: string = 'https://github.com/nhall0'

  image: string = this.github + '.png';
}
