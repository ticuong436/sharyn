import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieuquaComponent } from './hieuqua.component';

describe('HieuquaComponent', () => {
  let component: HieuquaComponent;
  let fixture: ComponentFixture<HieuquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HieuquaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HieuquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
