import { Component, HostListener, ElementRef, ViewChild,  AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectGridComponent } from '../../../components/project-grid/project-grid.component';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectGridComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements AfterViewInit{

  projects: Project[] = [
    {
      id: 1,
      name: 'DecisionHub',
      description:
        'A Rule Builder application “Decision Hub” that empowers Business Analysts to create, save, and manage business rules.',
      techStacks: [
        'React Js',
        'PostgreSQL',
        'Node Js',
        'Express Js',
        'Redux',
        'React Flow'
      ],
      date: 'Jan 2024 – Dec 2023',
      image: 'assets/img/avatar.png',
      link: 'https://github.com/example/decisionhub'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'A brief description of Project 2.',
      techStacks: ['Angular', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      date: 'Feb 2023 – Nov 2023',
      image: 'assets/img/project2.png',
      link: 'https://github.com/example/project2'
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'A brief description of Project 3.',
      techStacks: ['Vue', 'Vuex', 'MongoDB', 'SASS'],
      date: 'March 2023 – Dec 2023',
      image: 'assets/img/project3.png',
      link: 'https://github.com/example/project3'
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'A brief description of Project 4.',
      techStacks: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
      date: 'May 2023 – Aug 2023',
      image: 'assets/img/project4.png',
      link: 'https://github.com/example/project4'
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'A brief description of Project 5.',
      techStacks: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      date: 'June 2023 – Sep 2023',
      image: 'assets/img/project5.png',
      link: 'https://github.com/example/project5'
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'A brief description of Project 6.',
      techStacks: ['PHP', 'Laravel', 'Vue.js', 'Tailwind CSS'],
      date: 'July 2023 – Dec 2023',
      image: 'assets/img/project6.png',
      link: 'https://github.com/example/project6'
    },
    {
      id: 7,
      name: 'Project 7',
      description: 'A brief description of Project 7.',
      techStacks: ['Ruby', 'Rails', 'PostgreSQL', 'Bootstrap'],
      date: 'April 2023 – Aug 2023',
      image: 'assets/img/project7.png',
      link: 'https://github.com/example/project7'
    },
    {
      id: 8,
      name: 'Project 8',
      description: 'A brief description of Project 8.',
      techStacks: ['C#', '.NET Core', 'SQL Server', 'Azure'],
      date: 'Jan 2023 – May 2023',
      image: 'assets/img/project8.png',
      link: 'https://github.com/example/project8'
    },
    {
      id: 9,
      name: 'Project 9',
      description: 'A brief description of Project 9.',
      techStacks: ['Kotlin', 'Android', 'Firebase', 'Jetpack Compose'],
      date: 'Sep 2023 – Dec 2023',
      image: 'assets/img/project9.png',
      link: 'https://github.com/example/project9'
    },
    {
      id: 10,
      name: 'Project 10',
      description: 'A brief description of Project 10.',
      techStacks: ['Swift', 'iOS', 'Core Data', 'SwiftUI'],
      date: 'Oct 2023 – Dec 2023',
      image: 'assets/img/project10.png',
      link: 'https://github.com/example/project10'
    }
  ];
  private position = 0; // Current scroll position
  private slideWidth = 300; // Default width of a project grid item
  private containerWidth = 0; // Width of the visible container
  private totalScrollableWidth = 0; // Total width of the scrollable area

  constructor() {}

  ngAfterViewInit() {
    this.updateDimensions();
  }

  // Listener to handle window resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDimensions();
    this.adjustScrollPosition();
  }

  private updateDimensions() {
    const slidingWrapper = document.querySelector('.sliding-wrapper') as HTMLElement;

    if (slidingWrapper) {
      // Get the width of the container and the total scrollable content
      this.containerWidth = slidingWrapper.parentElement?.clientWidth || 0;
      this.totalScrollableWidth = slidingWrapper.scrollWidth - this.containerWidth;

      // Dynamically calculate the slide width based on the container width
      const visibleItems = Math.floor(this.containerWidth / this.slideWidth);
      this.slideWidth = this.containerWidth / visibleItems;
    }
  }

  private adjustScrollPosition() {
    const slidingWrapper = document.querySelector('.sliding-wrapper') as HTMLElement;

    if (slidingWrapper) {
      // Ensure the current position doesn't exceed the total scrollable width
      if (Math.abs(this.position) > this.totalScrollableWidth) {
        this.position = -this.totalScrollableWidth;
      }

      // Apply the adjusted position
      slidingWrapper.style.transform = `translateX(${this.position}px)`;
    }
  }

  scrollLeft() {
    const slidingWrapper = document.querySelector('.sliding-wrapper') as HTMLElement;

    if (slidingWrapper) {
      // Increment position to scroll left
      this.position += this.slideWidth;

      // Prevent scrolling beyond the first item
      if (this.position > 0) {
        this.position = 0;
      }

      // Apply the transform to the wrapper
      slidingWrapper.style.transform = `translateX(${this.position}px)`;
    }
  }

  scrollRight() {
    const slidingWrapper = document.querySelector('.sliding-wrapper') as HTMLElement;

    if (slidingWrapper) {
      // Decrement position to scroll right
      this.position -= this.slideWidth;

      // Prevent scrolling beyond the last item
      if (Math.abs(this.position) > this.totalScrollableWidth) {
        this.position = -this.totalScrollableWidth;
      }

      // Apply the transform to the wrapper
      slidingWrapper.style.transform = `translateX(${this.position}px)`;
    }
  }

}

export interface Project {
  id: number;
  name: string;
  description: string;
  techStacks: string[];
  date: string;
  image: string; // URL for the image
  link: string; // Link to the code repository or live demo
}
