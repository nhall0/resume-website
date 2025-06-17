import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from '../../interfaces/menu.model';
import { NgFor, NgIf } from '@angular/common';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [MenuItemComponent,
            NgFor,
            NgIf],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [ 
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuHeaderComponent implements OnInit, OnDestroy {

  //Const
  menuItems: MenuItem[] = [
    { title: 'home', route: '', icon: 'home' },
    { title: 'projects', route: 'projects', icon: 'info' },
    { title: 'resume', route: 'resume', icon: 'article' }
  ];

  //Vars
  currentPath: string = '';
  showMobileItems: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) { }

  isLastItem(item: MenuItem) : boolean {
    return this.menuItems.indexOf(item) === this.menuItems.length - 1;
  }

  parsePath(url: string) {
    var prettyPath = "Home"
    if (url != "/"){
      let splitPath = url.split('/');
      if (splitPath.length >= 2) {
        prettyPath = splitPath[1];
      }
    }
    prettyPath = prettyPath.charAt(0).toUpperCase() + prettyPath.slice(1);
    return prettyPath;
  };

  ngOnInit(): void {
    this.currentPath = this.parsePath(this.router.url);
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      this.currentPath = this.parsePath(event.urlAfterRedirects);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
