import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'resume/HaNguyen_Resume.pdf'; // Path to the CV file
    link.download = 'HaNguyen_Resume.pdf'; // File name for download
    link.click();
  }
}
