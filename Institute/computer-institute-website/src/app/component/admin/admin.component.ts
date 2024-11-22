import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(public adminService: AdminService) {}

  /**
   * Add a new faculty member.
   * @param facultyName - The name of the faculty to add.
   */
  addFaculty(facultyName: string): void {
    if (facultyName.trim()) {
      this.adminService.addFaculty({ name: facultyName.trim() });
    } else {
      console.error('Faculty name cannot be empty');
    }
  }

  /**
   * Add a new course.
   * @param courseName - The name of the course to add.
   */
  addCourse(courseName: string): void {
    if (courseName.trim()) {
      this.adminService.addCourse({ name: courseName.trim() });
    } else {
      console.error('Course name cannot be empty');
    }
  }

  /**
   * Add a new placement.
   * @param placementDetails - The details of the placement to add.
   */
  addPlacement(placementDetails: string): void {
    if (placementDetails.trim()) {
      this.adminService.addPlacement({ details: placementDetails.trim() });
    } else {
      console.error('Placement details cannot be empty');
    }
  }

  /**
   * Remove an existing faculty member.
   * @param faculty - The faculty object to remove.
   */
  removeFaculty(faculty: { name: string }): void {
    if (faculty) {
      this.adminService.removeFaculty(faculty);
    } else {
      console.error('Invalid faculty object');
    }
  }

  /**
   * Remove an existing course.
   * @param course - The course object to remove.
   */
  removeCourse(course: { name: string }): void {
    if (course) {
      this.adminService.removeCourse(course);
    } else {
      console.error('Invalid course object');
    }
  }

  /**
   * Remove an existing placement.
   * @param placement - The placement object to remove.
   */
  removePlacement(placement: { details: string }): void {
    if (placement) {
      this.adminService.removePlacement(placement);
    } else {
      console.error('Invalid placement object');
    }
  }
}
