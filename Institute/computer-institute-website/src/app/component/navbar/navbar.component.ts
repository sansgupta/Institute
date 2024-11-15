import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/placement">Placement</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule]  // Import RouterModule for routerLink
})
export class NavbarComponent { }
