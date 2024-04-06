import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css'],
})
export class AddMatchesComponent implements OnInit {
  // matchForm => Form ID
  matchForm!: FormGroup;
  match: any = {};

  constructor(private mService: MatchService, private router: Router) {}

  ngOnInit() {}

  addMatch() {
    console.log('Here match', this.match);
    this.mService.addMatch(this.match).subscribe((response) => {
      this.router.navigate(['admin']);
    });
  }
}
