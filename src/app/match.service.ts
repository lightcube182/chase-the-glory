import {Injectable} from '@angular/core';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {Match} from './match';

@Injectable()
export class MatchService {
    matches: FirebaseListObservable<Match[]>;

    constructor(private af: AngularFire) {
        this.matches = this.af.database.list('/matches');
    }

    getMatches(): FirebaseListObservable<Match[]> {
        return this.matches;
    }

    create(match: Match) {
        this.matches.push(match);
    }

    getMatchByConfirmation(playerUid: string): FirebaseListObservable<Match[]> {
        return this.af.database.list(`/matches`, {
            query: {
                orderByChild: 'statusConfirmationUid',
                equalTo: `pending_${playerUid}`
            }
        });
    }

    updateMatchStatus(matchId: string, confirmationUid: string, newStatus: string): void {
        console.log('here');
        this.matches.update(matchId, {status: newStatus});
        this.matches.update(matchId, {statusConfirmationUid: `${newStatus}_${confirmationUid}`});
    }
}
