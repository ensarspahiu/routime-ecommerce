import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  formGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) {
   this.formGroup =  this.formbuilder.group({
      name: ["",[]],
      email: ["",[]],
      comment:["",[]],
    })
  }

  submitForm() {
    // You can handle the form submission here, e.g., send data to a server.
    console.log('Form submitted:', this.formGroup.value);
    this.formGroup.reset()
  }

}
