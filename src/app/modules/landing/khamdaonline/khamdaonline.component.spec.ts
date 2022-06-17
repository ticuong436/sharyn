import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamdaonlineComponent } from './khamdaonline.component';

describe('KhamdaonlineComponent', () => {
  let component: KhamdaonlineComponent;
  let fixture: ComponentFixture<KhamdaonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhamdaonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamdaonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
