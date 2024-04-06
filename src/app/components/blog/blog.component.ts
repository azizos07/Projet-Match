import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles:any=[];
  constructor() { }

  ngOnInit(): void {
    this.articles = [
      {id:"1",date:"30-01-2024",name:"CSS",description:"Loremmmmmm"},
      {id:"2",date:"30-01-2024",name:"RMA",description:"Loremmmmmm"},
      {id:"3",date:"30-01-2024",name:"OM",description:"Loremmmmmm"},
      {id:"4",date:"30-01-2024",name:"BVB",description:"Loremmmmmm"}
    ];
  }

}
