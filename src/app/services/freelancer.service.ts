import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Freelancer } from '../models/freelancer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private apiUrl = `${environment.apiUrl}/freelancers`;

  constructor(private http: HttpClient) {}

  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.apiUrl);
  }
}
