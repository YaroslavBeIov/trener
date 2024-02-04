import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tolog',
  standalone: true,
  imports: [],
  templateUrl: './tolog.component.html',
  styleUrl: './tolog.component.css'
})
export class TologComponent {
  
  constructor(private router: Router) {}

  navigateToLogin(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
