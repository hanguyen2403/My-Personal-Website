import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutComponent } from './modules/about/about/about.component';
import { ContactComponent } from './modules/contact/contact/contact.component';
import { ProjectsComponent } from './modules/projects/projects/projects.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WorkExperienceComponent } from './modules/work-experience/work-experience.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
=======
>>>>>>> 8b6bc3d2711e6541058cc9431e69a4d99f4fdb8c
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
<<<<<<< HEAD
  {path: 'test', component: HeaderComponent},
=======
  {path: 'test', component: FooterComponent},
>>>>>>> 8b6bc3d2711e6541058cc9431e69a4d99f4fdb8c
  {path: 'work', component: WorkExperienceComponent},
  {path: "**", redirectTo: ""}
];
