import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getComponent } from '../../helpers/project-components.loader';

@Component({
  selector: 'app-project-page',
  template: `<ng-container #dynamicContainer></ng-container>`
})
export class ProjectPageComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const componentKey = params['id'];
      const component = getComponent(componentKey);

      if (component) {
        this.loadComponent(component);
      } else {
        console.error('Component not found for ID:', componentKey);
      }
    });
  }

  private loadComponent(component: any): void {
    this.container.clear();
    this.container.createComponent(component);
  }
}
