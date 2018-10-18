export class Keg {
  emit(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  public tapped: boolean = true;
  constructor(public name: string, public brewery: string, public style: string, public abv: number, public ibu: number, public price: number, public pintCount: number, public region: string) { }
}
