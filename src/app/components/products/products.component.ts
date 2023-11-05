import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      description: 'This is a creative product description for Product 1.',
      image: 'assets/product1.jpg'
    },
    // Add more products here
  ];
}
