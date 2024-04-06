import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  // Destination Address
  url: string = 'http://localhost:3000/teams';
  // httpClient => Bostagi
  constructor(private httpClient: HttpClient) {}

  // Array of Objects
  getAllTeams() {
    // <{ teams: any }> => réponse récupérée du Serveur BE
    return this.httpClient.get<{ teams: any }>(this.url);
  }
  // One Object
  getTeamById(id: any) {
    // return this.httpClient.get(this.url + "/" + id);
    return this.httpClient.get<{ team: any }>(`${this.url}/${id}`);
  }

  deleteTeam(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addTeam(m: any) {
    return this.httpClient.post<{ msg: string }>(this.url, m);
  }
  editTeam(m: any) {
    return this.httpClient.put<{ msg: string }>(this.url, m);
  }
}
