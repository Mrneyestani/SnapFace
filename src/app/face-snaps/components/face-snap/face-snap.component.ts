import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';
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
  constructor(private faceSnapsService: FaceSnapsService, 
              private router: Router) {}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.snaped = false;
  }
  //solution 1
  onSnap() {
    if (!this.snaped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
      this.snaped = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
      this.snaped = false;
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
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
