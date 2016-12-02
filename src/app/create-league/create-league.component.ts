import {Component, OnInit} from '@angular/core';

import {LeagueService} from '../league.service';

import {AppComponent} from '../app.component';

import {League} from '../league';

@Component({
    selector: 'app-create-league',
    templateUrl: './create-league.component.html',
    styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {
    newLeague = new League();

    constructor(private leagueService: LeagueService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.newLeague.adminUid = AppComponent.currentUserId;
        console.log(this.newLeague.adminUid);
        this.leagueService.create(this.newLeague);
    }

}
