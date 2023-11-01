import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contact = {
    name: '',
    email: '',
    phone: '',
    comment: ''
  };

  submitForm() {
    // You can handle the form submission here, e.g., send data to a server.
    console.log('Form submitted:', this.contact);
  }

}
