import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDieuTriComponent } from './combo-dieu-tri.component';

describe('ComboDieuTriComponent', () => {
  let component: ComboDieuTriComponent;
  let fixture: ComponentFixture<ComboDieuTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboDieuTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboDieuTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
