import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container text-center my-5">
      <h1 class="display-4 text-primary">Welcome to our Computer Institute</h1>
      <p class="lead text-secondary">
        Empowering students with state-of-the-art labs, expert faculty, and a robust library.
      </p>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Labs</h3>
              <p class="card-text">Equipped with 50+ high-performance computers.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Classes</h3>
              <p class="card-text">Interactive sessions with experienced instructors.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Library</h3>
              <p class="card-text">Access to 10,000+ tech books and journals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      border: none;
    }
    .card-title {
      color: #007bff;
    }
  `]
})
export class HomeComponent {}
