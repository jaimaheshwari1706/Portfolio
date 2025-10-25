import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects implements AfterViewInit {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio built with Angular & Tailwind.',
      image: 'https://via.placeholder.com/400x250',
      live: '#',
      github: '#',
      gradient: 'from-pink-500 to-blue-500',
    },
    {
      name: 'E-commerce App',
      description: 'A full-featured shopping platform using Angular.',
      image: 'https://via.placeholder.com/400x250',
      live: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      name: 'Task Manager',
      description: 'Manage tasks and deadlines with this Angular app.',
      image: 'https://via.placeholder.com/400x250',
      live: '#',
      github: '#',
      gradient: 'from-yellow-400 to-orange-400',
    },
  ];
  // projects = [
  //   {
  //     title: 'UbiRecruit (Recruitment Management System)',
  //     tech: ['Angular 17', 'RxJS', 'PHP', 'MySQL'],
  //     description: 'Developed 12+ reusable components, integrated 10+ APIs, and delivered real-time updates improving HR productivity by 30%.',
  //     link: '#',
  //   live: '#',
  //     github: '#',
  //     gradient: 'from-pink-500 to-blue-500'
  //   },
  //   {
  //     title: 'Employee Management Module (HRMS)',
  //     tech: ['Angular 13', 'Angular Material', 'REST APIs'],
  //     description: 'Built SPA automating HR work by 35%, refactored 25+ UI components for maintainability, optimized API response handling.',
  //     link: '#'
  //   live: '#',
  //     github: '#',
  //     gradient: 'from-purple-500 to-pink-400'
  //   },
  //   {
  //     title: 'Performance Analytics Dashboard Migration',
  //     tech: ['AngularJS → Angular 15', 'RxJS', 'PHP APIs'],
  //     description: 'Migrated legacy dashboard reducing data refresh latency by 30%, improved UI rendering from 3.2s → 1.9s.',
  //     link: '#'
  //   live: '#',
  //     github: '#',
  //     gradient: 'from-yellow-400 to-orange-400'
  //   }
  // ];


  ngAfterViewInit() {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
    VanillaTilt.init(cards, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
    });

  }
}
