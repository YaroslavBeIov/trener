import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


interface User {
  avatar: File | null;
  firstname: string;
  age: string;
  height: string;
  weight: string;
}

@Component({
  selector: 'app-settingsTrainee',
  standalone: true,
  templateUrl: './settingsTrainee.component.html',
  styleUrls: ['./settingsTrainee.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule]
})

export class SettingstraineeComponent {
  user: User = {
    firstname: "",
    age: "",
    height: "",
    weight: "",
    avatar: null
  };

  constructor(private http: HttpClient, private cookieService: CookieService) {}

    saveSettings() {
      const userId = this.cookieService.get('id');
      if (!userId) {
        console.error('Идентификатор пользователя не найден в куках');
        return;
      }

      const url = `http://localhost:3000/trainee/settings/${userId}`;
      this.http.post(url, this.user)
        .subscribe(
          (response) => {
            console.log('Настройки сохранены успешно', response);
          },
          (error) => {
          }
        );
    }
}

