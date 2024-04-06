import { Component, Input, OnInit,Output } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  @Input() matchesInput: any;
  @Output() newMatches:EventEmitter<any> = new EventEmitter();
  decodedToken : any ;

  constructor(private mService:MatchService) {}

  ngOnInit(): void {}
  
  deleteMatch(id:any){
    this.mService.deleteMatch(id).subscribe(
      (response)=>{
        console.log("here response after delete",response.msg);
        this.mService.getAllMatches().subscribe(
          (data)=>{
            this.newMatches.emit(data.matches)
          
        } )
        
      }
    ) ; 
  }

  isLoggedIn() {
    let jwt = sessionStorage.getItem('token');
    if (jwt) {
      this.decodedToken = jwtDecode(jwt);
    }
    return !!jwt;
  }

  scoreColor(s1: number, s2: number) {
    if (s1 > s2) {
      return 'green';
    } else if (s1 < s2) {
      return 'orange';
    } else {
      return 'blue';
    }
  }
}
