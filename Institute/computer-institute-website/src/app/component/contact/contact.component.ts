import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
