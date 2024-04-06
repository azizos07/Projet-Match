import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  errorMsg: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.userService.login(this.user).subscribe((response) => {
      console.log('Here response after login', response);
      if (response.token) {
        // Navigation
        let decodedToken: any = jwtDecode(response.token);
        sessionStorage.setItem("token", response.token);
        if (decodedToken.role == 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);
        }
      } else {
        // Error Msg
        this.errorMsg = 'Please check your Email/Pwd';
      }
    });
  }
}
