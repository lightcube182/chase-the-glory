import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FirebaseListObservable } from 'angularfire2';

import { PlayerService } from '../player.service';
import { MatchService } from '../match.service';

import { Player } from '../player';
import { Match } from '../match';

@Component({
  selector: 'app-submit-match',
  templateUrl: './submit-match.component.html',
  styleUrls: ['./submit-match.component.css']
})
export class SubmitMatchComponent implements OnInit {
	players: FirebaseListObservable<Player[]>;
	winner: Player;
	loser: Player;
	match = new Match();

  constructor( private playerService: PlayerService, private matchService: MatchService, private datePipe: DatePipe ) { }

  ngOnInit() {
  	this.getPlayers();
  }

  onSubmit() {
  	let todaysDate = new Date();

  	this.match.date = this.datePipe.transform(todaysDate, 'MM-dd-yyyy');
  	this.match.leagueId = "Recreational";
  	this.match.loserUid = this.loser.uid;
  	this.match.loserName = this.loser.name;
  	this.match.status = "confirmed";
  	this.match.winnerName = this.winner.name;
  	this.match.winnerUid = this.winner.uid;

  	this.winner.wins++;
  	this.loser.losses++;

    console.log('here');

  	this.playerService.updateWins(this.winner.$key, this.winner.wins);
  	this.playerService.updateLosses(this.loser.$key, this.loser.losses);

  	this.matchService.create(this.match);
  }

	getPlayers(): void {
		this.players = this.playerService.getPlayers();
	}

}
