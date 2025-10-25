import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  socialLinks = [
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
  ];
}
