import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient){}

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    // faceSnaps: FaceSnap[] = [
    //     {
    //       id: 1,
    //       title: 'Archibald',
    //       description: 'Mon meilleur ami depuis tout petit !',
    //       imageUrl:
    //         'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //       createdDate: new Date(),
    //       snaps: 2,
    //       location: 'Paris',
    //     },
  
    //     {
    //       id: 2,
    //       title: 'Three Rock Montain',
    //       description: 'Un endroit magnifique !',
    //       imageUrl:
    //         'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600',
    //       createdDate: new Date(),
    //       snaps: 8,
    //       location: 'la montagne',
    //     },
  
    //     {
    //       id: 3,
    //       title: 'Un bon repas',
    //       description: "Mmmh que c'est bon !",
    //       imageUrl:
    //         'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
    //       createdDate: new Date(),
    //       snaps: 5,
    //     },
    //   ];


    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    
    
    // getFaceSnapById(faceSnapId: number): FaceSnap {
    //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //   if (!faceSnap) {
    //       throw new Error('FaceSnap not found!');
    //   } else {
    //       return faceSnap;
    //   }
    // }

    // snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      // const faceSnap = this.getFaceSnapById(faceSnapId);
      // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  // }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`,
            updatedFaceSnap)
        )
    );
}

addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
  return this.getAllFaceSnaps().pipe(
       map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
       map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
       map(previousFacesnap => ({
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: previousFacesnap.id + 1
      })),
      switchMap(newFacesnap => this.http.post<FaceSnap>(
          'http://localhost:3000/facesnaps',
          newFacesnap)
      )
  );
}

}