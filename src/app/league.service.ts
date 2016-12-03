import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {League} from './league';

@Injectable()
export class LeagueService {
    leagues: FirebaseListObservable<League[]>;

    constructor(private af: AngularFire) {
        this.leagues = this.af.database.list('/leagues');
    }

    getLeagues(): FirebaseListObservable<League[]> {
        return this.leagues;
    }

    getLeague(playerUid: string): FirebaseListObservable<League[]> {
        return this.af.database.list(`/players`, {
            query: {
                orderByChild: 'uid',
                equalTo: playerUid
            }
        });
    }

    create(league: League) {
        let newPostRef = this.leagues.push(league);
        return newPostRef;
    }

    delete(leagueKey: string) {
        this.leagues.remove(leagueKey);
    }
}
