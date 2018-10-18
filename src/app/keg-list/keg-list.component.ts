import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Keg } from '../models/task.model';
// import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  toggleDone(clickedKeg: Keg, setTapped: boolean) {
    clickedKeg.tapped = setTapped;
  }
  constructor() { }

  ngOnInit() {
  }

  abvColor(currentKeg){
    if (currentKeg.abv >= 9){
      return "bg-danger";
    } else if ((currentKeg.abv >= 4) && (currentKeg.abv <= 8)) {
      return  "bg-warning";
    } else {
      return "bg-success";
    }
  }
}
