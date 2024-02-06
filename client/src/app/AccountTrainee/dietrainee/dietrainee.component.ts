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

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.userId = this.cookieService.get('id');
  }

  addMeal() {
    this.meals.push({ name: '', products: [] });
  }

  removeMeal(meal: Meal) {
    const index = this.meals.indexOf(meal);
    if (index !== -1) {
      this.meals.splice(index, 1);
    }
  }

  addProduct(meal: Meal) {
    meal.products.push({ name: '', grams: 0 });
  }

  removeProduct(meal: Meal, product: Product) {
    const index = meal.products.indexOf(product);
    if (index !== -1) {
      meal.products.splice(index, 1);
    }
  }

  submitMeals() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const allData = { userId: this.userId, meals: this.meals, formattedDate: formattedDate };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    this.http.post('http://localhost:3000/trainee/meals', allData, { headers }).subscribe(
      response => {
        console.log('Данные успешно отправлены на сервер:', response);
        // Здесь вы можете добавить логику обработки успешной отправки
      },
      error => {
        console.error('Ошибка при отправке данных на сервер:', error);
        // Здесь вы можете добавить логику обработки ошибки
      }
    );
  }
}
