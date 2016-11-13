/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('holds an input field to enter a report', () => {
    var reportContentInputField = fixture.debugElement.query(By.css('#report-content')).nativeElement;
    var reportHash = fixture.debugElement.query(By.css('#report-hashed')).nativeElement;
    reportContentInputField.value = 'my report';
    fixture.detectChanges();
    expect(reportHash.textContent).toBe('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
  });
});
