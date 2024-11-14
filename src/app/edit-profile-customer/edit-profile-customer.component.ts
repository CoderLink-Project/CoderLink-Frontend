import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-profile-customer.component.html',
  styleUrl: './edit-profile-customer.component.scss'
})
export class EditProfileCustomerComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  companyName: string = '';

  constructor(private router: Router) {}

  save(): void {
    if (!this.email) {
      console.log('Correo no válido');
      return;
    }
    console.log('Guardar cambios');
    alert('Se ha guardado correctamente los cambios');
    this.router.navigate(['/profile-customer'])
  }

  cancel(): void {
    const confirmation = window.confirm('Seguro que deseas cancelar los cambios?');
    if(confirmation) {
    this.router.navigate(['/profile-customer'])
  }
}

  goToChangePassword(): void {
    console.log('Cambiar contraseña');
    this.router.navigate(['/change-password']);
  }

  changePhoto(): void {
    console.log('Cambiar foto');
  }
}