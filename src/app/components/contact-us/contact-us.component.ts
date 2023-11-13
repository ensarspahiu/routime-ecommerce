import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { EmailService } from 'src/app/services/email-service.';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  formGroup: FormGroup;

  constructor(private formbuilder: FormBuilder, private emailService: EmailService) {
    this.formGroup = this.formbuilder.group({
      name: ["", []],
      email: ["", []],
      comment: ["", []],
    })
  }

  submitForm() {
    this.emailService.sendEmail(this.formGroup.value).subscribe(response => {
      this.formGroup.reset()

    }, error => {
    });
  }

}
