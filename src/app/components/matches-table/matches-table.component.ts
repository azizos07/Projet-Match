import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchesData } from 'src/app/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any = [];

  constructor(private router: Router, private mService: MatchService) {}

  ngOnInit(): void {
    // this.matchesTab = matchesData;
    this.mService.getAllMatches().subscribe((data) => {
      console.log('Here data from Service', data.matches);
      this.matchesTab = data.matches;
    });
  }

  goToInfo(x: number) {
    // location.replace("page.html")
    this.router.navigate([`matchInfo/${x}`]);
  }

  goToEdit(id: number) {
    // location.replace("page.html")
    this.router.navigate([`editMatch/${id}`]);
  }

  deleteMatch(id: any) {
    this.mService.deleteMatch(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.mService.getAllMatches().subscribe((data) => {
        this.matchesTab = data.matches;
      });
    });
  }
}
