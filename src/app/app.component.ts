import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MenuHeaderComponent, RouterModule, ScrollPanelModule, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'niklas-hallstein-resume';
}
