import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20">
        <div class="particles" id="particles"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 animate-gradient bg-[length:200%_200%]"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-20 w-16 h-16 bg-accent-500/20 rounded-full blur-xl animate-float" style="animation-delay: 2s;"></div>
      
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="space-y-8">
          <!-- Greeting -->
          <div class="animate-fade-in-down">
            <span class="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
              👋 Hello, I'm
            </span>
          </div>
          
          <!-- Name with Glow Effect -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up">
            <span class="bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-300 bg-clip-text text-transparent" style="-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;">
              {{data.personal.name}}
            </span>
          </h1>
          
          <!-- Typing Animation Title -->
          <div class="h-16 flex items-center justify-center animate-fade-in-up" style="animation-delay: 0.3s;">
            <h2 class="text-2xl md:text-4xl text-dark-200 font-mono">
              <span class="typing-animation">{{data.personal.title}}</span>
            </h2>
          </div>
          
          <!-- Bio -->
          <p class="text-lg md:text-xl text-dark-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style="animation-delay: 0.6s;">
            {{data.personal.bio}}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style="animation-delay: 0.9s;">
            <a href="#projects" 
               class="group relative px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover-lift shadow-glow hover:shadow-glow-lg">
              <span class="relative z-10">View My Work</span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <!-- <a href="/CV.pdf" download="CV.pdf"
               class="group relative px-8 py-4 border-2 border-secondary-500/50 text-secondary-400 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glass hover-lift">
              <span class="relative z-10 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </span>
              <div class="absolute inset-0 bg-gradient-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a> -->
            <a href="#contact" 
               class="group relative px-8 py-4 border-2 border-primary-500/50 text-primary-400 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glass hover-lift">
              <span class="relative z-10">Get In Touch</span>
              <div class="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <!-- Social Links -->
          <div class="flex justify-center space-x-8 mt-16 animate-fade-in-up" style="animation-delay: 1.2s;">
            <a [href]="data.personal.social.github" target="_blank" 
               class="group p-4 bg-dark-800/50 hover:bg-primary-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 glass">
              <svg class="w-8 h-8 text-dark-300 group-hover:text-primary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a [href]="data.personal.social.linkedin" target="_blank" 
               class="group p-4 bg-dark-800/50 hover:bg-primary-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 glass">
              <svg class="w-8 h-8 text-dark-300 group-hover:text-primary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:{{data.personal.email}}" 
               class="group p-4 bg-dark-800/50 hover:bg-primary-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 glass">
              <svg class="w-8 h-8 text-dark-300 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
          
          <!-- Scroll Indicator -->
          <!-- <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div class="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, AfterViewInit {
  data: any;

  ngOnInit() {
    this.data = portfolioData;
  }

  ngAfterViewInit() {
    this.createParticles();
  }

  private createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particlesContainer.appendChild(particle);
    }
  }
}