import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  whyChooseUs = [
    {
      title: 'Alto Rendimiento',
      description:
        'La ventaja de comprar tecnología con nosotros es que ofrecemos equipos de última generación, optimizados para trabajo, estudio y gaming, con el mejor desempeño del mercado.',
    },
    {
      title: 'Precios Accesibles',
      description:
        'Consigue laptops, PCs y consolas de alta calidad a precios competitivos, sin sacrificar potencia ni durabilidad. Tecnología premium al alcance de todos.',
    },
    {
      title: 'Gran Variedad',
      description:
        'Contamos con múltiples opciones en laptops, PCs armadas, periféricos y videojuegos para que elijas exactamente lo que se adapta a tu estilo y necesidades.',
    },
  ];
}
