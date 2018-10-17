export class Keg {
  public tapped: boolean = true;
  constructor(public name: string, public brewery: string, public style: string, public abv: number, public ibu: number, public price: number, public pintCount: number, public region: string) { }
}
