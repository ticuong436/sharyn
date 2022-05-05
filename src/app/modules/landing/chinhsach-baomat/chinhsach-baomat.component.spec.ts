import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachBaomatComponent } from './chinhsach-baomat.component';

describe('ChinhsachBaomatComponent', () => {
  let component: ChinhsachBaomatComponent;
  let fixture: ComponentFixture<ChinhsachBaomatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsachBaomatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsachBaomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
