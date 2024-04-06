import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesData } from 'src/app/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css'],
})
export class EditMatchComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(id).subscribe((response) => {
      this.match = response.match;
    });
  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe((response) => {
      console.log('Here response from BE', response.msg);
      this.router.navigate(['admin']);
    });
  }
}
