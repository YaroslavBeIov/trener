import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isLoggedIn: boolean = false;
  role: string = '';
  
  constructor(
    private router: Router, 
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.cookieService.get('isLoggedIn') === 'true';
    this.role = localStorage.getItem('userRole') || 'default';
  }
  
  redirectToHome() {
    this.router.navigate(['/home']);
  }

  redirectTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  login() {
  }

  getMyPageRoute(): string {
    if (this.role === 'trener') {
      return '/accountrainer';
    } else if (this.role === 'trenee') {
      return '/accountrainee';
    } else {
      return '/default-page';
    }
  }

  logout() {
    localStorage.removeItem('userRole'); // Удаление роли из локального хранилища
    this.cookieService.deleteAll(); // Удаление всех кук
    this.isLoggedIn = false; //Устанавливаем значение false для авторизации
    this.router.navigate(['/home']); // Перенаправление на главную страницу после выхода
  }
}

