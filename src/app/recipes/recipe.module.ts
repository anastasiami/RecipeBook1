

export class Recipe {
  public name: string ;
  public shortDesc: string;
  public longDesc: string;
  public  imagePath: string;
  public category: string;
  public createDate:string;
  constructor( name: string, shortDesc: string, longDesc: string, img: string, category: string, date: string) {

    this.name = name;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.imagePath = img;
    this.category = category;
    this.createDate = date;
  }
}
