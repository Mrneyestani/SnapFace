import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  snaped!: boolean;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.snaped = false;
  }
  //solution 1
  onSnap() {
    if (!this.snaped) {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
      this.snaped = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
      this.snaped = false;
    }
  }
  //solution 2
  // onSnap() {
  //   if (this.buttonText === 'Oh Snap!') {
  //     this.snaps++;
  //     this.buttonText = 'Oops, unSnap!';
  //   } else {
  //     this.snaps--;
  //     this.buttonText = 'Oh Snap!';
  //   }
  // }
}
