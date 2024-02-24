import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map } from 'rxjs';

interface Meal {
  name: string;
  products: Product[];
}

interface Product {
  name: string;
  grams: number;
}

interface Activity {
  steps: string;
  weight: string;
}

@Component({
    standalone: true,
    selector: 'app-statistic-trainee',
    templateUrl: './statistictrainee.component.html',
    styleUrls: ['./statistictrainee.component.css'],
    imports: [FormsModule, CommonModule, HttpClientModule]
})
export class StatisticTraineeComponent implements OnInit {
    userData: any = {
        date: '',
        meals: [],
        activity: { steps: '0', weight: '0' }
    };

    constructor(private http: HttpClient, private cookieService: CookieService) { }
// Метод, вызываемый при инициализации компонента
    ngOnInit(): void {
        const userId = this.cookieService.get('id');
        if (!userId) {
            console.error('Идентификатор пользователя не найден в куках');
            return;
        }

        this.getUserData(userId)
            .subscribe((data: any) => {
                console.log(data);
                this.userData = Object.values(data);
            });
    }
// Метод для получения данных пользователя
    getUserData(userId: string): Observable<any> {
        const url = `http://localhost:3000/trainee/statistic/${userId}`;
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
}

