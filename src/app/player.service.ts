import {Injectable}    from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {Player} from './player';

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
        let loser: FirebaseObjectObservable<Player> = this.getPlayer(playerKey),
            currentWins: number = 0;
        loser.subscribe(snapshot => currentWins = snapshot.wins);
        loser.update({wins: currentWins + 1})
    }

    updateLosses(playerKey: string): void {
        let loser: FirebaseObjectObservable<Player> = this.getPlayer(playerKey),
            currentLosses: number = 0;
        loser.subscribe(snapshot => currentLosses = snapshot.losses);
        loser.update({losses: currentLosses + 1})
    }

    create(player: Player) {
        this.af.database.object(`/players/${player.uid}`).set(player);
    }

    delete(playerKey: string) {
        this.players.remove(playerKey);
    }
}
