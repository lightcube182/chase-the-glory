import {Component, OnInit} from '@angular/core';

import {MatchService} from '../match.service';
import {PlayerService} from '../player.service';
import {AngularFire, FirebaseAuthState, FirebaseListObservable} from "angularfire2";

import {Match} from '../Match';

@Component({
    selector: 'app-match-confirmation',
    templateUrl: './match-confirmation.component.html',
    styleUrls: ['./match-confirmation.component.scss']
})
export class MatchConfirmationComponent implements OnInit {
    unconfirmedMatches: FirebaseListObservable<Match[]>;
    auth: FirebaseAuthState;

    constructor(private matchService: MatchService, private playerService: PlayerService, private af: AngularFire) {

    }

    ngOnInit() {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
            this.unconfirmedMatches = this.matchService.getMatchByConfirmation(this.auth.uid);
        });
    }

    confirmMatch(match: Match) {
        this.matchService.updateMatchStatus(match.$key, match.confirmationUid, match.submissionUid, "confirmed");

        this.playerService.updateWins(match.winnerUid, match.leagueId);
        this.playerService.updateLosses(match.loserUid, match.leagueId);
        this.playerService.updateRankings(match.winnerUid, match.loserUid, match.leagueId);
    }

    denyMatch(match: Match) {
        this.matchService.updateMatchStatus(match.$key, match.confirmationUid, match.submissionUid, "denied");
    }
}
