import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import portfolioData from '../../data/portfolio.json';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <section id="contact" class="py-20 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-20 left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p class="text-dark-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="glass p-8 rounded-2xl border border-primary-500/20">
              <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
                <div class="w-8 h-8 bg-gradient-primary rounded-lg mr-3 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                Contact Information
              </h3>
              
              <div class="space-y-6">
                <div class="group flex items-center p-4 bg-dark-800/50 rounded-xl hover:bg-primary-500/10 transition-all duration-300">
                  <div class="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-dark-400 text-sm font-medium">Email</div>
                    <div class="text-white font-semibold">{{data.personal.email}}</div>
                  </div>
                </div>
                
                <div class="group flex items-center p-4 bg-dark-800/50 rounded-xl hover:bg-secondary-500/10 transition-all duration-300">
                  <div class="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-secondary-500/30 transition-colors duration-300">
                    <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-dark-400 text-sm font-medium">Phone</div>
                    <div class="text-white font-semibold">{{data.personal.phone}}</div>
                  </div>
                </div>
                
                <div class="group flex items-center p-4 bg-dark-800/50 rounded-xl hover:bg-accent-500/10 transition-all duration-300">
                  <div class="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent-500/30 transition-colors duration-300">
                    <svg class="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-dark-400 text-sm font-medium">Location</div>
                    <div class="text-white font-semibold">{{data.personal.location}}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="glass p-8 rounded-2xl border border-secondary-500/20">
              <h4 class="text-xl font-bold mb-6 text-white flex items-center">
                <div class="w-8 h-8 bg-gradient-secondary rounded-lg mr-3 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </div>
                Connect With Me
              </h4>
              <div class="flex space-x-4">
                <a [href]="data.personal.social.github" target="_blank" 
                   class="group p-4 bg-dark-800/50 hover:bg-primary-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                  <svg class="w-8 h-8 text-dark-400 group-hover:text-primary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a [href]="data.personal.social.linkedin" target="_blank" 
                   class="group p-4 bg-dark-800/50 hover:bg-secondary-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                  <svg class="w-8 h-8 text-dark-400 group-hover:text-secondary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:{{data.personal.email}}" 
                   class="group p-4 bg-dark-800/50 hover:bg-accent-500/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                  <svg class="w-8 h-8 text-dark-400 group-hover:text-accent-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="glass p-8 rounded-2xl border border-primary-500/20">
            <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
              <div class="w-8 h-8 bg-gradient-primary rounded-lg mr-3 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              Send Message
            </h3>
            
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-dark-300 text-sm font-medium mb-2">Name *</label>
                  <input type="text" [(ngModel)]="form.name" name="name" required
                         class="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:bg-dark-800 focus:outline-none transition-all duration-300"
                         placeholder="Your full name">
                </div>
                <div class="group">
                  <label class="block text-dark-300 text-sm font-medium mb-2">Email *</label>
                  <input type="email" [(ngModel)]="form.email" name="email" required
                         class="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:bg-dark-800 focus:outline-none transition-all duration-300"
                         placeholder="your.email@example.com">
                </div>
              </div>
              
              <div class="group">
                <label class="block text-dark-300 text-sm font-medium mb-2">Subject *</label>
                <input type="text" [(ngModel)]="form.subject" name="subject" required
                       class="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:bg-dark-800 focus:outline-none transition-all duration-300"
                       placeholder="What's this about?">
              </div>
              
              <div class="group">
                <label class="block text-dark-300 text-sm font-medium mb-2">Message *</label>
                <textarea [(ngModel)]="form.message" name="message" rows="6" required
                          class="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:bg-dark-800 focus:outline-none resize-none transition-all duration-300"
                          placeholder="Tell me about your project or idea..."></textarea>
              </div>
              
              <button type="submit" [disabled]="isSubmitting"
                      class="group w-full bg-gradient-primary hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting" class="flex items-center space-x-2">
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </span>
                <svg *ngIf="!isSubmitting" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
            
            <!-- Success/Error Message -->
            <div *ngIf="submitMessage" 
                 class="mt-6 p-4 rounded-xl border transition-all duration-300" 
                 [class]="submitSuccess ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'">
              <div class="flex items-center space-x-2">
                <svg *ngIf="submitSuccess" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg *ngIf="!submitSuccess" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="font-medium">{{submitMessage}}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="text-center mt-16 pt-8 border-t border-dark-700">
          <p class="text-dark-400">
            © 2024 {{data.personal.name}}. Built with ❤️ using Angular & Node.js
          </p>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit {
  data: any;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data = portfolioData;
  }

  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';
    
    // Simulate form submission
    setTimeout(() => {
      this.submitSuccess = false;
      this.submitMessage = 'Please contact me directly via email or LinkedIn.';
      this.isSubmitting = false;
      
      // Auto-hide message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 1000);
  }
}