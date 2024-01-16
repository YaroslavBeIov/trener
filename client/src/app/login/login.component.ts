import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  role: string = "";
  
  constructor(private router: Router, private http: HttpClient, private ngZone: NgZone){}

  login(){
    let bodyData = {
      email: this.email,
      password: this.password,
    }

    this.http.post("http://localhost:3000/trener/login", bodyData).subscribe(
      (resultData: any) => {
        this.role = resultData.role;
        console.log("Вы успешно проникли", resultData);
        console.log("Роль, полученная с сервера:", this.role);

        this.ngZone.run(() => {
          if (resultData.status) {
            if (this.role === 'trenee') {
              this.router.navigateByUrl('/accountrainee')
            } else if (this.role === 'trener') {
              this.router.navigateByUrl('/accountrainer')
            }
          } else {
            alert("Неправильный пароль или email")
            console.log("Ошибка авторизации")
          }
        });
      }
    );
  }
}
