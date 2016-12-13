/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {LeagueLandingComponent} from './league-landing.component';

describe('LeagueLandingComponent', () => {
    let component: LeagueLandingComponent;
    let fixture: ComponentFixture<LeagueLandingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeagueLandingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeagueLandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
