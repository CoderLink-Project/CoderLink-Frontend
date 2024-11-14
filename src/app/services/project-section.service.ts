import { Injectable } from '@angular/core';
import { findSourceMap } from 'module';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectSectionService {

    private jobs: Job[] = [
      { id: 1, title: 'Desarrollo de Sitio Web', description: 'Busco un desarrollador web para un sitio de comercio electrónico.', price: 500, location: 'Remoto' },
      { id: 2, title: 'Diseño Gráfico', description: 'Necesito un diseñador gráfico para un proyecto de marca.', price: 300, location: 'Lima, Perú' },
      { id: 3, title: 'Redacción de Contenido', description: 'Busco un redactor para crear contenido para mi blog.', price: 150, location: 'Remoto' }
    ];

    getJobs(): Job[] {
      return this.jobs;
    }

    getJobById(id: number): Job | undefined {
      return this.jobs.find(job => job.id === id);
    }
}
