import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="bg-dark text-white p-3">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">Institute</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('home')">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('about')">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('courses')">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('contact')">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('placement')">Placement</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" (click)="navigateToPage('faculty')">Faculty</a>
            </li>
            <!-- Search Bar -->
            <li class="nav-item">
              <form class="form-inline my-2 my-lg-0" (submit)="onSearch($event)">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" #searchInput>
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [
    ` 
      .form-inline {
        display: flex;
        justify-content: flex-end;
      }
      .form-control {
        width: 250px;
      }
    `,
  ],
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>(); // Emit the selected page

  // Handle navigation
  navigateToPage(page: string): void {
    this.navigate.emit(page); // Emit the page to the parent component (AppComponent)
  }

  // Handle search form submission
  onSearch(event: Event): void {
    event.preventDefault(); // Prevent form refresh
    const searchQuery = (event.target as HTMLFormElement).querySelector('input')?.value; // Get search query from input field
    console.log('Searching for:', searchQuery); // Placeholder for search logic
  }
}
