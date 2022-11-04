export class Recipe {
  public name: string;
  public descryption: string;
  public imagePatch: string;
  constructor(name: string, desc: string, imagePatch: string) {
    this.name = name;
    this.descryption = desc;
    this.imagePatch = imagePatch;
  }
}

// export interface Recipe {
//   name: string;
//   descyption: string;
//   imagePatch: string;
// }
