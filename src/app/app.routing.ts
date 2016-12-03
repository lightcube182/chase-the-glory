import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlayersComponent}      from './players.component';
import {PlayerSignUpComponent}    from './player-sign-up/player-sign-up.component';
import {SubmitMatchComponent}    from './submit-match/submit-match.component';
import {CreateLeagueComponent}    from './create-league/create-league.component';
import {LeagueLandingComponent} from "./league-landing/league-landing.component";

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
    },
    {
        path: 'create-league',
        component: CreateLeagueComponent
    },
    {
        path: 'league-landing/:leagueId',
        component: LeagueLandingComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);