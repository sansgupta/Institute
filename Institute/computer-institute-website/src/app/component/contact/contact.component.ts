import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container my-5">
      <h2 class="text-center text-primary">Contact Us</h2>

      <div class="mt-5">
        <h4 class="text-center text-secondary">Get in Touch</h4>
        <form class="d-flex flex-column align-items-center mt-4" (submit)="onSubmit()">
          <!-- User's Name Text Box -->
          <input 
            type="text" 
            class="form-control mb-3" 
            placeholder="Your Name" 
            (input)="onNameChange($event)" 
          />
          
          <!-- User's Email Text Box (Not Mandatory) -->
          <input 
            type="email" 
            class="form-control mb-3" 
            placeholder="Your Email" 
            (input)="onEmailChange($event)" 
          />
          
          <!-- User's Phone Number Text Box (Mandatory) -->
          <input 
            type="tel" 
            class="form-control mb-3" 
            placeholder="Your Phone Number" 
            (input)="onPhoneChange($event)" 
            required
            pattern="^[0-9]{10}$"
            maxlength="10" 
            minlength="10"
          />
          
          <!-- Message Text Box -->
          <textarea 
            class="form-control mb-3" 
            rows="4" 
            placeholder="Write your message here..." 
            (input)="onMessageChange($event)"
          ></textarea>

          <button type="submit" class="btn btn-primary mt-3">Send Message</button>
        </form>
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
    .form-control {
      width: 80%;
      max-width: 600px;
      margin: 10px 0;
    }
  `]
})
export class ContactComponent {
  name: string = '';  // To store user's name
  email: string = ''; // To store user's email (optional)
  phone: string = ''; // To store user's phone number
  message: string = ''; // To store user's message

  // This method captures the input value in the name text box
  onNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  // This method captures the input value in the email text box (optional)
  onEmailChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.email = inputElement.value;
  }

  // This method captures the input value in the phone number text box
  onPhoneChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.phone = inputElement.value;
  }

  // This method captures the input value in the message text area
  onMessageChange(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    this.message = inputElement.value;
  }

  // Regular expression to validate phone number (exactly 10 digits, only numbers)
  validatePhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10}$/; // Ensures the phone number is exactly 10 digits and contains only numbers
    return phoneRegex.test(phone);
  }

  // Regular expression to validate email address (optional)
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    return emailRegex.test(email);
  }

  // Handle form submission
  onSubmit() {
    // Validate phone number before submission (make phone number mandatory)
    if (!this.phone) {
      alert('Phone number is required!');
      return;
    }
    if (!this.validatePhone(this.phone)) {
      alert('Please enter a valid phone number (exactly 10 digits and only numbers).');
      return;
    }

    // Validate email address (optional)
    if (this.email && !this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Message:', this.message);
    // Handle your form submission logic here (e.g., send to API)
  }
}
