import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhtrangComponent } from './tinhtrang.component';

describe('TinhtrangComponent', () => {
  let component: TinhtrangComponent;
  let fixture: ComponentFixture<TinhtrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinhtrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhtrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
