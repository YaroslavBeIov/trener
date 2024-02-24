import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

interface Meal {
  name: string;
  products: Product[];
}

interface Product {
  name: string;
  grams: number;
}

interface Activity {
  steps: String,
  weight: String
}

@Component({
  selector: 'app-dietrainee',
  standalone: true,
  templateUrl: './dietrainee.component.html',
  styleUrls: ['./dietrainee.component.css'],
  imports: [FormsModule, CommonModule,HttpClientModule]
})

export class DietraineeComponent {
  meals: Meal[] = [];
  userId: string = "";
  activity: Activity = { steps: "0", weight: "0" };

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.userId = this.cookieService.get('id');
  }

  // Метод для добавления нового приема пищи
  addMeal() {
    this.meals.push({ name: '', products: [] });
  }

  // Метод для удаления приема пищи
  removeMeal(meal: Meal) {
    const index = this.meals.indexOf(meal);
    if (index !== -1) {
      this.meals.splice(index, 1);
    }
  }

  // Метод для добавления нового продукта к приему пищи
  addProduct(meal: Meal) {
    meal.products.push({ name: '', grams: 0 });
  }

  // Метод для удаления продукта из приема пищи
  removeProduct(meal: Meal, product: Product) {
    const index = meal.products.indexOf(product);
    if (index !== -1) {
      meal.products.splice(index, 1);
    }
  }

  // Метод для отправки данных о приемах пищи на сервер
  submitMeals() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const allData = { userId: this.userId, meals: this.meals, formattedDate: formattedDate, activity: this.activity};

    const headers = new HttpHeaders().set('Content-Type', 'application/json');  // Создаем заголовки запроса
    
    this.http.post('http://localhost:3000/trainee/meals', allData, { headers }).subscribe(
      response => {
        console.log('Данные успешно отправлены на сервер:', response);
      },
      error => {
        console.error('Ошибка при отправке данных на сервер:', error);
      }
    );
  }
}
