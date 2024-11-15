import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  template: `
    <h2>Search Results</h2>
    <div *ngIf="searchQuery">
      <p>Showing results for: {{ searchQuery }}</p>
      <!-- Display the filtered results here -->
    </div>
  `,
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
    });
  }
}
