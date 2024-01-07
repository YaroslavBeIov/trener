// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Проверка статуса авторизации при инициализации компонента
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  redirectTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
