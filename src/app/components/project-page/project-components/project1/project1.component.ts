import { Component } from '@angular/core';
import { RegisterComponent } from '../../../../services/project.service';

@RegisterComponent('project1')
@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.scss'
})
export class Project1Component {

}
