import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {
  experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Ubitech Solutions Pvt. Ltd., Gwalior, India',
      duration: 'Aug 2025 – Present',
      points: [
        'Developed and maintained 10+ Angular modules and 5+ enterprise-level components using Angular 13–17.',
        'Migrated legacy AngularJS applications to Angular 15, improving UI load time by 40% and reusability by 25%.',
        'Optimized API integration efficiency by 30% through RxJS observables and lazy loading.',
        'Integrated 20+ REST endpoints and collaborated on PHP/MySQL APIs for seamless data flow.',
        'Mentored interns on Angular standards, version control, and clean architecture practices.',
      ],
      techStack: ['Angular 17', 'TypeScript', 'RxJS', 'PHP', 'MySQL', 'REST APIs', 'Agile', 'Git'],
    },
    {
      title: 'Web Development Intern',
      company: 'Ubitech Solutions Pvt. Ltd., Gwalior, India',
      duration: 'Dec 2024 – Jul 2025',
      points: [
        'Built 3+ Angular UI modules improving frontend responsiveness by 25%.',
        'Resolved 15+ production bugs and refactored TypeScript code for better maintainability.',
        'Enhanced form validation and reactivity using Angular Reactive Forms and RxJS.',
        'Participated in 7 Agile sprints for testing, documentation, and code reviews.',
      ],
      techStack: ['Angular 14', 'TypeScript', 'HTML5', 'SCSS', 'Postman', 'GitHub'],
    },
    {
      title: 'Academic Projects',
      company: 'MCA & BCA Projects',
      duration: '2023 – 2025',
      points: [
        'Developed “UbiRecruit” – a recruitment management SPA with role-based access, real-time updates, and analytics dashboards.',
        'Built an Employee Management System (HRMS) that automated manual HR workflows by 35%.',
        'Created a performance analytics dashboard migrating AngularJS → Angular 15 with 30% faster data rendering.',
      ],
      techStack: ['Angular', 'TypeScript', 'MySQL', 'PHP', 'RESTful APIs', 'Bootstrap'],
    },
  ];
}
