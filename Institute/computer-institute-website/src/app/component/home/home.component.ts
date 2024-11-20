import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Dynamic data for cards
  cardData = [
    {
      title: 'Modern Labs',
      description: 'State-of-the-art computer labs with the latest technology and software.',
      image: '/assets/images/labs.jpg'
    },
    {
      title: 'Classrooms',
      description: 'Comfortable and spacious classrooms for interactive learning.',
      image: '/assets/images/classrooms.jpg'
    },
    {
      title: 'Library',
      description: 'A well-stocked library with books, journals, and e-resources.',
      image: '/assets/images/library.png'
    }
  ];
}
