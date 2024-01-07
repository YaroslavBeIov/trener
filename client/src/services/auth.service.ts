import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;

  constructor(private cookieService: CookieService) {}

  login() {
    this.isAuthenticated = true;
    this.cookieService.set('authToken', 'yourAuthToken'); // Задайте ваш токен
  }

  logout() {
    this.isAuthenticated = false;
    this.cookieService.delete('authToken');
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
