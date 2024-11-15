import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,  // Include RouterModule for routing
    HeaderComponent // Import HeaderComponent
  ],
  templateUrl: './app.component.html', // External HTML file for the template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Institute Website';
}
