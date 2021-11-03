import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpreparetestComponent } from './bookpreparetest.component';

describe('BookpreparetestComponent', () => {
  let component: BookpreparetestComponent;
  let fixture: ComponentFixture<BookpreparetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookpreparetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpreparetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
