import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Freelancer {
  nombre: string;
  descripcion: string;
  web: string;
}

@Component({
  selector: 'app-revisar-portafolio-freelancer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-freelancer-portfolio.component.html',
  styleUrl: './review-freelancer-portfolio.component.scss'
})
export class RevisarPortafolioFreelancerComponent {
  constructor (private router: Router) {}
  freelancers: Freelancer[] = [
    { nombre: 'Juan Herrera Mariños', descripcion: 'Descripcion de la pagina web brindada', web: '' },
    { nombre: '', descripcion: 'En esta pagina Implemento mis proyectos de github para ser observadas y analizadas por el cliente para una mejor confiabilidad', web: 'https://github.com/raul151999/front-laboratorio' },
    { nombre: '', descripcion: 'Descripción de la pagina web brindada', web: '' }
  ];
    openLink(url: string): void {
      window.open(url, '_blank');
    }
    navigateBack() {
      // Cambia '/freelancer' por la ruta que deseas
      this.router.navigate(['/freelancer']);
    }
}
