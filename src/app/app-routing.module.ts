import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  // http://localhost:4200/login ==> loginComponent va s'afficher
  { path: 'login', component: LoginComponent },

  // http://localhost:4200/inscription ==> singupComponent va s'afficher
  { path: 'inscription', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },

  // http://localhost:4200 ==> homeComponent va s'afficher
  { path: '', component: HomeComponent },

  { path: 'matches', component: MatchesComponent },

  { path: 'allPlayers', component: PlayersComponent },

  { path: 'admin', component: AdminComponent },

  { path: 'addMatches', component: AddMatchesComponent },

  { path: 'addPlayer', component: AddPlayerComponent },

  { path: 'addTeam', component: AddTeamComponent },
  // path paramétré (:id)
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'searchWeather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
