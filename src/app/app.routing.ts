import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlayersComponent}      from './players/players.component';
import {PlayerSignUpComponent}    from './player-sign-up/player-sign-up.component';
import {SubmitMatchComponent}    from './submit-match/submit-match.component';
import {CreateLeagueComponent}    from './create-league/create-league.component';
import {LeagueLandingComponent} from "./league-landing/league-landing.component";
import {InviteToLeagueComponent} from "./invite-to-league/invite-to-league.component";

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
    },
    {
        path: 'invite-to-league/:leagueId',
        component: InviteToLeagueComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);