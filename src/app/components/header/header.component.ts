import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  decodedToken: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn() {
    let jwt = sessionStorage.getItem('token');
    if (jwt) {
      this.decodedToken = jwtDecode(jwt);
    }
    return !!jwt;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
