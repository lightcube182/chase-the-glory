import {Component, OnInit, Input} from '@angular/core';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {PlayerService} from '../player.service';

import {Player} from '../player';

@Component({
    selector: 'players',
    templateUrl: 'players.component.html',
    styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {
    @Input()
    players: FirebaseListObservable<Player[]>;

    ngOnInit(): void {
        if (!this.players) {
            this.getPlayers();
        }
    }

    constructor(private playerService: PlayerService) {
    }

    getPlayers(): void {
        this.players = this.playerService.getPlayers();
    }
}