import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContactForm(contactData: any): Observable<any> {
    // Simulate sending the data to the backend (for now, it will log to the console)
    console.log(contactData);
    return this.http.post('http://your-backend-endpoint.com/send-email', contactData);  // Replace with actual endpoint
  }
}
