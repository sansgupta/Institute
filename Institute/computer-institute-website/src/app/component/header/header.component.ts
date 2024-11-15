import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-dark text-white p-3">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">Institute</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/courses">Courses</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/contact">Contact</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/placement">Placement</a></li>
            <!-- Search Bar -->
            <li class="nav-item">
              <form class="form-inline my-2 my-lg-0" (submit)="onSearch($event)">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" [(ngModel)]="searchQuery" name="searchQuery" autofocus>
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
  searchQuery: string = ''; // Bind this variable to the search input

  constructor(private router: Router) {}

  // Method to handle search submission and navigate to search results
  onSearch(event: Event): void {
    event.preventDefault(); // Prevent the form from refreshing the page
    if (this.searchQuery) {
      console.log('Navigating to search results for:', this.searchQuery);
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}
