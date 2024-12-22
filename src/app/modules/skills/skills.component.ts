import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { icon: 'ri-angularjs-fill', title: 'Angular' },
    { icon: 'ri-nodejs-line', title: 'NodeJs' },
    { icon: 'ri-html5-fill', title: 'HTML' },
    { icon: 'ri-css3-fill', title: 'CSS' },
    { icon: 'ri-javascript-line', title: 'Javascript' },
    { icon: 'ri-bootstrap-fill', title: 'Bootstrap' },
    { icon: 'ri-tailwind-css-fill', title: 'Tailwind CSS' },
    { icon: 'ri-java-line', title: 'Java' },
    { icon: 'icon-unity', title: 'Unity' },
    { icon: 'icon-python', title: 'Python' },
    { icon: 'icon-mongodb', title: 'MongoDB' },
    { icon: 'icon-postgres', title: 'PostgreSQL' },
  ];
}
