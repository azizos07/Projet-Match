import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css'],
})
export class PlayersTableComponent implements OnInit {
  playersTab: any = [];
  constructor() {}

  ngOnInit(): void {
    this.playersTab =  [
      { id: 1, name: 'Messi', nbr: 10, age: 37, position: 'ATK' },
      { id: 2, name: 'CR7', nbr: 7, age: 39, position: 'GK' },
      { id: 3, name: 'Xavi', nbr: 6, age: 45, position: 'MID' },
    ];
  }
}
