import { Component } from '@angular/core';
import { Keg } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tapRoomName: string = "Shady's Kegs";
  kegs: Keg[] = [
    new Keg('Old Tavern Rat', 'Lompoc', 'Barleywine', 9.7, 95, 8, 120),
    new Keg('RPM', 'Boneyard', 'IPA', 7.5, 75, 7, 120),
  ];

  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
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
