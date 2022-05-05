import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachThanhtoanComponent } from './chinhsach-thanhtoan.component';

describe('ChinhsachThanhtoanComponent', () => {
  let component: ChinhsachThanhtoanComponent;
  let fixture: ComponentFixture<ChinhsachThanhtoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsachThanhtoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsachThanhtoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
