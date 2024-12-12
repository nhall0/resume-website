import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from '../../interfaces/menu.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [MenuItemComponent,
            NgFor,
            NgIf],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    { title: 'home', route: '', icon: 'home' },
    { title: 'projects', route: 'projects', icon: 'info' },
    { title: 'resume', route: 'resume', icon: 'email' }
  ];

  constructor() { }

  isLastItem(item: MenuItem) : boolean {
    return this.menuItems.indexOf(item) === this.menuItems.length - 1;
  }

  ngOnInit(): void {}
}
