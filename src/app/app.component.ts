import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Chase the Glory';
	auth: FirebaseAuthState;

	ngOnInit(): void {

	}

	constructor(
		private router: Router,
		private af: AngularFire) {
			this.af.auth.subscribe(auth => this.auth = auth);
	}

	login() {
		//this.af.auth.login();
		console.log(this.auth);
	}
}
