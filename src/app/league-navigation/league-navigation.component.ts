import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';

import { PlayerService } from '../player.service';

import { Player } from '../player';
import { League } from '../league';

@Component({
  selector: 'app-league-navigation',
  templateUrl: './league-navigation.component.html',
  styleUrls: ['./league-navigation.component.css']
})
export class LeagueNavigationComponent implements OnInit {
  auth: FirebaseAuthState;
  leagues: FirebaseListObservable<League[]>;

  constructor(private playerService: PlayerService, private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.auth = auth;
      this.leagues = this.playerService.getPlayerLeagues(auth.uid);
    });
  }

  ngOnInit() {
  }

}
