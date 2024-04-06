import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  // Destination Address
  url: string = 'http://localhost:3000/matches';
  // httpClient => Bostagi
  constructor(private httpClient: HttpClient) {}

  // Array of Objects
  getAllMatches() {
    // <{ matches: any }> => réponse récupérée du Serveur BE
    return this.httpClient.get<{ matches: any }>(this.url);
  }
  // One Object
  getMatchById(id: any) {
    // return this.httpClient.get(this.url + "/" + id);
    return this.httpClient.get<{ match: any }>(`${this.url}/${id}`);
  }

  deleteMatch(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addMatch(m: any) {
    return this.httpClient.post<{ msg: string }>(this.url, m);
  }
  editMatch(m: any) {
    return this.httpClient.put<{ msg: string }>(this.url, m);
  }
}
