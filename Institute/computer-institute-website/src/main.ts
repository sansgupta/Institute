import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./app/component/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./app/component/about/about.component').then(m => m.AboutComponent) },
  { path: 'courses', loadComponent: () => import('./app/component/courses/courses.component').then(m => m.CoursesComponent) },
  { path: 'placement', loadComponent: () => import('./app/component/placement/placement.component').then(m => m.PlacementComponent) },
  { path: 'contact', loadComponent: () => import('./app/component/contact/contact.component').then(m => m.ContactComponent) },

  // Add route for SearchComponent
  { path: 'search', loadComponent: () => import('./app/component/search/search.component').then(m => m.SearchResultsComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule) // Import CommonModule to use common Angular directives
  ]
}).catch(err => console.error(err));
