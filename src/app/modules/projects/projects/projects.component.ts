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
      name: 'Movie Website',
      description:
        'Build a movie platform where users can browse movies, watch them, and sort by genre, year or country and create personalized movie lists.',
      techStacks: [
        'Angular 18',
        'MongoDB',
        'NodeJs',
        'ExpressJS',
        'Firebase',
        'Bootstrap',
      ],
      date: 'Oct 2024 – Dec 2024',
      image: 'img/projects/project-movie.jpg',
      link: 'https://github.com/hanguyen2403/Movie-Website'
    },
    {
      id: 2,
      name: 'My Portfolio',
      description: 'Building a portfolio using angular 19 with Tailwind CSS.',
      techStacks: ['Angular', 'TypeScript', 'Tailwind CSS'],
      date: 'Dec 2024 – Dec 2024',
      image: 'img/projects/project-portfolio.png',
      link: 'https://github.com/hanguyen2403/My-Personal-Website'
    },
    {
      id: 3,
      name: 'E-learning Platform',
      description: 'An e-learning platform using ReactJS with TailwindCSS for front-end and Python (Django), PostgreSQL for back-end',
      techStacks: ['ReactJS', 'TailwindCSS', 'Python', 'Django', 'PostgreSQL'],
      date: 'Feb 2024 – June 2024',
      image: 'img/projects/project-eLearning.png',
      link: 'https://github.com/example/project3'
    },
    {
      id: 4,
      name: 'Flavour Sync',
      description: 'Developed a software control platform enabling real-time synchronization and precise delivery of smell and taste stimuli to enhance multisensory flavor experiences.',
      techStacks: ['VueJS', 'Bootstrap', 'Arduino'],
      date: 'March 2024 – July 2024',
      image: 'img/projects/project-flavourSync.png',
      link: 'https://github.com/hanguyen2403/Flavour-Communicate'
    },
    {
      id: 5,
      name: 'Sweet Escape',
      description: 'A 3 matching game inspired by Candy Crush Saga, built with Unity to learn about computer graphics and game development.',
      techStacks: ['Unity', 'C#'],
      date: 'Sep 2024 – Dec 2024',
      image: 'img/projects/project-unity.png',
      link: 'https://github.com/hanguyen2403/Sweet-Escape'
    },
    {
      id: 6,
      name: 'Line 98',
      description: 'A 2D game built with Java Swing to learn about data structure and algorithm, which implement the breadth first search and linklist as the core game feature.', 
      techStacks: ['Java', 'Swing'],
      date: 'July 2023 – Dec 2023',
      image: 'img/projects/project-line98.png',
      link: 'https://github.com/hanguyen2403/Line98-DSA'
    },
    {
      id: 7,
      name: 'Tetris Game',
      description: 'A 2D game built with Java Swing to learn about object oriented programming.',
      techStacks: ['Java', 'Swing'],
      date: 'March 2023 – May 2023',
      image: 'img/projects/project-tetris.png',
      link: 'https://github.com/hanguyen2403/Tetris-OOP'
    },
  ];
  private position = 0; // Current scroll position
  private slideWidth = 300; // Default width of a project grid item
  private containerWidth = 0; // Width of the visible container
  private totalScrollableWidth = 0; // Total width of the scrollable area
  private slidingRight = true; // Direction of automatic sliding
  private autoSlideInterval: any; // Interval for automatic sliding

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
      this.containerWidth = slidingWrapper.parentElement?.clientWidth || 0;
      this.totalScrollableWidth = slidingWrapper.scrollWidth - this.containerWidth;
  
      // Determine the number of visible items
      let visibleItems = 1;
      if (this.containerWidth >= 1024) {
        visibleItems = 4;
      } else if (this.containerWidth >= 768) {
        visibleItems = 3;
      } else if (this.containerWidth >= 480) {
        visibleItems = 2;
      }
  
      // Set slide width dynamically
      this.slideWidth = this.containerWidth / visibleItems;
  
      // Adjust scroll position to prevent overflow
      this.adjustScrollPosition();
    }
  }

  private adjustScrollPosition() {
    const slidingWrapper = document.querySelector('.sliding-wrapper') as HTMLElement;
  
    if (slidingWrapper) {
      // Ensure the current position doesn't exceed the total scrollable width
      if (Math.abs(this.position) > this.totalScrollableWidth) {
        this.position = -this.totalScrollableWidth;
      }
  
      // Recalculate the slide width and apply the adjusted position
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
