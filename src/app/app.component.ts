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
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Old Tavern Rat', 'Lompoc', 'Barleywine', 9.7, 95, 8, 120, 'local'),
    new Keg('RPM', 'Boneyard', 'IPA', 7.5, 75, 7, 11, 'local'),
  ];
  sellingKeg: boolean;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  sellPint(keg: Keg) {
    console.log(keg);
    keg.pintCount --;
  }
}
