import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  product = {
    name: 'Product 1',
    description: 'This is a creative product description for Product 1.',
    image: 'assets/product1.jpg'
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
      threshold: 0.4,
    });
    logo.forEach(logo => {
      observer.observe(logo)
    })
  }
}
