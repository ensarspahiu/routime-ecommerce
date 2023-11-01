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
    {
      name: 'Product 2',
      description: 'Discover the amazing features of Product 2.',
      image: 'assets/product2.jpg'
    },
    {
      name: 'Product 3',
      description: 'Get ready to be impressed by Product 3.',
      image: 'assets/product3.jpg'
    }
    // Add more products here
  ];
}
