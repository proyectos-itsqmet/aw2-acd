import { Component } from '@angular/core';
import { TestimonialCard } from '../testimonial-card/testimonial-card';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Carlos Mendoza',
      testimonial:
        'Excelente servicio! Compré una laptop HP y llegó en perfectas condiciones. El equipo supera mis expectativas, ideal para trabajo y gaming. Totalmente recomendado.',
      imageUrl: 'https://images.pexels.com/photos/28429443/pexels-photo-28429443.jpeg',
      stars: 5,
    },
    {
      name: 'María González',
      testimonial:
        'Los auriculares Sony que compré tienen una calidad de sonido increíble. La atención al cliente fue excepcional y la entrega muy rápida. Sin duda volveré a comprar aquí.',
      imageUrl: 'https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg',
      stars: 5,
    },
    {
      name: 'Jorge Ramírez',
      testimonial:
        'El teclado mecánico que pedí es simplemente perfecto. Buena relación calidad-precio y el envío fue súper rápido. La mejor tienda de tecnología que he encontrado.',
      imageUrl: 'https://images.pexels.com/photos/7389672/pexels-photo-7389672.jpeg',
      stars: 4,
    },
  ];
}
