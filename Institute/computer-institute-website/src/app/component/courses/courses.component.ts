import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Course {
  name: string;
  duration: string;
  fee: number;
  classes: number;
  labs: number;
  topics: string[];  // Array to store topics for each course
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container my-5">
      <h2 class="text-center text-primary">Our Courses</h2>
      <p class="lead text-secondary text-center">
        Explore our wide range of courses designed to help you excel in the field of computer technology.
      </p>

      <div class="row mt-4">
        <div class="col-md-4" *ngFor="let course of courses; let i = index">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">{{ course.name }}</h5>
              <p class="card-text">
                <strong>Duration:</strong> {{ course.duration }}<br />
                <strong>Fee:</strong> ₹{{ course.fee }}<br />
                <strong>Classes:</strong> {{ course.classes }}<br />
                <strong>Labs:</strong> {{ course.labs }}
              </p>
              <button class="btn btn-outline-primary w-100" (click)="toggleDetails(i)">
                View Details
              </button>

              <!-- Topics for each course, visibility controlled by 'showDetails' -->
              <div *ngIf="showDetails[i]" class="course-details" style="margin-top: 10px;">
                <h6 class="text-primary">Topics Covered:</h6>
                <ul>
                  <li *ngFor="let topic of course.topics">{{ topic }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `.card { border: none; transition: transform 0.2s; }
     .card:hover { transform: scale(1.05); }
     .btn { margin-top: 10px; }
     .course-details { margin-top: 10px; }`
  ]
})
export class CoursesComponent {
  // Define courses data, including topics for each course
  courses: Course[] = [
    {
      name: 'Web Development',
      duration: '6 months',
      fee: 500,
      classes: 40,
      labs: 10,
      topics: ['HTML & CSS Basics', 'JavaScript', 'React.js', 'Node.js', 'Responsive Design']
    },
    {
      name: 'Machine Learning',
      duration: '8 months',
      fee: 800,
      classes: 60,
      labs: 15,
      topics: ['Python Programming', 'Linear Algebra', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks']
    },
    {
      name: 'Data Science',
      duration: '12 months',
      fee: 1200,
      classes: 80,
      labs: 20,
      topics: ['Data Analysis with Python', 'Pandas and NumPy', 'Data Visualization', 'Statistics for Data Science', 'Machine Learning Algorithms']
    },
    {
      name: 'Cybersecurity',
      duration: '6 months',
      fee: 600,
      classes: 50,
      labs: 12,
      topics: ['Network Security', 'Encryption Techniques', 'Firewalls', 'Malware Analysis', 'Ethical Hacking']
    }
  ];

  // Array to track the visibility of details for each course
  showDetails: boolean[] = new Array(this.courses.length).fill(false);

  // Toggle function to show/hide details
  toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];  // Toggle the visibility of the clicked course
  }
}
