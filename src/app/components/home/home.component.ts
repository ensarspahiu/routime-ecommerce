import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

  ngAfterViewInit(){
    const options = {
      root: null,
      rootMargin: '0px',
    };
    const logo = document.querySelectorAll('.hide')

    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
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
