import { Component, Input } from '@angular/core';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCard {
  @Input() testimonial!: Testimonial;
}
