import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Component, NgZone } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logintrainer',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './logintrainer.component.html',
  styleUrl: './logintrainer.component.css'
})

export class LoginTrainerComponent {
  email: string = ""
  password: string = ""
  firstName: string = ""
  lastName: string = ""
  role: string = ""
  id: string = ""
  
  constructor(private router: Router, 
    private http: HttpClient, 
    private ngZone: NgZone,
    private cookieService: CookieService,
    ){}

  login(){
    let bodyData = {
      email: this.email,
      password: this.password,
    } 
    this.http.post("http://localhost:3000/trener/login", bodyData).subscribe(
      (resultData: any) => {
        this.role = resultData.role
        this.id = resultData.id
        console.log("Вы успешно проникли", resultData)
        console.log("Роль, полученная с сервера:", this.role)

        this.ngZone.run(() => {
          if (resultData.status) {
            const tenSecondsFromNow = new Date();
            tenSecondsFromNow.setSeconds(tenSecondsFromNow.getSeconds() + 3600);
            localStorage.setItem('userRole', this.role);
            this.cookieService.set('id', this.id, tenSecondsFromNow)
            this.cookieService.set('userRole', this.role, tenSecondsFromNow);
            this.cookieService.set('isLoggedIn', 'true', tenSecondsFromNow);
            this.router.navigate(['/accountrainer']);
          } else {
            alert("Неправильный пароль или email")
            console.log("Ошибка авторизации")
          }
        });
      }
    );
  }
}
