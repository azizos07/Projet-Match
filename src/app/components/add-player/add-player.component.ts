import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = {};
  teamsTab: any = [];
  idTeam:any;
  constructor(private pService: PlayerService, private tService: TeamService) {}

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((response) => {
      console.log('Here response from BE', response.teams);
      this.teamsTab = response.teams;
    });
  }

  addPlayer() {
    this.player.teamID = this.idTeam;
    console.log("Here player obj", this.player);
    this.pService.addPlayer(this.player).subscribe((response) => {
      console.log('Here response', response.msg);
    });
  }

  selectTeam(evt:any){
    console.log("here event id", typeof (evt.target.value));
    this.idTeam = evt.target.value;
  }
}
