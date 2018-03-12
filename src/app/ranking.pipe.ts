import {Pipe, PipeTransform} from '@angular/core';
import {Player} from "./player";

@Pipe({
    name: 'ranking'
})
export class RankingPipe implements PipeTransform {
    transform(allPlayers: Player[]): Player[] {
        if (allPlayers != null) {
            return allPlayers.sort((player1, player2) => {
                if (player1.leaguePerformanceRating > player2.leaguePerformanceRating) {
                    return -1;
                } else if (player1.leaguePerformanceRating < player2.leaguePerformanceRating) {
                    return 1;
                }
                return 0;
            });
        } else {
            return null;
        }
    }
}
