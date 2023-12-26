import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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
  email: string=""
  password: string=""
  firstName: string=""
  lastName: string=""
  role: string="trener"

  isLogin: boolean = true

  errorMessage:string=""

  constructor(private router: Router, private http:HttpClient){}

  login(){
    console.log(this.email)
    console.log(this.password)

    let bodyData={
      email: this.email,
      password: this.password
    }

    this.http.post("http://localhost:3000/trener/login", bodyData).subscribe((resultData: any) =>{
      console.log(resultData)

      if(resultData.status){
        this.router.navigateByUrl('/home')
      }else{
        alert("Неправильный пароль или email")
        console.log("Ошибка авторизации")
      }
    })
  }
}
