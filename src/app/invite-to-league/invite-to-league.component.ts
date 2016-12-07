import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FirebaseListObservable} from "angularfire2";

import {PlayerService} from "../player.service";

import {Player} from "../player";
import {League} from "../League";
import {LeagueService} from "../league.service";

@Component({
    selector: 'app-invite-to-league',
    templateUrl: './invite-to-league.component.html',
    styleUrls: ['./invite-to-league.component.scss']
})
export class InviteToLeagueComponent implements OnInit {
    players: FirebaseListObservable<Player[]>;
    leagueId: string;
    league: League;

    constructor(private playerService: PlayerService, private leagueService: LeagueService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.players = this.playerService.getPlayers();
        this.leagueId = this.route.snapshot.params['leagueId'];
        this.leagueService.getLeague(this.leagueId).subscribe(league => this.league = league);
    }

    invitePlayer(player: Player) {
        let newLeague: League = this.league;
        let newPlayer: Player = new Player();
        newPlayer.uid = player.uid;
        newPlayer.email = player.email;
        newPlayer.image = player.image;
        newPlayer.name = player.name;
        newPlayer.wins = 0;
        newPlayer.losses = 0;
        newLeague.leaguePlayerStatus = "active";
        newPlayer.leagueMemberStatus = "active";
        newPlayer.leaguePerformanceRating = 350;
        this.playerService.updateLeagues(player.uid, newLeague);
        this.leagueService.addPlayer(newPlayer, this.leagueId);
    }
}
