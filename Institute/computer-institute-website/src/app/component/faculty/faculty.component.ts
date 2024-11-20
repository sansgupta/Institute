import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  faculties = [
    { name: 'Dr. John Doe', department: 'Computer Science', role: 'Class Instructor' },
    { name: 'Dr. Jane Smith', department: 'Mathematics', role: 'Lab Instructor' },
    { name: 'Prof. Robert Brown', department: 'Physics', role: 'Class Instructor' },
    { name: 'Dr. Emily White', department: 'Chemistry', role: 'Lab Instructor' }
  ];
}
