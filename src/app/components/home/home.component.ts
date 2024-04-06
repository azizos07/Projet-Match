import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match : any ={};
  constructor() { }

  ngOnInit(): void {
    this.match={id:"1",teamOne:"CSS",teamTwo:"CA",scoreOne:"1",scoreTwo:"0"}
  }

}
