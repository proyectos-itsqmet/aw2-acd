import { Component } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-selling-products',
  imports: [ProductsList, RouterLink],
  templateUrl: './best-selling-products.html',
  styleUrl: './best-selling-products.css',
})
export class BestSellingProducts {
  products = [
    {
      name: 'Laptop HP OMEN 16"',
      price: 1401.49,
      imageUrl: 'https://m.media-amazon.com/images/I/81xymmadRfL._AC_SL1500_.jpg',
      stock: 15,
      categoria: 'Laptops',
    },
    {
      name: 'Mouse Logitech MX Master 3S',
      price: 84.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51m4354BqaL._AC_SL1500_.jpg',
      stock: 0,
      categoria: 'Accesorios',
    },
    {
      name: 'Teclado Mecánico Razer BlackWidow',
      price: 144.99,
      imageUrl: 'https://m.media-amazon.com/images/I/81qH7xXQJSL._AC_SL1500_.jpg',
      stock: 28,
      categoria: 'Accesorios',
    },
    {
      name: 'Audifonos Corsair Virtuoso RGB Wireless XT',
      price: 199.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71xK0oPvBLL._AC_SL1500_.jpg',
      stock: 19,
      categoria: 'Accesorios',
    },
  ];
}
