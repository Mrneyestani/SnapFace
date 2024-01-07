import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Observable, Subject, concatMap, delay, filter, interval, map, mergeMap, of, take, tap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,RouterModule, RouterOutlet,ReactiveFormsModule, FormsModule, HttpClientModule, CoreModule, FaceSnapsModule]
})
export class AppComponent implements OnInit {
  // interval$! : Observable<string>;
  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;
  

  // ngOnInit() {
  //   this.interval$ = interval(1000).pipe(
  //     filter(value => value % 3 ===0),
  //     map(value => value % 2 === 0 ? 
  //       `Je suis ${value} et je suis pair` : 
  //       `Je suis ${value} et je suis impair` 
  //       )
        // tap(text => this.logger(text))
    // );
    // interval$.subscribe(value => console.log(value));
    // setTimeout(() => interval$.subscribe(value => console.log(value)), 3000);
    
  // }

  // logger(text: string): void {
  //   console.log(`Log: ${text}`);
// }
ngOnInit() {
  // interval(500).pipe(
  //   take(10),
  //   map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
  //   tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
  //   mergeMap(color => this.getTrainObservable$(color)),
  //   // concatMap(color => this.getTrainObservable$(color)),
  //   // exhaustMap(color => this.getTrainObservable$(color)),
  //   // switchMap(color => this.getTrainObservable$(color)),
  //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
  // ).subscribe();
}

// getTrainObservable$(color: 'rouge' | 'jaune') {
//   const isRedTrain = color === 'rouge';
//   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
//   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
//   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
//   return of({ color, trainIndex }).pipe(
//     delay(isRedTrain ? 5000 : 6000)
//   );
// }
// translateColor(color: 'rouge' | 'jaune') {
//   return color === 'rouge' ? 'red' : 'yellow';
// }

}
