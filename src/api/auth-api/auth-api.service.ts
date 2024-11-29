import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CreateCustomerRequest,} from '../customer-api/interfaces';
import { environment } from '../../environments/environment.development';
import { CreateDeveloperRequest } from '../developer-api/interfaces';
import { AuthenticationUserRequest, ChangePasswordRequest, RecoveryPasswordRequest } from './interfaces';
import { StorageService } from '../storage-service/storage.service';
import { AuthResponse } from '../storage-service/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  currentUserData : BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  

  httpClient = inject(HttpClient);
  storageService = inject(StorageService)

  constructor() {}

  registerCustomer(customer: CreateCustomerRequest):Observable<any>{
    return this.httpClient.post<any>(environment.urlBack+'/auth/register/customer/', customer)
  }

  registerDeveloper(developer: CreateDeveloperRequest):Observable<any>{
    return this.httpClient.post<any>(environment.urlBack+'/auth/register/developer/', developer)
  }

  login(user: AuthenticationUserRequest): Observable<any> {
     return this.httpClient.post<any>(environment.urlBack + '/auth/login/', user).pipe(
      tap((userData) => {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem("token", userData.token);
        }
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }
  

  logout(){
    this.storageService.clearAuthData()
  }

  recoveryPassword(recoveryPassword: RecoveryPasswordRequest):Observable<any>{
    return this.httpClient.post<any>(environment.urlBack + '/auth/recovery-password/', recoveryPassword)
  }

  resetPass(changePassword: ChangePasswordRequest):Observable<any>{
    return this.httpClient.post<any>(environment.urlBack+'/auth/change-password/',changePassword);
  }

  isAuthenticated(): boolean {
    return this.storageService.getAuthData() !== null;
  }

  getUser(): AuthResponse | null {
    const authData = this.storageService.getAuthData();
    return authData ? authData : null;
  }

  getUserRole(): string | null {
    const authData = this.storageService.getAuthData();
    return authData ? authData.role : null;
  }
}
