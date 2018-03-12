import {Component, OnInit, Input} from '@angular/core';

import {AngularFire, FirebaseAuthState, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    auth: FirebaseAuthState;

    constructor(private af: AngularFire) {
    }

    ngOnInit() {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
        });
    }

    login() {
        this.af.auth.login();
    }

    logout() {
        this.af.auth.logout();
    }
}
