import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/task.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
@Output() sendKeg = new EventEmitter();

  submitForm(name: string, brewery: string, style: string, abv: number, ibu: number, price: number, pintCount: number, region: string) {
    let newKeg: Keg = new Keg(name, brewery, style, abv, ibu, price, pintCount, region);
    this.sendKeg.emit(newKeg);
  }

  constructor() { }

  ngOnInit() {
  }

}
