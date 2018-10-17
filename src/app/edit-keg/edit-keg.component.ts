import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Keg } from '../models/task.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

  constructor() { }

  ngOnInit() {
  }
}
