import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p class="text-dark-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of data.projects; let i = index" 
               class="group relative glass rounded-2xl overflow-hidden hover-lift transition-all duration-500 border border-primary-500/20 hover:border-primary-500/50"
               [style.animation-delay]="(i * 0.2) + 's'"
               style="animation: fadeInUp 0.8s ease-out both;">
            
            <!-- Project Image/Preview -->
            <div class="h-48 relative overflow-hidden" [class]="getProjectBackground(project.title)">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              
              <!-- Project Status -->
              <div class="absolute top-4 right-4 flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-xs text-green-400 font-medium bg-dark-900/80 px-2 py-1 rounded-full">Live</span>
              </div>
              
              <!-- Project Type Badge -->
              <div class="absolute top-4 left-4">
                <span class="text-xs font-semibold px-3 py-1 rounded-full" [class]="getProjectTypeClass(project.title)">
                  {{getProjectType(project.title)}}
                </span>
              </div>
              
              <!-- Tech Stack Preview -->
              <div class="absolute bottom-4 left-4 flex space-x-2">
                <div *ngFor="let tech of project.tech.slice(0, 3)" 
                     class="w-8 h-8 bg-dark-800/90 rounded-lg flex items-center justify-center text-xs font-bold text-primary-400 border border-primary-500/30 backdrop-blur-sm">
                  {{getTechIcon(tech)}}
                </div>
                <div *ngIf="project.tech.length > 3" 
                     class="w-8 h-8 bg-dark-800/90 rounded-lg flex items-center justify-center text-xs font-mono text-dark-400 border border-dark-600 backdrop-blur-sm">
                  +{{project.tech.length - 3}}
                </div>
              </div>
              
              <!-- Project Visual Elements -->
              <div class="absolute inset-0 flex items-center justify-center opacity-20">
                <div class="text-6xl" [innerHTML]="getProjectIcon(project.title)"></div>
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {{project.title}}
                </h3>
                <div class="flex space-x-2">
                  <a [href]="project.github" target="_blank" 
                     class="p-2 bg-dark-800/50 hover:bg-primary-500/20 rounded-lg transition-all duration-300 transform hover:scale-110 group/btn">
                    <svg class="w-4 h-4 text-dark-400 group-hover/btn:text-primary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a *ngIf="project.demo !== '#'" [href]="project.demo" target="_blank" 
                     class="p-2 bg-dark-800/50 hover:bg-secondary-500/20 rounded-lg transition-all duration-300 transform hover:scale-110 group/btn">
                    <svg class="w-4 h-4 text-dark-400 group-hover/btn:text-secondary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <p class="text-dark-300 mb-4 leading-relaxed text-sm line-clamp-3">
                {{project.description}}
              </p>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.tech" 
                      class="px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-xs font-medium hover:border-primary-500/40 transition-colors duration-300">
                  {{tech}}
                </span>
              </div>
              
              <!-- Project Links -->
              <div class="flex items-center justify-between pt-4 border-t border-dark-700">
                <div class="flex space-x-4">
                  <a [href]="project.github" target="_blank" 
                     class="flex items-center text-dark-400 hover:text-primary-400 transition-colors duration-300 text-sm font-medium">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a *ngIf="project.demo !== '#'" [href]="project.demo" target="_blank" 
                     class="flex items-center text-dark-400 hover:text-secondary-400 transition-colors duration-300 text-sm font-medium">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Live Demo
                  </a>
                </div>
                <div class="text-xs text-dark-500 font-mono">
                  {{i + 1}}/{{data.projects.length}}
                </div>
              </div>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
        
        <!-- View More Projects -->
        <div class="text-center mt-16">
          <a href="https://github.com/jaimaheshwari" target="_blank" 
             class="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = portfolioData;
  }

  getProjectBackground(title: string): string {
    const backgrounds: { [key: string]: string } = {
      'Personal Portfolio Website': 'bg-gradient-to-br from-purple-500/30 to-pink-500/30',
      'Employee Management Module': 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30',
      'Timesheet Management Module': 'bg-gradient-to-br from-green-500/30 to-teal-500/30'
    };
    return backgrounds[title] || 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20';
  }

  getProjectType(title: string): string {
    const types: { [key: string]: string } = {
      'Personal Portfolio Website': 'Full-Stack',
      'Employee Management Module': 'Frontend SPA',
      'Timesheet Management Module': 'Full-Stack'
    };
    return types[title] || 'Web App';
  }

  getProjectTypeClass(title: string): string {
    const classes: { [key: string]: string } = {
      'Personal Portfolio Website': 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      'Employee Management Module': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Timesheet Management Module': 'bg-green-500/20 text-green-400 border border-green-500/30'
    };
    return classes[title] || 'bg-primary-500/20 text-primary-400 border border-primary-500/30';
  }

  getProjectIcon(title: string): string {
    const icons: { [key: string]: string } = {
      'Personal Portfolio Website': '🌐',
      'Employee Management Module': '👥',
      'Timesheet Management Module': '⏰'
    };
    return icons[title] || '💻';
  }

  getTechIcon(tech: string): string {
    const iconMap: { [key: string]: string } = {
      'Angular 20': 'NG',
      'Angular': 'NG',
      'Node.js': 'ND',
      'Tailwind CSS': 'TW',
      'TypeScript': 'TS',
      'Express.js': 'EX',
      'Angular Material': 'AM',
      'REST APIs': 'API',
      'MySQL': 'SQL',
      'PHP REST APIs': 'PHP'
    };
    return iconMap[tech] || tech.substring(0, 2).toUpperCase();
  }
}