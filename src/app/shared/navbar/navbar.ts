import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  navBarMenu = [
    {
      nombre: 'Home',
      path: '',
    },
    {
      nombre: 'Tienda',
      path: 'store',
    },
    {
      nombre: 'Acerca',
      path: 'about',
    },
    {
      nombre: 'Contacto',
      path: 'contact',
    },
  ];

  get isHome(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }
}
