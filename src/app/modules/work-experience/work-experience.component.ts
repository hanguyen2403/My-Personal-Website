import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements AfterViewInit {
  experiences = [
    {
      img: 'img/company/VNPT.png',
      role: 'Frontend Developer',
      company: 'VNPT IT2',
      date: 'Jul 2024 - Sep 2024',
      desc: 'Developed the front-end of an online meeting platform using Angular, ensuring a responsive and user-friendly interface. Collaborated with the back-end teams to integrated the company’s Go Meet SDK to enable seamless video conferencing and real-time communication features.',
      skills: ['Angular', 'TypeScript', 'HTML/CSS', 'Figma'],
      doc: 'assets/documents/frontend-developer-summary.pdf'
    },
    {
      img: 'img/company/AIoT.png',
      role: 'Software Engineer',
      company: 'AIoT Lab VN',
      date: 'Oct 2023 - Present',
      desc: 'Working as an AI researcher and software developer. Designed and developed scalable software systems to connect with the real-time monitoring system for the company’s IoT devices.',
      skills: ['Deep Learning', 'Yolo', 'Computer Vision', 'VueJS', 'Figma', 'java'],
      doc: 'assets/documents/software-engineer-summary.pdf'
    },
  ];
  @ViewChildren('experienceItem') experienceItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Determine whether to slide in from left or right
            const element = entry.target as HTMLElement;
            if (element.classList.contains('md:justify-start')) {
              element.classList.add('slide-in-left');
            } else if (element.classList.contains('md:justify-end')) {
              element.classList.add('slide-in-right');
            }
            element.classList.remove('opacity-0'); // Make visible
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    this.experienceItems.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }
}
