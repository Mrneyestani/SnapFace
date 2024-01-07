import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, Subject, interval, takeUntil, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss',
    imports: [CommonModule,FaceSnapComponent, HttpClientModule]
})
export class FaceSnapListComponent implements OnInit{
  
//   faceSnaps! : FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

//   private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
   this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
   
   //   this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  //   this.destroy$ = new Subject<boolean>();

  //   interval(1000).pipe(
  //     tap(console.log),
  //     takeUntil(this.destroy$)
  // ).subscribe();

     }

  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  // }
}
