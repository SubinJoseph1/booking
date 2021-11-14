import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookticketComponent } from './newbookticket.component';

describe('NewbookticketComponent', () => {
  let component: NewbookticketComponent;
  let fixture: ComponentFixture<NewbookticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbookticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
