// fitness.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fitness',
  standalone: true,
  templateUrl: './fitnesstrainee.component.html',
  styleUrls: ['./fitnesstrainee.component.css'],
  imports: [CommonModule]
})
export class FitnessTraineeComponent {
  showChestVideos: boolean = false;
  showBackVideos: boolean = false;
  showShouldersVideos: boolean = false;
  showLegsVideos: boolean = false;
  // Добавьте здесь другие переменные для других упражнений

  toggleVideo(exercise: string): void {
    this.resetVideos();

    // Определяем какое окно открыть
    switch (exercise) {
      case 'chest':
        this.showChestVideos = true;
        break;
      case 'back':
        this.showBackVideos = true;
        break;
      case 'shoulders':
        this.showShouldersVideos = true;
        break;
      case 'legs':
        this.showLegsVideos = true;
        break;
    }
  }

  resetVideos(): void {
    this.showChestVideos = false;
    this.showBackVideos = false;
    this.showShouldersVideos = false;
    this.showLegsVideos = false;
  }
}
