import { Injectable }    from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Player } from './player';

@Injectable()
export class PlayerService {
	players: FirebaseListObservable<Player[]>;
	constructor(
		private af: AngularFire ) {
			this.players = this.af.database.list('/players');
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

	updateWinsLosses(playerKey: string, newPlayer: Player): void {
		this.players.update(playerKey, {wins: newPlayer.wins});
		this.players.update(playerKey, {losses: newPlayer.losses});
	}

	create(player: Player) {
		this.players.push(player);
	}

	delete(playerKey: string) {
		this.players.remove(playerKey);
	}
}