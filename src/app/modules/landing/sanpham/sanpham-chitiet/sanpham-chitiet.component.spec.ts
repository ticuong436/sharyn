import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamChitietComponent } from './sanpham-chitiet.component';

describe('SanphamChitietComponent', () => {
  let component: SanphamChitietComponent;
  let fixture: ComponentFixture<SanphamChitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamChitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
