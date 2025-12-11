import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 w-full z-50 transition-all duration-300" 
            [class]="isScrolled ? 'glass shadow-card' : 'bg-transparent'">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="#home" class="group">
            <div class="text-2xl font-black bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300" style="-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              JM
            </div>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a *ngFor="let item of navItems; let i = index" 
               [href]="item.href" 
               class="relative px-4 py-2 text-dark-200 hover:text-primary-400 transition-all duration-300 group rounded-lg"
               [style.animation-delay]="(i * 0.1) + 's'"
               style="animation: fadeInDown 0.6s ease-out both;">
              <span class="relative z-10">{{item.label}}</span>
              <div class="absolute inset-0 bg-primary-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </a>
          </div>
          
          <!-- Theme Toggle & Mobile Menu Button -->
          <div class="flex items-center space-x-4">
            <!-- Resume Button -->
            <a href="#contact" 
               class="hidden sm:block px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
              Resume
            </a>
            
            <!-- Mobile Menu Button -->
            <button class="md:hidden p-2 text-dark-200 hover:text-primary-400 transition-colors duration-300 rounded-lg hover:bg-primary-500/10" 
                    (click)="toggleMobile()">
              <svg class="w-6 h-6 transition-transform duration-300" 
                   [class.rotate-90]="mobileOpen" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path *ngIf="mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div class="md:hidden overflow-hidden transition-all duration-300" 
             [style.max-height]="mobileOpen ? '400px' : '0'"
             [style.opacity]="mobileOpen ? '1' : '0'">
          <div class="pt-4 pb-2 space-y-2">
            <a *ngFor="let item of navItems; let i = index" 
               [href]="item.href" 
               (click)="closeMobile()"
               class="block px-4 py-3 text-dark-200 hover:text-primary-400 hover:bg-primary-500/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
               [style.animation-delay]="mobileOpen ? (i * 0.1) + 's' : '0s'"
               [class]="mobileOpen ? 'animate-slide-in-left' : ''">
              {{item.label}}
            </a>
            <a href="#contact" 
               (click)="closeMobile()"
               class="block mx-4 mt-4 px-4 py-3 bg-gradient-primary text-white text-center rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileOpen = false;
  isScrolled = false;
  
  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}