import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})



export class TraineeService {

  constructor(private http: HttpClient) { }

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
}
