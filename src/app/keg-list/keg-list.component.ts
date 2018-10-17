import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/task.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  kegs: Keg[] = [
    new Keg('Old Tavern Rat', 'Lompoc', 'Barleywine', 9.7, 95, 8, 120),
    new Keg('RPM', 'Boneyard', 'IPA', 7.5, 75, 7, 120),
  ];

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
