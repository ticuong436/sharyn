import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachMuabanComponent } from './chinhsach-muaban.component';

describe('ChinhsachMuabanComponent', () => {
  let component: ChinhsachMuabanComponent;
  let fixture: ComponentFixture<ChinhsachMuabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsachMuabanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsachMuabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
