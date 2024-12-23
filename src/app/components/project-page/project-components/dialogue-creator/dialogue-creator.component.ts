import { Component } from '@angular/core';
import { ProjectSectionComponent } from '../../project-section/project-section.component';
import { DialogueIntegrationComponent } from "./dialogue-integration/dialogue-integration.component";

@Component({
  selector: 'app-dialogue-creator',
  standalone: true,
  imports: [ProjectSectionComponent, DialogueIntegrationComponent],
  templateUrl: './dialogue-creator.component.html',
  styleUrl: './dialogue-creator.component.scss'
})
export class DialogueCreatorComponent {

}
