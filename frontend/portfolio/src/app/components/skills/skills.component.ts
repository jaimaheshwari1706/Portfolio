import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p class="text-dark-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Frontend Skills -->
          <div class="group glass p-8 rounded-2xl hover-lift transition-all duration-500 border border-primary-500/20 hover:border-primary-500/50">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">Frontend</h3>
            </div>
            <div class="space-y-3">
              <div *ngFor="let skill of data.skills.frontend; let i = index" 
                   class="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg hover:bg-primary-500/10 transition-all duration-300 transform hover:translate-x-2"
                   [style.animation-delay]="(i * 0.1) + 's'">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-primary-400 font-bold text-xs">{{getSkillIcon(skill)}}</span>
                  </div>
                  <span class="text-dark-200 font-medium">{{skill}}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-primary-500/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Backend Skills -->
          <div class="group glass p-8 rounded-2xl hover-lift transition-all duration-500 border border-secondary-500/20 hover:border-secondary-500/50">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-secondary-400 transition-colors duration-300">Backend</h3>
            </div>
            <div class="space-y-3">
              <div *ngFor="let skill of data.skills.backend; let i = index" 
                   class="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg hover:bg-secondary-500/10 transition-all duration-300 transform hover:translate-x-2"
                   [style.animation-delay]="(i * 0.1) + 's'">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-secondary-400 font-bold text-xs">{{getSkillIcon(skill)}}</span>
                  </div>
                  <span class="text-dark-200 font-medium">{{skill}}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-secondary-500/60 rounded-full"></div>
                  <div class="w-2 h-2 bg-secondary-500/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tools -->
          <div class="group glass p-8 rounded-2xl hover-lift transition-all duration-500 border border-accent-500/20 hover:border-accent-500/50">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300">Tools</h3>
            </div>
            <div class="space-y-3">
              <div *ngFor="let skill of data.skills.tools; let i = index" 
                   class="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg hover:bg-accent-500/10 transition-all duration-300 transform hover:translate-x-2"
                   [style.animation-delay]="(i * 0.1) + 's'">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-accent-400 font-bold text-xs">{{getSkillIcon(skill)}}</span>
                  </div>
                  <span class="text-dark-200 font-medium">{{skill}}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-accent-500/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Core Strengths -->
          <div class="group glass p-8 rounded-2xl hover-lift transition-all duration-500 border border-orange-500/20 hover:border-orange-500/50">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Core Strengths</h3>
            </div>
            <div class="space-y-3">
              <div *ngFor="let skill of data.skills.core; let i = index" 
                   class="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg hover:bg-orange-500/10 transition-all duration-300 transform hover:translate-x-2"
                   [style.animation-delay]="(i * 0.1) + 's'">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-orange-400 font-bold text-xs">{{getSkillIcon(skill)}}</span>
                  </div>
                  <span class="text-dark-200 font-medium text-sm">{{skill}}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Stats Section -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-black text-primary-500 mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
            <div class="text-dark-300 font-medium">Years Experience</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-black text-secondary-500 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div class="text-dark-300 font-medium">Technologies</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-black text-accent-500 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div class="text-dark-300 font-medium">Projects</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div class="text-dark-300 font-medium">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = portfolioData;
  }

  getSkillIcon(skill: string): string {
    const iconMap: { [key: string]: string } = {
      'Angular (13-20)': 'NG',
      'AngularJS': 'JS',
      'TypeScript': 'TS',
      'JavaScript (ES6+)': 'JS',
      'RxJS': 'RX',
      'HTML5': 'H5',
      'CSS3': 'C3',
      'SCSS': 'SC',
      'Tailwind CSS': 'TW',
      'Core Java': 'JV',
      'Node.js': 'ND',
      'PHP': 'PHP',
      'RESTful APIs': 'API',
      'MySQL': 'SQL',
      'Git': 'GIT',
      'GitHub': 'GH',
      'Postman': 'PM',
      'VS Code': 'VS',
      'Agile/Scrum': 'AG',
      'SPA Architecture': 'SPA',
      'State Management': 'SM',
      'API Integration': 'API',
      'Code Optimization': 'OPT',
      'AngularJS → Angular Migration': 'MIG'
    };
    return iconMap[skill] || skill.substring(0, 2).toUpperCase();
  }
}