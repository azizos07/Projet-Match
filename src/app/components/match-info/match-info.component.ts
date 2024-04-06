import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchesData } from 'src/app/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css'],
})
export class MatchInfoComponent implements OnInit {
  result: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mService: MatchService
  ) {}
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.mService.getMatchById(id).subscribe((response) => {
      console.log('Here response from BE', response.match);
      this.result = response.match;
    });
  }
}
