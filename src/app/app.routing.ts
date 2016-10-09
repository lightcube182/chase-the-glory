import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent }      from './players.component';
import { PlayerSignUpComponent }	from './player-sign-up/player-sign-up.component';

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
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);