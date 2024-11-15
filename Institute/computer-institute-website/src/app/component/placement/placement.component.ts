import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placement',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container my-5">
      <h2 class="text-center text-primary">Placement Portal</h2>

      <h3 class="mt-4">Students Placed</h3>
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let student of students">
            <td>{{ student.name }}</td>
            <td>{{ student.company }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="mt-4">Post a Job</h3>
      <form (submit)="postJob($event)" class="mt-3">
        <div class="mb-3">
          <label for="company" class="form-label">Company Name</label>
          <input type="text" class="form-control" id="company" name="company" required />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">Job Title</label>
          <input type="text" class="form-control" id="title" name="title" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Job Description</label>
          <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success w-100">Post Job</button>
      </form>

      <h3 class="mt-4">Job Listings</h3>
      <table class="table table-bordered mt-3" *ngIf="jobListings.length > 0">
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let job of jobListings; let i = index">
            <td>{{ job.company }}</td>
            <td>{{ job.title }}</td>
            <td>{{ job.description }}</td>
            <td>
              <button class="btn btn-danger" (click)="deleteJob(i)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p *ngIf="jobListings.length === 0" class="text-muted mt-3">No jobs posted yet.</p>
    </div>
  `,
  styles: [
    `
      .table {
        margin-top: 20px;
      }
    `,
  ],
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
      form.reset(); // Clear the form after submission
    }
  }

  deleteJob(index: number) {
    this.jobListings.splice(index, 1);
  }
}
