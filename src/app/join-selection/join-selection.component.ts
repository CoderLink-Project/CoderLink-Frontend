import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor,NgIf,NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-selection',
  standalone:true,
  imports: [NgIf,NgFor,NgClass,FormsModule, RouterModule],
  templateUrl: './join-selection.component.html',
  styleUrls: ['./join-selection.component.scss']
})
export class JoinSelectionComponent {
  selectedOption: string | null = null;

  constructor(private router: Router) {}

  selectOption(option: string) {
    this.selectedOption = option;
  }

  createAccount() {
    if (this.selectedOption === 'cliente') {
      this.router.navigate(['/register-client']);
    } else if (this.selectedOption === 'freelancer') {
      this.router.navigate(['/register-freelancer']);
    }
  }

  login() {
    this.router.navigate(['/login']); // Añadir este método para la redirección
  }
}

