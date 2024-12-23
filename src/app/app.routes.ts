import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutComponent } from './modules/about/about/about.component';
import { ContactComponent } from './modules/contact/contact/contact.component';
import { ProjectsComponent } from './modules/projects/projects/projects.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WorkExperienceComponent } from './modules/work-experience/work-experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'test', component: HeaderComponent},
  {path: 'work', component: WorkExperienceComponent},
  {path: "**", redirectTo: ""}
];
