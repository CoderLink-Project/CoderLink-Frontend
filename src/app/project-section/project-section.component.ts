import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ProjectSectionService } from '../services/project-section.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent implements OnInit {
  jobs: Job[] = []; // Definimos el arreglo de trabajos

  constructor(private projectSectionService: ProjectSectionService) {} // Inyectamos el servicio

  ngOnInit(): void {
    this.jobs = this.projectSectionService.getJobs(); // Obtiene los trabajos del servicio al inicializar el componente
  }

  viewJobDetails(jobId: number) {
    const job = this.projectSectionService.getJobById(jobId); // Llama al servicio para obtener detalles
    if (job) {
      console.log('Detalles del trabajo:', job);
    } else {
      console.log('Trabajo no encontrado');
    }
  }
}