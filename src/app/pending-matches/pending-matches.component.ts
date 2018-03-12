import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseAuthState} from 'angularfire2';

import {MatchService} from '../match.service';

import {Match} from '../match';

@Component({
    selector: 'app-pending-matches',
    templateUrl: './pending-matches.component.html',
    styleUrls: ['./pending-matches.component.scss']
})
export class PendingMatchesComponent implements OnInit {
    pendingMatches: FirebaseListObservable<Match[]>;
    auth: FirebaseAuthState;

    constructor(private af: AngularFire, private matchService: MatchService) {
    }

    ngOnInit() {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
            this.pendingMatches = this.matchService.getMatchBySubmission(this.auth.uid);
        });
    }
}