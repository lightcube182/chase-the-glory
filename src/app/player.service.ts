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

    getPlayer(playerUid: string): FirebaseListObservable<Player[]> {
        return this.af.database.list(`/players`, {
            query: {
                orderByChild: 'uid',
                equalTo: playerUid
            }
        });
    }

    updateWins(playerKey: string, wins: number): void {
        this.players.update(playerKey, {wins: wins});
    }

    updateLosses(playerKey: string, losses: number): void {
        this.players.update(playerKey, {losses: losses});
    }

    create(player: Player) {
        this.af.database.object(`/players/${player.uid}`).set(player);
    }

    delete(playerKey: string) {
        this.players.remove(playerKey);
    }
}
