import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-20 left-1/4 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p class="text-dark-300 text-lg max-w-2xl mx-auto">
            My professional journey and academic background that shaped my expertise in software development.
          </p>
        </div>
        
        <!-- Experience Timeline -->
        <div class="max-w-4xl mx-auto mb-20">
          <h3 class="text-2xl font-bold mb-12 text-white flex items-center justify-center">
            <div class="w-8 h-8 bg-gradient-primary rounded-lg mr-3 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
              </svg>
            </div>
            Professional Experience
          </h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>
            
            <div *ngFor="let exp of data.experience; let i = index" 
                 class="relative pl-20 pb-12 last:pb-0"
                 [style.animation-delay]="(i * 0.3) + 's'"
                 style="animation: fadeInUp 0.8s ease-out both;">
              
              <!-- Timeline Dot -->
              <div class="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 shadow-glow animate-pulse-slow"></div>
              
              <!-- Experience Card -->
              <div class="group glass p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/50 hover-lift transition-all duration-500">
                <!-- Header -->
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 mb-2">
                      {{exp.title}}
                    </h4>
                    <h5 class="text-lg font-semibold text-primary-400 mb-2 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"></path>
                      </svg>
                      {{exp.company}}
                    </h5>
                  </div>
                  <div class="flex flex-col lg:items-end text-dark-300">
                    <div class="flex items-center mb-1">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span class="font-medium">{{exp.period}}</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span class="font-medium">{{exp.location}}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Achievements -->
                <div class="space-y-3">
                  <h6 class="text-sm font-semibold text-secondary-400 uppercase tracking-wide mb-4">Key Achievements</h6>
                  <div *ngFor="let achievement of exp.achievements; let j = index" 
                       class="flex items-start p-3 bg-dark-800/50 rounded-lg hover:bg-primary-500/10 transition-all duration-300 transform hover:translate-x-2"
                       [style.animation-delay]="((i * 0.3) + (j * 0.1)) + 's'">
                    <div class="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-dark-200 leading-relaxed">{{achievement}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education Section -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-12 text-white flex items-center justify-center">
            <div class="w-8 h-8 bg-gradient-secondary rounded-lg mr-3 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            </div>
            Education
          </h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div *ngFor="let edu of data.education; let i = index" 
                 class="group glass p-8 rounded-2xl border border-secondary-500/20 hover:border-secondary-500/50 hover-lift transition-all duration-500"
                 [style.animation-delay]="(i * 0.2) + 's'"
                 style="animation: fadeInUp 0.8s ease-out both;">
              
              <!-- Education Icon -->
              <div class="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              
              <!-- Education Details -->
              <h4 class="text-xl font-bold text-white group-hover:text-secondary-400 transition-colors duration-300 mb-3">
                {{edu.degree}}
              </h4>
              <p class="text-secondary-400 font-semibold mb-4 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"></path>
                </svg>
                {{edu.institution}}
              </p>
              
              <div class="flex items-center justify-between text-dark-300">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span class="font-medium">{{edu.period}}</span>
                </div>
                <div *ngIf="edu.cgpa !== 'Pursuing'" class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span class="font-semibold text-accent-400">CGPA: {{edu.cgpa}}</span>
                </div>
                <div *ngIf="edu.cgpa === 'Pursuing'" class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span class="font-semibold text-green-400">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = portfolioData;
  }
}