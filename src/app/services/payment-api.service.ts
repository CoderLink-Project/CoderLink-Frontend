import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaptureOrderRequest } from '../models/capture-order-request.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Importando el archivo de entorno

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {
  private apiUrl = environment.apiUrl;  // Usando la URL de entorno

  constructor(private http: HttpClient) {}

  captureOrder(request: CaptureOrderRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/capture`, request);
  }
}


