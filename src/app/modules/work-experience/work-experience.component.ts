import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experiences = [
    {
      img: 'assets/images/company1-logo.png',
      role: 'Frontend Developer',
      company: 'TechCorp Solutions',
      date: 'Jan 2020 - Dec 2021',
      desc: 'Developed user-friendly web interfaces using React and Angular. Collaborated with cross-functional teams to implement responsive designs and improve application performance.',
      skills: ['React', 'Angular', 'TypeScript', 'HTML/CSS', 'REST APIs'],
      doc: 'assets/documents/frontend-developer-summary.pdf'
    },
    {
      img: 'assets/images/company2-logo.png',
      role: 'Software Engineer',
      company: 'Innovatech Labs',
      date: 'Feb 2018 - Dec 2019',
      desc: 'Designed and developed scalable backend systems with Node.js and Express. Enhanced database performance by optimizing SQL queries and implementing caching mechanisms.',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Kubernetes', 'Communication'],
      doc: 'assets/documents/software-engineer-summary.pdf'
    },
    {
      img: 'assets/images/company3-logo.png',
      role: 'Data Analyst',
      company: 'DataDriven Insights',
      date: 'Mar 2016 - Jan 2018',
      desc: 'Analyzed large datasets to identify key trends and patterns, supporting business decisions. Automated data visualization pipelines using Python and Tableau.',
      skills: ['Python', 'Tableau', 'SQL', 'Excel', 'Data Visualization'],
      doc: 'assets/documents/data-analyst-summary.pdf'
    },
    
  ];
  
}
