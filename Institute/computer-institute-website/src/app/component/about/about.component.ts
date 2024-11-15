import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container my-5">
      <h2 class="text-center text-primary">About Us</h2>
      <p class="lead text-secondary text-center mt-3">
        Welcome to our Computer Institute! We provide world-class training in computer technologies and help students build successful careers in IT.
      </p>

      <!-- Address, Phone, Email Section -->
      <div class="text-center mt-5">
        <h4 class="text-secondary">Contact Information</h4>

        <p><strong>Address:</strong> 123 Institute Road, City, State, ZIP</p>
        <p><strong>Phone:</strong> +1 234-567-890</p>
        <p><strong>Email:</strong> contact&#64;institute.com</p>
      </div>

      <!-- Social Media Links Section -->
      <div class="text-center mt-4">
        <h3 class="text-secondary">Follow Us</h3>

        <div class="d-flex justify-content-center gap-3 mt-3">
          <a href="https://www.facebook.com" target="_blank" class="btn btn-outline-primary" title="Facebook">
            <i class="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" class="btn btn-outline-danger" title="Instagram">
            <i class="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://www.twitter.com" target="_blank" class="btn btn-outline-info" title="Twitter">
            <i class="bi bi-twitter"></i> Twitter
          </a>
          <a href="https://www.linkedin.com" target="_blank" class="btn btn-outline-primary" title="LinkedIn">
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
    .text-center {
      text-align: center;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {}
