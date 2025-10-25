import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
}
