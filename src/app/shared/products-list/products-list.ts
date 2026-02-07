import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  @Input() products?: Product[];
}
