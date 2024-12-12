import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

import { MenuHeaderComponent } from './menu-header/menu-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ButtonModule, InputTextModule, RippleModule, MenuHeaderComponent, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'niklas-hallstein-resume';
}
