import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Component({
  selector: 'app-profileTrainee',
  templateUrl: './profileTrainee.component.html',
  styleUrls: ['./profileTrainee.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule],
  standalone: true,
})
export class ProfileTraineeComponent implements OnInit {
  userData: any = {
    firstname: '',
    age: '',
    height: '',
    weight: ''
  };

  constructor(private cookieService: CookieService,private http: HttpClient) { }

  getUserData(userId: string): Observable<any> {
    const url = `http://localhost:3000/trainee/profile/${userId}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        console.error('Ошибка при загрузке данных пользователя', error);
        return ('Ошибка при загрузке данных пользователя');
      })
    );
  }
// Метод, вызываемый при инициализации компонента
  ngOnInit(): void {
    const userId = this.cookieService.get('id');
    if (!userId) {
      console.error('Идентификатор пользователя не найден в куках');
      return;
    }
// Получаем данные пользователя и подписываемся на результат
    this.getUserData(userId)
      .subscribe((data: any) => {
        this.userData = data;
      });
  }
}
