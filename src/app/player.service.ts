import {Injectable}    from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

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

    updateWins(playerKey: string): void {
        let winner: FirebaseObjectObservable<Player> = this.getPlayer(playerKey),
            currentWins: number = 0;
        let winnerSubscription = winner.subscribe(snapshot => currentWins = snapshot.wins);
        winnerSubscription.unsubscribe();
        winner.update({wins: currentWins + 1})
    }

    updateLosses(playerKey: string): void {
        let loser: FirebaseObjectObservable<Player> = this.getPlayer(playerKey),
            currentLosses: number = 0;
        let loserSubscription = loser.subscribe(snapshot => currentLosses = snapshot.losses);
        loserSubscription.unsubscribe();
        loser.update({losses: currentLosses + 1})
    }

    updateLeagues(playerKey: string, league: League): void {
        let leagues: FirebaseObjectObservable<League[]> = this.af.database.object(`/players/${playerKey}/leagues/${league.leagueId}`);
        leagues.set({leagueName: league.leagueName, leagueId: league.leagueId});
    }

    getPlayerLeagues(playerKey: string): FirebaseListObservable<League[]> {
        return this.af.database.list(`/players/${playerKey}/leagues`);
    }

    create(player: Player) {
        this.af.database.object(`/players/${player.uid}`).set(player);
    }

    delete(playerKey: string) {
        this.players.remove(playerKey);
    }
}
