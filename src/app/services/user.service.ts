import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  signup(user: any, img:File) {
    let fData = new FormData();
    fData.append("img", img);
    fData.append("firstName", user.firstName);
    fData.append("lastName", user.lastName);
    fData.append("email", user.email);
    fData.append("pwd", user.pwd);
    fData.append("role", user.role);
    fData.append("tel", user.tel);
    return this.http.post<{ msg: string }>(this.userUrl + '/signup', fData);
  }

  login(user: any) {
    return this.http.post<{
      token: string,
      msg: string
    }>(this.userUrl + '/login', user);
  }
}
