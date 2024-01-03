import { Component} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap! : FaceSnap;
  buttonText!: string;
  snaped!: boolean;
  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.snaped = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
