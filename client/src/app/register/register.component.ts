import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  firstname: string=""
  lastname: string=""
  email: string=""
  password: string=""

  constructor(private http:HttpClient){

  }

  ngOnInit():void{

  }

  register(){
    let bodyData={
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password
    }
    this.http.post("http://localhost:3000/trener/create", bodyData).subscribe((resultData: any)=>{
      console.log(resultData)
      alert("Тренер зарегестрирован")
    })
  }

  save(){
    this.register()
  }
}
