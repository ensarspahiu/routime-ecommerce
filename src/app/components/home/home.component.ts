import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/services/email-service.';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
      console.log(response);
      this.formGroup.reset()
    }, error => {
      console.log(error);
    });
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
    };
    const logo = document.querySelectorAll('.hide')

    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
      });
    }, {
      threshold: 0.3,
    });
    logo.forEach(logo => {
      observer.observe(logo)
    })
  }

  product = {
    name: 'Product of the Month',
    description: 'Explore our featured product with outstanding features.',
    image: 'assets/featured-product.jpg'
  };
}
