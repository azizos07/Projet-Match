import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab:any = [
    {name: "Messi", nbr:10},
    {name: "CR7", nbr:7},
    {name: "Iniesta", nbr:8},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
