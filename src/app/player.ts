import {League} from './league';

export class Player {
    name: string;
    uid: string;
    email: string;
    image: string;
    losses: number;
    wins: number;
    leagues: League[];
    leagueMemberStatus: string;
    $key: string;
    $exists: () => boolean;
}