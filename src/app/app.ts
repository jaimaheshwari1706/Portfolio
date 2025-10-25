import { AfterViewInit, Component, signal } from '@angular/core';
import AOS from 'aos';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Projects,
    Skills,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit{
  protected readonly title = signal('portfolio-app');
  
  ngAfterViewInit() {
    AOS.init({ duration: 800, once: true });
  }
}

