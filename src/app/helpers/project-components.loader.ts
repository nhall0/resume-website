import { Project1Component } from "../components/project-page/project-components/project1/project1.component";
import { Project2Component } from "../components/project-page/project-components/project2/project2.component";
import { Project3Component } from "../components/project-page/project-components/project3/project3.component";
import { Project4Component } from "../components/project-page/project-components/project4/project4.component";
import { Project5Component } from "../components/project-page/project-components/project5/project5.component";
import { Type } from '@angular/core';

export const componentMap : { [key: string]: Type<any> }  = {
  'project1': Project1Component,
  'project2': Project2Component,
  'project3': Project3Component,
  'project4': Project4Component,
  'project5': Project5Component
};

export const getComponent = (componentName: string) => {
  return componentMap[componentName];
}