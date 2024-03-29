// role-selection.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  constructor(private router: Router) {}

  navigateToRegistration(role: string) {
    this.router.navigate(['/register', role]);
  }
}
