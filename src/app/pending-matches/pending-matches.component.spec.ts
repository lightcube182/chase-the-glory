/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PendingMatchesComponent} from './pending-matches.component';

describe('PendingMatchesComponent', () => {
    let component: PendingMatchesComponent;
    let fixture: ComponentFixture<PendingMatchesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PendingMatchesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PendingMatchesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
