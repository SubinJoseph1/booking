import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatbookpageComponent } from './seatbookpage.component';

describe('SeatbookpageComponent', () => {
  let component: SeatbookpageComponent;
  let fixture: ComponentFixture<SeatbookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatbookpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatbookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
