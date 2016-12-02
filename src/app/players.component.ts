import {Component, OnInit} from '@angular/core';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {PlayerService} from './player.service';

import {Player} from './player';

@Component({
    selector: 'players',
    templateUrl: 'players.component.html'
})

export class PlayersComponent implements OnInit {
    players: FirebaseListObservable<Player[]>;

    ngOnInit(): void {
        this.getPlayers();
    }

    constructor(private playerService: PlayerService) {
    }

    getPlayers(): void {
        this.players = this.playerService.getPlayers();
    }
}