import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LeagueService} from '../league.service';
import {PlayerService} from '../player.service';

import {AppComponent} from '../app.component';

import {League} from '../league';

@Component({
    selector: 'app-create-league',
    templateUrl: './create-league.component.html',
    styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {
    newLeague = new League();

    constructor(private leagueService: LeagueService, private playerService: PlayerService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        let playerList: string[] = [AppComponent.currentUserId];
        this.newLeague.adminUid = AppComponent.currentUserId;
        this.newLeague.players = playerList;
        this.newLeague.type = "1v1";
        let newLeagueRef = this.leagueService.create(this.newLeague);
        this.newLeague.leagueId = newLeagueRef.key;
        this.playerService.updateLeagues(AppComponent.currentUserId, this.newLeague);

        this.router.navigate(['/']);
    }

}
