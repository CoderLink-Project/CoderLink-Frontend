import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    const payload = { currentPassword, newPassword };
    return this.http.post(`${this.apiUrl}/change-password`, payload);
  }
  isAuthenticated(): boolean {
    // Ejemplo de lógica de autenticación (puedes cambiar esto según tus necesidades)
    return !!localStorage.getItem('authToken');
  }
}
