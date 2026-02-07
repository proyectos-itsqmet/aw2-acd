import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgClass } from '@angular/common';
import { Toast } from '../toast/toast';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, Toast],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  selectProduct: Product | null = null;

  onProductSelected(product: Product): void {
    this.selectProduct = product;
  }

  showToast(message: string): void {
    `Producto agregado: ${message}`;
  }
}
