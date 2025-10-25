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
