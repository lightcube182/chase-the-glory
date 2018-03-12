/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {InviteToLeagueComponent} from './invite-to-league.component';

describe('InviteToLeagueComponent', () => {
    let component: InviteToLeagueComponent;
    let fixture: ComponentFixture<InviteToLeagueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InviteToLeagueComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InviteToLeagueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
