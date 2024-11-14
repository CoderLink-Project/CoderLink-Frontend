import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

  updateProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}`, profileData);
  }
}
