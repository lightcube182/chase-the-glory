import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {routing} from './app.routing';

import {PlayerService} from './player.service';
import {MatchService} from './match.service';
import {LeagueService} from './league.service';

import {AppComponent} from './app.component';
import {PlayersComponent} from './players/players.component';
import {PlayerSignUpComponent} from './player-sign-up/player-sign-up.component';
import {PlayerDetailsComponent} from './player-details/player-details.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SubmitMatchComponent} from './submit-match/submit-match.component';
import {CreateLeagueComponent} from './create-league/create-league.component';
import {MatchConfirmationComponent} from './match-confirmation/match-confirmation.component';
import {LeagueLandingComponent} from './league-landing/league-landing.component';
import {LeagueNavigationComponent} from './league-navigation/league-navigation.component';
import {InviteToLeagueComponent} from './invite-to-league/invite-to-league.component';
import {LeagueAdminBarComponent} from './league-admin-bar/league-admin-bar.component';
import {NotInLeaguePipe} from './not-in-league.pipe';

export const firebaseConfig = {
    apiKey: "AIzaSyB-shn6r6-LgmCy6v8maYr_Oynjb8eQlEs",
    authDomain: "chasetheglory-28480.firebaseapp.com",
    databaseURL: "https://chasetheglory-28480.firebaseio.com",
    storageBucket: "chasetheglory-28480.appspot.com",
    messagingSenderId: "636752680420"
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
}

@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        PlayerSignUpComponent,
        PlayerDetailsComponent,
        NavigationComponent,
        SubmitMatchComponent,
        CreateLeagueComponent,
        MatchConfirmationComponent,
        LeagueLandingComponent,
        LeagueNavigationComponent,
        InviteToLeagueComponent,
        LeagueAdminBarComponent,
        NotInLeaguePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
    ],
    providers: [PlayerService, MatchService, LeagueService, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
