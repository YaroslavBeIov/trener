import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  age: string;
  height: string;
  weight: string;
}

@Component({
  selector: 'app-settingsTrainee',
  standalone: true,
  templateUrl: './settingsTrainee.component.html',
  styleUrls: ['./settingsTrainee.component.css'],
  imports: [FormsModule, CommonModule,HttpClientModule]
})

export class SettingstraineeComponent {
  user: User = {
    name: "", //Добавить инфу о фотографии пользователя
    age: "",
    height: "",
    weight: ""
  };

  constructor(private http: HttpClient) {}

  saveSettings() {
    this.http.post('http://example.com/save-user-settings', this.user)
      .subscribe(
        (response) => {
          console.log('Настройки сохранены успешно', response);
        },
        (error) => {
          console.error('Ошибка при сохранении настроек', error);
        }
      );
  }
}

