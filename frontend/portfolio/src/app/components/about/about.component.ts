import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p class="text-dark-300 text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <!-- Main Content -->
          <div class="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <!-- Bio Section -->
            <div class="space-y-6">
              <div class="glass p-8 rounded-2xl border border-primary-500/20">
                <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
                  <div class="w-8 h-8 bg-gradient-primary rounded-lg mr-3 flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  My Story
                </h3>
                <p class="text-dark-200 leading-relaxed mb-6 text-lg">
                  {{data.personal.bio}}
                </p>
                
                <!-- Key Highlights -->
                <div class="grid grid-cols-2 gap-4 mt-8">
                  <div class="text-center p-4 bg-primary-500/10 rounded-xl border border-primary-500/20">
                    <div class="text-2xl font-black text-primary-400 mb-1">1+</div>
                    <div class="text-dark-300 text-sm font-medium">Years Experience</div>
                  </div>
                  <div class="text-center p-4 bg-secondary-500/10 rounded-xl border border-secondary-500/20">
                    <div class="text-2xl font-black text-secondary-400 mb-1">10+</div>
                    <div class="text-dark-300 text-sm font-medium">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div class="glass p-6 rounded-2xl border border-secondary-500/20">
                <h4 class="text-lg font-bold mb-4 text-white flex items-center">
                  <div class="w-6 h-6 bg-gradient-secondary rounded-lg mr-2 flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  Get In Touch
                </h4>
                <div class="space-y-3">
                  <div class="flex items-center p-3 bg-dark-800/50 rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
                    <svg class="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-dark-200 text-sm">{{data.personal.email}}</span>
                  </div>
                  <div class="flex items-center p-3 bg-dark-800/50 rounded-lg hover:bg-secondary-500/10 transition-colors duration-300">
                    <svg class="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span class="text-dark-200 text-sm">{{data.personal.location}}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Quick Facts & Skills Overview -->
            <div class="space-y-6">
              <!-- Quick Facts -->
              <div class="glass p-8 rounded-2xl border border-accent-500/20">
                <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
                  <div class="w-8 h-8 bg-gradient-accent rounded-lg mr-3 flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  Quick Facts
                </h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 bg-dark-800/50 rounded-xl hover:bg-accent-500/10 transition-colors duration-300">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span class="text-dark-200 font-medium">Experience</span>
                    </div>
                    <span class="text-primary-400 font-bold">1+ Years</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-4 bg-dark-800/50 rounded-xl hover:bg-secondary-500/10 transition-colors duration-300">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                      </div>
                      <span class="text-dark-200 font-medium">Specialization</span>
                    </div>
                    <span class="text-secondary-400 font-bold text-sm">Angular & TypeScript</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-4 bg-dark-800/50 rounded-xl hover:bg-accent-500/10 transition-colors duration-300">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <span class="text-dark-200 font-medium">Focus</span>
                    </div>
                    <span class="text-accent-400 font-bold text-sm">Frontend Development</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-4 bg-dark-800/50 rounded-xl hover:bg-orange-500/10 transition-colors duration-300">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <span class="text-dark-200 font-medium">Methodology</span>
                    </div>
                    <span class="text-orange-400 font-bold text-sm">Agile/Scrum</span>
                  </div>
                </div>
              </div>
              
              <!-- Top Skills Preview -->
              <div class="glass p-6 rounded-2xl border border-primary-500/20">
                <h4 class="text-lg font-bold mb-4 text-white flex items-center">
                  <div class="w-6 h-6 bg-gradient-primary rounded-lg mr-2 flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  Top Skills
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let skill of data.skills.frontend.slice(0, 4)" 
                        class="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 text-primary-400 rounded-full text-xs font-medium hover:border-primary-500/50 transition-colors duration-300">
                    {{skill}}
                  </span>
                  <a href="#skills" class="px-3 py-1 bg-dark-700 border border-dark-600 text-dark-300 hover:text-primary-400 hover:border-primary-500/30 rounded-full text-xs font-medium transition-colors duration-300">
                    +{{data.skills.frontend.length - 4}} more
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="text-center">
            <div class="glass p-8 rounded-2xl border border-primary-500/20 inline-block">
              <h3 class="text-xl font-bold text-white mb-4">Ready to collaborate?</h3>
              <p class="text-dark-300 mb-6">Let's discuss your next project and bring your ideas to life.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" 
                   class="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
                  Get In Touch
                </a>
                <a href="#projects" 
                   class="px-6 py-3 border border-primary-500/50 text-primary-400 hover:text-white rounded-xl font-semibold transition-all duration-300 glass hover:bg-primary-500/10">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = portfolioData;
  }
}