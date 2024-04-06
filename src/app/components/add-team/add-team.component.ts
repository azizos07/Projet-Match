import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  teamForm!: FormGroup;
  constructor(private tService: TeamService) {}

  ngOnInit(): void {}
  addTeam() {
    this.tService.addTeam(this.team).subscribe((response) => {
      console.log('Here response', response.msg);
    });
  }
}
