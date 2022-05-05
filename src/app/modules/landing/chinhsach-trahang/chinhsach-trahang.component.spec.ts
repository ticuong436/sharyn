import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachTrahangComponent } from './chinhsach-trahang.component';

describe('ChinhsachTrahangComponent', () => {
  let component: ChinhsachTrahangComponent;
  let fixture: ComponentFixture<ChinhsachTrahangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsachTrahangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsachTrahangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
