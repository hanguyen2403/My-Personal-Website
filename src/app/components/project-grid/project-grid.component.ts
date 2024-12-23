import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-grid',
  imports: [CommonModule],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.css'
})
export class ProjectGridComponent {
  
  @Input() name: string = "Project Name";
  @Input() description: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.";
  @Input() techStacks: string[] = ["React Js", "PostgreSQL", "Node Js", "Express Js", "Redux", "React Flow"];
  @Input() date: string = "Jan 2024 – Dec 2023";
  @Input() image: string = "img/avatar.png";
  @Input() link: string = "https://www.facebook.com/";
}

