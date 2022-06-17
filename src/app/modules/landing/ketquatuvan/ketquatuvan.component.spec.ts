import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetquatuvanComponent } from './ketquatuvan.component';

describe('KetquatuvanComponent', () => {
  let component: KetquatuvanComponent;
  let fixture: ComponentFixture<KetquatuvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetquatuvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KetquatuvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
