import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  product = {
    name: 'Product of the Month',
    description: 'Explore our featured product with outstanding features.',
    image: 'assets/featured-product.jpg'
  };
}
