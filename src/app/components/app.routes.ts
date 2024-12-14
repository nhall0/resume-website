import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectPageComponent} from './project-page/project-page.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'projects/:id',
        component: ProjectPageComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];
