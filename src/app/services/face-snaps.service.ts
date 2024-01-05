import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl:
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 2,
          location: 'Paris',
        },
  
        {
          id: 2,
          title: 'Three Rock Montain',
          description: 'Un endroit magnifique !',
          imageUrl:
            'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600',
          createdDate: new Date(),
          snaps: 8,
          location: 'la montagne',
        },
  
        {
          id: 3,
          title: 'Un bon repas',
          description: "Mmmh que c'est bon !",
          imageUrl:
            'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
          createdDate: new Date(),
          snaps: 5,
        },
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
          throw new Error('FaceSnap not found!');
      } else {
          return faceSnap;
      }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
}

}