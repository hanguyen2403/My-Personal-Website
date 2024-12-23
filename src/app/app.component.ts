import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './modules/home/home/home.component';
import { AboutComponent } from './modules/about/about/about.component';
import { ContactComponent } from './modules/contact/contact/contact.component';
import { ProjectsComponent } from './modules/projects/projects/projects.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WorkExperienceComponent } from './modules/work-experience/work-experience.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent],
=======
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> 8b6bc3d2711e6541058cc9431e69a4d99f4fdb8c
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
