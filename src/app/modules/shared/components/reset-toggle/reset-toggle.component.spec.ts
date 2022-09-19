import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetToggleComponent } from './reset-toggle.component';

describe('ResetToggleComponent', () => {
  let component: ResetToggleComponent;
  let fixture: ComponentFixture<ResetToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
