import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Keg } from '../models/task.model';

@Component({
  selector: 'app-sell-pint',
  templateUrl: './sell-pint.component.html',
  styleUrls: ['./sell-pint.component.css']
})
export class SellPintComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Input() childSelectedKeg: Keg;
  @Output() sellPint = new EventEmitter();


  sellSinglePint() {
    console.log(this.childSelectedKeg.pintCount);
    this.sellPint.emit(this.childSelectedKeg.pintCount --);
  }

  constructor() { }

  ngOnInit() {
  }

}
