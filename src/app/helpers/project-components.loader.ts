import { StablePathingComponent } from '../components/project-page/project-components/stable-pathing/stable-pathing.component';
import { GameDevelopmentComponent } from '../components/project-page/project-components/game-development/game-development.component';
import { ProxyEditComponent } from '../components/project-page/project-components/proxy-edit/proxy-edit.component';
import { DialogueCreatorComponent } from '../components/project-page/project-components/dialogue-creator/dialogue-creator.component';
import { MotobuildBikeComponent } from '../components/project-page/project-components/motobuild.bike/motobuild.bike.component';

import { Type } from '@angular/core';

export const componentMap : { [key: string]: Type<any> }  = {
  'stable-pathing': StablePathingComponent,
  'game-development': GameDevelopmentComponent,
  'proxy-edit': ProxyEditComponent,
  'dialogue-creator': DialogueCreatorComponent,
  'motobuild.bike': MotobuildBikeComponent
};

export const getComponent = (componentName: string) => {
  return componentMap[componentName];
}