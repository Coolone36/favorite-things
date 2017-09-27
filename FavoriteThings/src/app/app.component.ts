import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  setColor(selectedColor: string): void {
    console.log('You selected the color ' + selectedColor);
    this.favoriteColor = selectedColor;
  }
  updateColor(): void {
    console.log('TODO: Update the color');
  }
  setNumber(newFavoriteNumber: number): void {
    this.favoriteNumber = newFavoriteNumber;
  }
}
