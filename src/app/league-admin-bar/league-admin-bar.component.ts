import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-league-admin-bar',
    templateUrl: './league-admin-bar.component.html',
    styleUrls: ['./league-admin-bar.component.scss']
})
export class LeagueAdminBarComponent implements OnInit {
    @Input()
    leagueId: string;

    constructor() {
    }

    ngOnInit() {
    }

}
