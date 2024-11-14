import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteProjectService } from '../services/delete-project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-project',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent {
  projectId: number = 0;

  constructor(private deleteProjectService: DeleteProjectService, private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  onDelete() {
    if (this.projectId) {
      this.deleteProjectService.deleteProject(this.projectId).subscribe({
        next: () => {
          alert('Proyecto eliminado con éxito');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al eliminar el proyecto:', err);
          alert('Hubo un error al eliminar el proyecto');
        }
      });
    } else {
      alert('Por favor, ingresa un ID de proyecto válido');
    }
  }
}
