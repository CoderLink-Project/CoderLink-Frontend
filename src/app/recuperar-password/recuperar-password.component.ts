import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeveloperService } from '../services/developer.service';
import { Developer } from '../_models/datos-developer';
import { MatTableModule } from '@angular/material/table' 
import {MatSliderModule} from '@angular/material/slider';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatSliderModule],
  templateUrl: './recuperar-password.component.html',
  styleUrl: './recuperar-password.component.css'
})
export class RecuperarPasswordComponent {

  recoveryPasswordForm = this.fb.group({
    user: new FormControl('',Validators.required)}
  );


  message: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){
  }

  async sendMail(){

    var correo = this.recoveryPasswordForm.get('user')?.value

    const usuarioRecover =
    {
      "email": this.recoveryPasswordForm?.get('user')?.value,
      "password": "example"
    }

    const response= await this.userService.searchByMail(usuarioRecover).subscribe(
      response => {
        this.message = 'Se ha enviado un correo a la dirección proporcionada. Por favor revisa tu bandeja de entrada.';
        this.error = '';
      },
      error => {
        this.error = error;
        this.message = '';
      }
    );

  }

}
