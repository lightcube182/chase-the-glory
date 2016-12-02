/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatchConfirmationComponent} from './match-confirmation.component';

describe('MatchConfirmationComponent', () => {
    let component: MatchConfirmationComponent;
    let fixture: ComponentFixture<MatchConfirmationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatchConfirmationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchConfirmationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
