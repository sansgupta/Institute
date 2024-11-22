import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // Define the arrays to store faculty, courses, and placements
  faculties: { name: string }[] = [];
  courses: { name: string }[] = [];
  placements: { details: string }[] = [];

  // Add faculty
  addFaculty(faculty: { name: string }): void {
    this.faculties.push(faculty);
  }

  // Remove faculty
  removeFaculty(faculty: { name: string }): void {
    this.faculties = this.faculties.filter((f) => f !== faculty);
  }

  // Add course
  addCourse(course: { name: string }): void {
    this.courses.push(course);
  }

  // Remove course
  removeCourse(course: { name: string }): void {
    this.courses = this.courses.filter((c) => c !== course);
  }

  // Add placement
  addPlacement(placement: { details: string }): void {
    this.placements.push(placement);
  }

  // Remove placement
  removePlacement(placement: { details: string }): void {
    this.placements = this.placements.filter((p) => p !== placement);
  }
}
