import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LeagueService} from '../league.service';
import {PlayerService} from '../player.service';

import {AppComponent} from '../app.component';

import {League} from '../league';
import {Player} from "../player";
import {FirebaseObjectObservable} from "angularfire2";

@Component({
    selector: 'app-create-league',
    templateUrl: './create-league.component.html',
    styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {
    newLeague = new League();

    constructor(private leagueService: LeagueService, private playerService: PlayerService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        let adminPlayerObservable: FirebaseObjectObservable<Player> = this.playerService.getPlayer(AppComponent.currentUserId);
        let adminPlayer: Player = new Player;
        let playerSubscription = adminPlayerObservable.subscribe(snapshot => {
            adminPlayer.email = snapshot.email;
            adminPlayer.name = snapshot.name;
            adminPlayer.image = snapshot.image;
            adminPlayer.uid = snapshot.uid;
        });
        playerSubscription.unsubscribe();
        adminPlayer.wins = 0;
        adminPlayer.losses = 0;
        adminPlayer.leagueMemberStatus = "active";
        this.newLeague.adminUid = adminPlayer.uid;
        if (!this.newLeague.players) {
            this.newLeague.players = new Array<Player>();
        }
        this.newLeague.players[adminPlayer.uid] = adminPlayer;
        this.newLeague.type = "1v1";
        let newLeagueRef = this.leagueService.create(this.newLeague);
        this.newLeague.$key = newLeagueRef.key;
        this.newLeague.leaguePlayerStatus = "active";
        this.playerService.updateLeagues(AppComponent.currentUserId, this.newLeague);

        this.router.navigate(['/']);
    }
}
