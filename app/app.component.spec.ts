/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';

import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('holds an input field to enter a report', () => {
    var reportContentInputField = fixture.debugElement.query(By.css('#report-content')).nativeElement;
    var reportHash = fixture.debugElement.query(By.css('#report-hashed')).nativeElement;

    reportContentInputField.value = 'my report';
    reportContentInputField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(reportHash.textContent).toBe('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
  });

  it('displays the hashed report', () => {
    var reportContentInputField = fixture.debugElement.query(By.css('#report-content')).nativeElement;
    var reportHash = fixture.debugElement.query(By.css('#report-hashed')).nativeElement;

    reportContentInputField.value = 'another report';
    reportContentInputField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(reportHash.textContent).toBe('0x5917c10d9344319535b34bb5b24b1df303f6fdd691c74ea5f0f66cb1f19f07af');
  });
});
