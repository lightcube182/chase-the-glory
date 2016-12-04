import {Component, OnInit, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

import {FirebaseListObservable} from 'angularfire2';

import {PlayerService} from '../player.service';
import {MatchService} from '../match.service';

import {AppComponent} from '../app.component';

import {Player} from '../player';
import {Match} from '../match';

@Component({
    selector: 'app-submit-match',
    templateUrl: './submit-match.component.html',
    styleUrls: ['./submit-match.component.css']
})
export class SubmitMatchComponent implements OnInit {
    @Input()
    players: FirebaseListObservable<Player[]>;

    @Input()
    leagueId: string;

    winner: Player;
    loser: Player;
    match = new Match();

    constructor(private playerService: PlayerService, private matchService: MatchService, private datePipe: DatePipe, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        let todaysDate = new Date();

        this.match.date = this.datePipe.transform(todaysDate, 'MM-dd-yyyy');
        this.match.leagueId = this.leagueId;
        this.match.loserUid = this.loser.uid;
        this.match.loserName = this.loser.name;
        this.match.status = "pending";
        this.match.winnerName = this.winner.name;
        this.match.winnerUid = this.winner.uid;
        this.match.submissionUid = AppComponent.currentUserId;
        this.match.confirmationUid = AppComponent.currentUserId === this.winner.uid ? this.loser.uid : this.winner.uid;
        this.match.statusConfirmationUid = `${this.match.status}_${this.match.confirmationUid}`;

        this.matchService.create(this.match);

        this.router.navigate(['/']);
    }
}
