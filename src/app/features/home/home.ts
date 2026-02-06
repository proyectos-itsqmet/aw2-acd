import { Component } from '@angular/core';
import { WhyChooseUs } from '../../shared/why-choose-us/why-choose-us';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { Hero } from '../../shared/hero/hero';
import { BestSellingProducts } from '../../shared/best-selling-products/best-selling-products';

@Component({
  selector: 'app-home',
  imports: [WhyChooseUs, Testimonials, Hero, BestSellingProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
