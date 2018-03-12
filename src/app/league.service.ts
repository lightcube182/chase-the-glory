import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {League} from './league';
import {Player} from './player';

@Injectable()
export class LeagueService {
    leagues: FirebaseListObservable<League[]>;

    constructor(private af: AngularFire) {
        this.leagues = this.af.database.list('/leagues');
    }

    getLeagues(): FirebaseListObservable<League[]> {
        return this.leagues;
    }

    getLeague(leagueUid: string): FirebaseObjectObservable<League> {
        return this.af.database.object(`/leagues/${leagueUid}`);
    }

    getLeaguePlayers(leagueUid: string): FirebaseListObservable<Player[]> {
        return this.af.database.list(`/leagues/${leagueUid}/players`);
    }

    addPlayer(player: Player, leagueUid: string): void {
        this.af.database.object(`/leagues/${leagueUid}/players/${player.uid}`).set(player);
    }

    create(league: League) {
        let newPostRef = this.leagues.push(league);
        return newPostRef;
    }

    delete(leagueKey: string) {
        this.leagues.remove(leagueKey);
    }
}
