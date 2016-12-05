/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {LeagueAdminBarComponent} from './league-admin-bar.component';

describe('LeagueAdminBarComponent', () => {
    let component: LeagueAdminBarComponent;
    let fixture: ComponentFixture<LeagueAdminBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeagueAdminBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeagueAdminBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
