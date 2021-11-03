import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondROwComponent } from './second-row.component';

describe('SecondROwComponent', () => {
  let component: SecondROwComponent;
  let fixture: ComponentFixture<SecondROwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondROwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondROwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
