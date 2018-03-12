import {Player} from './player';

export class League {
    adminUid: string;
    $key: string;
    leagueName: string;
    players: Player[];
    sport: string;
    type: string;
    leagueId: string;
    leaguePlayerStatus: string;
}