import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

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
    { name: 'PHP & MySQL', level: 75, color: ['from-green-400', 'to-teal-400'], icon: '🗄️' },
    { name: 'REST APIs', level: 80, color: ['from-red-400', 'to-pink-500'], icon: '🔗' },
    { name: 'RxJS & State Management', level: 70, color: ['from-indigo-500', 'to-purple-500'], icon: '♻️' },
  ];
}
