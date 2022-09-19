import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsToggleComponent } from './options-toggle.component';

describe('OptionsToggleComponent', () => {
  let component: OptionsToggleComponent;
  let fixture: ComponentFixture<OptionsToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
