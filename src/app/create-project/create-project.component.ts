import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProjectService } from '../services/create-project.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crete-project',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  proyectoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private createProjectService: CreateProjectService
  ) {
    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['', Validators.required],
      estado: ['in-progress', Validators.required],
      revision: ['', Validators.required],
      categoria: ['', Validators.required],
      calificacion: ['1', Validators.required]
    });
  }

  goToHome() {
    this.router.navigate(['/profile-customer']);
  }

  onSubmit() {
    if (this.proyectoForm.valid) {
      this.createProjectService.crearProyecto(this.proyectoForm.value).subscribe({
        next: () => {
          alert('Proyecto creado con éxito');
          this.router.navigate(['/profile-customer']);
        },
        error: (err) => {
          console.error('Error al crear el proyecto:', err);
          alert('Hubo un error al crear el proyecto');
        }
      });
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
