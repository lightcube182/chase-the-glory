import { Injectable }    from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Player } from './player';

@Injectable()
export class PlayerService {
	constructor(
		private af: AngularFire ) {
	}

	getPlayers(): FirebaseListObservable<Player[]> {
		return this.af.database.list('/players');
	}

	getPlayer(playerKey: string): FirebaseObjectObservable<Player> {
		return this.af.database.object(`/players/${playerKey}`);
	}

	update(player: FirebaseObjectObservable<Player>, newName: string): firebase.Promise<void> {
		const promise = player.update({ name: newName });
		return promise;
	}

	create(player: Player) {
		const players = this.af.database.list('/players');
		players.push({ "name": name });
	}

	delete(playerKey: string) {
		const playeres = this.af.database.list('/players');
		playeres.remove(playerKey);
	}
}