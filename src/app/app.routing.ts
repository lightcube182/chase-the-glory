import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent }      from './players.component';
import { PlayerSignUpComponent }	from './player-sign-up/player-sign-up.component';
import { SubmitMatchComponent }	from './submit-match/submit-match.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/players',
		pathMatch: 'full'
	},
	{
		path: 'players',
		component: PlayersComponent
	},
	{
		path: 'player-sign-up',
		component: PlayerSignUpComponent
	},
	{
		path: 'submit-match',
		component: SubmitMatchComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);