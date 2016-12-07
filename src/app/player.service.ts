import {Injectable}    from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/add/operator/first'

import {Player} from './player';
import {League} from './league';

@Injectable()
export class PlayerService {
    players: FirebaseListObservable<Player[]>;
    playerObject: FirebaseObjectObservable<Player>;

    constructor(private af: AngularFire) {
        this.players = this.af.database.list('/players');
        this.playerObject = this.af.database.object('/players');
    }

    getPlayers(): FirebaseListObservable<Player[]> {
        return this.players;
    }

    getPlayer(playerUid: string): FirebaseObjectObservable<Player> {
        return this.af.database.object(`/players/${playerUid}`);
    }

    updateWins(playerKey: string, leagueId: string): void {
        let winner: FirebaseObjectObservable<Player> = this.af.database.object(`/leagues/${leagueId}/players/${playerKey}`),
            currentWins: number = 0;
        let winnerSubscription = winner.first().subscribe(snapshot => {
            currentWins = snapshot.wins;
            winner.update({wins: currentWins + 1});
        });
        winnerSubscription.unsubscribe();
    }

    updateLosses(playerKey: string, leagueId: string): void {
        let loser: FirebaseObjectObservable<Player> = this.af.database.object(`/leagues/${leagueId}/players/${playerKey}`),
            currentLosses: number = 0;
        let loserSubscription = loser.first().subscribe(snapshot => {
            currentLosses = snapshot.losses
            loser.update({losses: currentLosses + 1});
        });
        loserSubscription.unsubscribe();
    }

    updateLeagues(playerKey: string, league: League): void {
        let leagues: FirebaseObjectObservable<League> = this.af.database.object(`/players/${playerKey}/leagues/${league.$key}`);
        leagues.set({leagueName: league.leagueName, leagueId: league.$key, leaguePlayerStatus: league.leaguePlayerStatus});
    }

    getPlayerLeagues(playerKey: string): FirebaseListObservable<League[]> {
        return this.af.database.list(`/players/${playerKey}/leagues`);
    }

    createPlayer(player: Player) {
        this.af.database.object(`/players/${player.uid}`).set(player);
    }

    deletePlayer(playerKey: string) {
        this.players.remove(playerKey);
    }
}
