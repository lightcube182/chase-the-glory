import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { routing } from './app.routing';

import { PlayerService } from './player.service';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players.component';
import { PlayerSignUpComponent } from './player-sign-up/player-sign-up.component';

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
    PlayerSignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
