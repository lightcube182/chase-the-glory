import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';

import { PlayerService } from './player.service';

import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Chase the Glory';
	auth: FirebaseAuthState;

	constructor(
		private router: Router,
		private af: AngularFire,
		private playerService: PlayerService) {
	}

	ngOnInit(): void {
		this.af.auth.subscribe(auth => {
			this.auth = auth;
			let players: FirebaseListObservable<Player[]> = this.playerService.getPlayer(this.auth.uid);
			players.subscribe(player => {
				if (!player.length) {
					let newPlayer: Player = new Player();
					newPlayer.name = this.auth.auth.displayName;
					newPlayer.email = this.auth.auth.email;
					newPlayer.uid = this.auth.uid;
					newPlayer.image = this.auth.auth.photoURL;
					newPlayer.losses = 0;
					newPlayer.wins = 0;
					this.playerService.create(newPlayer);
				}
			});
		});
	}

	login() {
		this.af.auth.login();
	}

	logout() {
		this.af.auth.logout();
	}
}
