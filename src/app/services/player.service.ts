import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // Destination Address
  url: string = 'http://localhost:3000/players';
  // httpClient => Bostagi
  constructor(private httpClient: HttpClient) {}

  // Array of Objects
  getAllPlayers() {
    // <{ players: any }> => réponse récupérée du Serveur BE
    return this.httpClient.get<{ players: any }>(this.url);
  }
  // One Object
  getPlayerById(id: any) {
    // return this.httpClient.get(this.url + "/" + id);
    return this.httpClient.get<{ player: any }>(`${this.url}/${id}`);
  }

  deletePlayer(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.url}/${id}`);
  }
  addPlayer(m: any) {
    return this.httpClient.post<{ msg: string }>(this.url, m);
  }
  editPlayer(m: any) {
    return this.httpClient.put<{ msg: string }>(this.url, m);
  }
}
