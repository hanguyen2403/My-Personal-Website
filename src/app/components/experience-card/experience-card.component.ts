<<<<<<< HEAD
import { Component, Input} from '@angular/core';
=======
import { Component, Input  } from '@angular/core';
>>>>>>> 8b6bc3d2711e6541058cc9431e69a4d99f4fdb8c
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input() experience: any; 
<<<<<<< HEAD

=======
>>>>>>> 8b6bc3d2711e6541058cc9431e69a4d99f4fdb8c
}
