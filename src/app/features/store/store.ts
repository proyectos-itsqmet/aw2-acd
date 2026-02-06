import { Component } from '@angular/core';
import { ProductsList } from '../../shared/products-list/products-list';

@Component({
  selector: 'app-store',
  imports: [ProductsList],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
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
    {
      name: 'Lenovo Legion Tower 5i - Procesador Intel® Core Ultra 7 265F - Gráficos NVIDIA® GeForce RTX™ 5070 Ti - 32 GB de Memoria - 1 TB de Almacenamiento',
      price: 2107.66,
      imageUrl: 'https://m.media-amazon.com/images/I/51XekLq5PxL._AC_.jpg',
      stock: 1,
      categoria: 'PCs de Escritorio',
    },
    {
      name: 'BladeHawks Alfombrilla de mouse RGB',
      price: 16.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51UsbIj9HAL._AC_SL1000_.jpg',
      stock: 12,
      categoria: 'Accesorios',
    },
    {
      name: 'Silla Gamer Dowinx',
      price: 169.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71wTMO+iQIL._AC_SL1500_.jpg',
      stock: 4,
      categoria: 'Accesorios',
    },
    {
      name: 'SAMSUNG - Monitor Gamer ultraancho Odyssey G5 de 34"',
      price: 299.99,
      imageUrl: 'https://m.media-amazon.com/images/I/81Pm4yGtiYL._AC_SL1500_.jpg',
      stock: 7,
      categoria: 'Monitores',
    },
  ];
}
