import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
    standalone: true,
    selector: 'app-statistic-trainee',
    templateUrl: './statistictrainee.component.html',
    styleUrls: ['./statistictrainee.component.css'],
    imports: [FormsModule, CommonModule, HttpClientModule]
})
export class StatisticTraineeComponent implements OnInit {
    selectedDate: string = '';
    meals: { name: string, products: { name: string, grams: number }[] }[] = [];
    steps: number = 0;
    weight: number = 0;

    constructor(private http: HttpClient, private cookieService: CookieService,) { }

    ngOnInit(): void {
        const userId = this.cookieService.get('id');
        this.http.get<any>(`http://localhost:3000/trainee/statistic/${userId}`)
        .subscribe((data: any) => {
            console.log('Received data:', data);
            if (data && data.meals && Array.isArray(data.meals)) {
              this.selectedDate = data.date; // Устанавливаем дату
              this.meals = data.meals.map((meal: any) => {
                return {
                  mealType: meal.name,
                  food: meal.products.map((product: any) => product.name).join(', '), // Объединяем названия продуктов через запятую
                  grams: meal.products.reduce((total: number, product: any) => total + product.grams, 0) // Суммируем граммы продуктов
                };
              });
              this.steps = data.steps; // Устанавливаем количество шагов
              this.weight = data.weight; // Устанавливаем вес
            }
          });
    }
}
