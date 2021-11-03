import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorestarComponent } from './scorestar.component';

describe('ScorestarComponent', () => {
  let component: ScorestarComponent;
  let fixture: ComponentFixture<ScorestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
