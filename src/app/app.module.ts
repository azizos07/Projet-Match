import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventsComponent } from './components/cup-events/cup-events.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventsComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MatchesComponent,
    PlayersComponent,
    AdminComponent,
    AddMatchesComponent,
    AddPlayerComponent,
    AddTeamComponent,
    ArticleComponent,
    PlayerComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    AsterixPipe,
    ReversePipe,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
