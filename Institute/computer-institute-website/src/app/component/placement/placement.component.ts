import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css'],
})
export class PlacementComponent {
  students = [
    { name: 'John Doe', company: 'Google' },
    { name: 'Jane Smith', company: 'Microsoft' },
  ];

  jobListings: { company: string; title: string; description: string }[] = [];

  postJob(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const company = formData.get('company') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (company && title && description) {
      this.jobListings.push({ company, title, description });
      form.reset();
    }
  }

  deleteJob(index: number) {
    this.jobListings.splice(index, 1);
  }
}
