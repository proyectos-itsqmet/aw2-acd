import { Component } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-best-selling-products',
  imports: [ProductsList, RouterLink],
  templateUrl: './best-selling-products.html',
  styleUrl: './best-selling-products.css',
})
export class BestSellingProducts {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop HP OMEN 16"',
      price: 1401.49,
      imageUrl: 'https://m.media-amazon.com/images/I/81xymmadRfL._AC_SL1500_.jpg',
      stock: 15,
      category: 'Laptops',
    },
    {
      id: 2,
      name: 'Mouse Logitech MX Master 3S',
      price: 84.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51m4354BqaL._AC_SL1500_.jpg',
      stock: 0,
      category: 'Accesorios',
    },
    {
      id: 3,
      name: 'Teclado Mecánico Razer BlackWidow',
      price: 144.99,
      imageUrl: 'https://m.media-amazon.com/images/I/81qH7xXQJSL._AC_SL1500_.jpg',
      stock: 28,
      category: 'Accesorios',
    },
    {
      id: 4,
      name: 'Audifonos Corsair Virtuoso RGB Wireless XT',
      price: 199.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71xK0oPvBLL._AC_SL1500_.jpg',
      stock: 19,
      category: 'Accesorios',
    },
  ];
}
