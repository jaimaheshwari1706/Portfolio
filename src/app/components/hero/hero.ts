import { Component, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';
import AOS from 'aos';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  // imports: [NgIf],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true });

    // GSAP text float animation
    gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1 });
    gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 1, delay: 0.3 });
    // gsap.from('.cta-btn', { y: 20, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from('.cta-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    });


  }
}
