import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
