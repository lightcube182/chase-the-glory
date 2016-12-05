/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {AddToLeagueComponent} from './invite-to-league.component';

describe('AddToLeagueComponent', () => {
    let component: AddToLeagueComponent;
    let fixture: ComponentFixture<AddToLeagueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddToLeagueComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddToLeagueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
