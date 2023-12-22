import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris',
      },

      {
        title: 'Three Rock Montain',
        description: 'Un endroit magnifique !',
        imageUrl:
          'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600',
        createdDate: new Date(),
        snaps: 0,
        location: 'la montagne',
      },

      {
        title: 'Un bon repas',
        description: "Mmmh que c'est bon !",
        imageUrl:
          'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
        createdDate: new Date(),
        snaps: 0,
      },
    ];
  }
}
