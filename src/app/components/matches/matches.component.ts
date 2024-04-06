import { Component, OnInit } from '@angular/core';
import { matchesData } from 'src/app/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  m: any = {};

  constructor(private mService : MatchService) {}

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe(
      (data)=>{
      this.matches = data.matches ;
    });
  }
  updateMatches(Tab:any){
    this.matches=Tab ;
  }
}
