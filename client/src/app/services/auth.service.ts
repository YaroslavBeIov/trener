import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;
  private userRole: string = ''; // Добавлено свойство для хранения роли

  constructor(private cookieService: CookieService) {}

  private loggedInSource = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSource.asObservable();
  
  login(role: string) {
    this.isAuthenticated = true; 
    this.userRole = role; // Установка роли при входе
    this.cookieService.set('authToken', 'yourAuthToken'); // Задайте ваш токен
    this.cookieService.set('userRole1', role); // Сохранение роли в куках
    this.loggedInSource.next(true); // Уведомление об изменении состояния входа
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = ''; // Сброс роли при выходе
    this.cookieService.delete('authToken');
    this.cookieService.delete('userRole'); // Удаление куки с ролью
    this.loggedInSource.next(false); // Уведомление об изменении состояния входа
  }

  setLoggedIn(value: boolean) {
    this.loggedInSource.next(value);
  }

  getUserRole(): string {
    return this.userRole;
  }
}

