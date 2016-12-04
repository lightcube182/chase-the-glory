import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {LeagueService} from "../league.service";

import {League} from "../league";
import {Player} from "../player";
import {FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'app-league-landing',
    templateUrl: './league-landing.component.html',
    styleUrls: ['./league-landing.component.scss']
})
export class LeagueLandingComponent implements OnInit {
    league: League = new League();
    leaguePlayers: FirebaseListObservable<Player[]>;

    constructor(private route: ActivatedRoute, private router: Router, private leagueService: LeagueService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.leagueService.getLeague(params['leagueId']))
            .subscribe((league: League) => {
                this.league = league;
                this.leaguePlayers = this.leagueService.getLeaguePlayers(this.league.$key);
            });
    }

}
