import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input() experience: any; 
}
