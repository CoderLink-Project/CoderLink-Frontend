// reset-password.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  ngForm = this.fb.group({
    password: new FormControl('',Validators.required)}
  );

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder, 
    private http: HttpClient,
    private userService: UserService,
    private ng2ImgMaxService: Ng2ImgMaxService, 
    private sanitizer: DomSanitizer 
  ) {
    this.token = this.route.snapshot.queryParams['token'];
  }

  ngOnInit(): void {
    // Get the token from the query parameters
    this.token = this.route.snapshot.queryParams['token'];
    console.log("🚀 ~ ResetPasswordComponent ~ ngOnInit ~ this.token:", this.token)
  }

  password: string = '';
  token: string = '';
  message: string = '';
  error: string = '';
  compressedImage: string = '';
  compressedImageTrusted: any;

  private compressImage(file: File) {
    console.info("Starting compression for file:", file);
    this.ng2ImgMaxService.compress([file], 0.3).subscribe((result: any) => {
        console.log("Compression result:", result);
        this.compressedImage = window.URL.createObjectURL(result);
        this.compressedImageTrusted = this.sanitizer.bypassSecurityTrustUrl(this.compressedImage);
      }, (error: any) => {
        console.error("Compression error:", error);
      }
    );
  }

  async onSubmit() {
    debugger
    const response = this.userService.resetPassword(this.password, this.token).subscribe(
      response => {
        //const jsonResponse = JSON.stringify(response);
        //console.log('JSON Response:', jsonResponse);
        this.message = 'Password reestablecido correctamente. Por favor dirigete a la página de inicio de sesión.';
        this.error = '';
      },
      error => {
        this.error = error;
        this.message = '';
      }
    );
    /*
    console.log("🚀 ~ ResetPasswordComponent ~ onSubmit ~ response:", response)
    if(await response){
      this.message = 'Password reset successfully.';
      console.log("🚀 ~ ResetPasswordComponent ~ onSubmit ~ this.message:", this.message)
      this.error = '';
    }*/
    
    /*this.http.post(url, { token: this.token, password: this.password }).subscribe(
      response => {
        this.message = 'Password reset successfully.';
        this.error = '';
      },
      error => {
        this.error = 'Error resetting password.';
        this.message = '';
      }
    );*/
  }

}
