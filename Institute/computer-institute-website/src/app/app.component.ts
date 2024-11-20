import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { HomeComponent } from './component/home/home.component';
import { PlacementComponent } from './component/placement/placement.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FacultyComponent } from './component/faculty/faculty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    HeaderComponent, 
    HomeComponent, 
    AboutComponent, 
    CoursesComponent, 
    ContactComponent, 
    PlacementComponent,
    FooterComponent,
    FacultyComponent
  ],
  template: `
    <app-header (navigate)="handleNavigation($event)"></app-header>

    <main>
    <!-- Conditionally display components based on currentPage -->
    <div *ngIf="currentPage === 'home'"><app-home></app-home></div>
    <div *ngIf="currentPage === 'about'"><app-about></app-about></div>
    <div *ngIf="currentPage === 'courses'"><app-courses></app-courses></div>
    <div *ngIf="currentPage === 'contact'"><app-contact></app-contact></div>
    <div *ngIf="currentPage === 'placement'"><app-placement></app-placement></div>
    <div *ngIf="currentPage === 'faculty'"><app-faculty></app-faculty></div>
  </main>

    <app-footer></app-footer> <!-- Add the footer here -->
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'home'; // Default page

  constructor(private location: Location) {}

  // Handle navigation triggered by the header
  handleNavigation(page: string): void {
    this.currentPage = page; // Change the current page based on the selected page
    this.location.replaceState(page); // Optionally, update the URL without reloading
  }
}
