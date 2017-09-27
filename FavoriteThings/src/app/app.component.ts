import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  constructor(db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    firebase.database().ref().child('color').on('value', (snapshot: firebase.database.DataSnapshot) => { 
      this.favoriteColor = snapshot.val();
     });
  }

  ngOnDestroy(): void {
    // Good for best practice
    firebase.database().ref().child('color').off();
  }

  setColor(selectedColor: string): void {
    // console.log('You selected the color ' + selectedColor);
    // this.favoriteColor = selectedColor;
    // Don't need to set local variable since it will be access via cloud.
    firebase.database().ref().child('color').set(selectedColor);
  }
  // updateColor(): void {
  //   console.log('TODO: Update the color');
  //   firebase.database().ref().child('color').once('value', (snapshot: firebase.database.DataSnapshot) => { 
  //     this.favoriteColor = snapshot.val();
  //    });
  // }
  setNumber(newFavoriteNumber: number): void {
    this.favoriteNumber = newFavoriteNumber;
  }
}
