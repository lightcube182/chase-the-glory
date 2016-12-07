import {Pipe, PipeTransform} from '@angular/core';
import {Player} from "./player";

@Pipe({
    name: 'notInLeague'
})
export class NotInLeaguePipe implements PipeTransform {
    transform(allPlayers: Player[], leagueId: string): Player[] {
        if (allPlayers != null) {
            return allPlayers.filter(player => !(player.hasOwnProperty('leagues') && player.leagues.hasOwnProperty(leagueId)));
        } else {
            return null;
        }
    }
}
