import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './registertrainee.component.html',
  styleUrl: './registertrainee.component.css'
})

export class TraineeComponent {
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
      "password": this.password,
      "role": "trenee"
    }
    this.http.post("http://localhost:3000/trainee/create", bodyData).subscribe((resultData: any)=>{
      console.log(resultData)
      alert("Подопечный зарегестрирован зарегестрирован")
    })
  }

  save(){
    this.register()
  }
}