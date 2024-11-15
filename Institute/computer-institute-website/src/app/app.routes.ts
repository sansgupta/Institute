// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { HomeComponent } from './component/home/home.component';
import { PlacementComponent } from './component/placement/placement.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },  // Assuming you have a HomeComponent
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'placement', component: PlacementComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
