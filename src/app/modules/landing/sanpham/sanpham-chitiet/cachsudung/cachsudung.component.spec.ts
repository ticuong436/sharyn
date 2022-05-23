import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachsudungComponent } from './cachsudung.component';

describe('CachsudungComponent', () => {
  let component: CachsudungComponent;
  let fixture: ComponentFixture<CachsudungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachsudungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CachsudungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
