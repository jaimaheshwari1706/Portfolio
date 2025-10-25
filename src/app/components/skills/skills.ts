import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {
  skills = [
    { name: 'Angular', level: 90, color: ['from-pink-500', 'to-blue-500'], icon: '⚡' },
    { name: 'TypeScript', level: 85, color: ['from-blue-400', 'to-cyan-400'], icon: '💻' },
    { name: 'Tailwind CSS', level: 95, color: ['from-purple-500', 'to-pink-400'], icon: '🎨' },
    { name: 'JavaScript', level: 80, color: ['from-yellow-400', 'to-orange-400'], icon: '🔥' },
    { name: 'Git & GitHub', level: 75, color: ['from-pink-600', 'to-purple-600'], icon: '🐙' },
    { name: 'Responsive Design', level: 90, color: ['from-green-400', 'to-teal-400'], icon: '📱' },
  ];
}
