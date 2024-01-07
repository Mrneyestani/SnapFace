//solution 1 :
export class FaceSnap {
  id! : number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location?: string;
}

//   constructor(
//     title: string,
//     description: string,
//     imageUrl: string,
//     createdDate: Date,
//     snaps: number,
//     location?: string
//   ) {
//     this.title = title;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//   }
// }

//solution 2 : raccourci TypeScript
// export class FaceSnap {
//   constructor(
//     public title: string,
//     public description: string,
//     public imageUrl: string,
//     public createdDate: Date,
//     public snaps: number,
//     public location?: string
//   ) {}
// }
