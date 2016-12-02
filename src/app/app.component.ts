import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFire, FirebaseAuthState, FirebaseObjectObservable} from 'angularfire2';

import {PlayerService} from './player.service';

import {Player} from './player';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Chase the Glory';
    auth: FirebaseAuthState;
    static currentUserId: string;

    constructor(private router: Router,
                private af: AngularFire,
                private playerService: PlayerService) {

        this.af.auth.subscribe(auth => {
            this.auth = auth;
            let player: FirebaseObjectObservable<Player> = this.playerService.getPlayer(this.auth.uid);
            player.subscribe(player => {
                AppComponent.currentUserId = this.auth.uid;
                if (!player.$exists()) {
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

    ngOnInit(): void {
    }

    login() {
        this.af.auth.login();
    }

    logout() {
        this.af.auth.logout();
    }
}
