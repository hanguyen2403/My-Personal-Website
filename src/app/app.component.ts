import { Component,HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private renderer: Renderer2) {}

  // Scroll-to-Top Logic
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show/Hide Scroll-Up Button
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    if (window.scrollY > 200) {
      this.renderer.removeClass(scrollUpBtn, 'hidden');
    } else {
      this.renderer.addClass(scrollUpBtn, 'hidden');
    }
  }
}
